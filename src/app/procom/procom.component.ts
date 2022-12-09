import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Option } from './models/option.model';

@Component({
  selector: 'app-procom',
  template: `
    <div>
      Multiple:
      <input #multiple type="checkbox" />
    </div>
    <form [formGroup]="formGroup">
      <app-filtered-dropdown [options]="options" [isMultiple]="multiple.checked" formControlName="select"></app-filtered-dropdown>
    </form>
  `,
  styleUrls: ['./procom.component.scss'],
})
export class ProcomComponent implements OnInit {
  formGroup!: FormGroup;
  readonly options: Option[] = [
    {
      id: 1,
      value: 'first value',
    },
    {
      id: 2,
      value: 'second value',
    },
    {
      id: 3,
      value: 'first value',
    },
    {
      id: 4,
      value: 'second value',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      select: [],
    });

    this.formGroup.valueChanges.subscribe((v) => {
      console.log('parent', v);
    });
  }
}
