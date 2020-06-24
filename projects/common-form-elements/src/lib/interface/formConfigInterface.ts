import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
export enum FieldConfigInputType {
  INPUT = 'input',
  CHECKBOX = 'checkbox',
  SELECT = 'select',
  LABEL = 'label',
  NESTED_SELECT = 'nested_select'
}
export enum FieldConfigValidationType {
  REQUIRED = 'required',
  MAXLENGTH = 'maxLength',
  MINLENGTH = 'minLength',
  PATTERN = 'pattern'
}
export type FieldConfigOptionsBuilder<T> = (context?: FormControl) => Observable<FieldConfigOption<T>[]> | Promise<FieldConfigOption<T>[]>;
export interface FieldConfigOption<T> {
  label: string;
  value: T;
  extras?: T;
}
export interface FieldConfigOptionAssociations<T> {
  [key: string]: FieldConfigOption<T>[];
}
export interface FieldConfig<T> {
  code: string;
  type: FieldConfigInputType;
  default?: any;
  context?: string;
  children?: { [key: string]: FieldConfig<T>[] };
  templateOptions: {
    type?: string;
    label?: string,
    placeHolder?: string,
    multiple?: boolean,
    hidden?: boolean,
    options?: FieldConfigOption<T>[] | FieldConfigOptionsBuilder<T> | FieldConfigOptionAssociations<T>,
    labelHtml?: {
      contents: string,
      values: {[key: string]: string}
    }
  };
  validations?: [
    {
      type: FieldConfigValidationType,
      value?: string | boolean | number,
      message?: string
    }
  ];
}
