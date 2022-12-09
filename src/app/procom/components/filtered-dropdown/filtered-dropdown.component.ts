/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, map, Observable, startWith, Subscription, tap } from 'rxjs';

import { Option } from '../../models/option.model';

@Component({
  selector: 'app-filtered-dropdown',
  templateUrl: './filtered-dropdown.component.html',
  styleUrls: ['./filtered-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FilteredDropdownComponent), multi: true }],
})
export class FilteredDropdownComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() isMultiple = false;
  @Input() set options(o: Option[]) {
    this._options = o;
    this.searchControl.setValue('');
  }

  searchControl = new FormControl<string>('');
  select = new FormControl<Option[]>([]);

  relevantOptions$!: Observable<Option[]>;

  value!: Option | Option[];
  onChange?: (obj: Option | Option[] | null) => void;

  private _options!: Option[];
  private sub!: Subscription;

  ngOnInit() {
    this.subscribeToControls();
    this.setRelevantOptions();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  selectItem(i: Option[]): void {
    this.writeValue(i);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  writeValue = (obj: Option[] | null): void => {
    this.select.setValue(obj);
  };

  private subscribeToControls(): void {
    this.sub = this.select.valueChanges.subscribe((v) => {
      this.onChange?.(v);
    });
  }

  private setRelevantOptions(): void {
    this.relevantOptions$ = this.searchControl.valueChanges.pipe(
      debounceTime(150),
      startWith(''),
      map((v) => (v ? this._options.filter((i) => i.value.startsWith(<string>v)) : this._options)),
      tap((relevant) => {
        if (this.select.value) {
          const availableValues = new Set(relevant.map(({ id }) => id));
          this.select.setValue(this.select.value.filter(({ id }) => availableValues.has(id)));
        }
      })
    );
  }
}
