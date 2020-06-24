import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, EMPTY } from 'rxjs';
import { FieldConfigOption } from '../interface/formConfigInterface';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'sb-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit, OnChanges {
  @Input() options: any;
  @Input() label?: string;
  @Input() placeHolder?: string;
  @Input() isMultiple?: boolean;
  @Input() context?: FormControl;
  @Input() formControlRef?: FormControl;
  @Input() default?: any;
  @Input() contextData: any;

  options$?: Observable<FieldConfigOption<any>[]>;


  constructor(
    private changeDetectionRef: ChangeDetectorRef
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isOptionsClosure(changes['options'].currentValue)) {
      this.options$ = changes['options'].currentValue(changes['context'].currentValue).pipe(
        catchError((e) => {
          console.error(e);
          return EMPTY;
        }),
        tap(() => {
          this.changeDetectionRef.detectChanges();
        })
      );
    }

  }

  ngOnInit() {
  }



  isOptionsArray(options: any) {
    return Array.isArray(options);

  }

  isOptionsClosure(options: any) {
    return typeof options === 'function';
  }

  isOptionsMap(input: any) {
    return !Array.isArray(input) && typeof input === 'object';
  }

  checkDisableCondition() {
    return this.context ? this.context.invalid : true;
  }

}
