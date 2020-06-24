import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {EMPTY, Observable, Subject, Subscription} from 'rxjs';
import {FieldConfigOption} from '../common-form-config';
import {catchError, tap} from 'rxjs/operators';
import {ValueComparator} from '../utilities/value-comparator';

@Component({
  selector: 'sb-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, OnChanges, OnDestroy {
  ValueComparator = ValueComparator;

  @Input() options: any = [];
  @Input() label?: string;
  @Input() placeHolder?: string;
  @Input() isMultiple?: boolean;
  @Input() context?: FormControl;
  @Input() formControlRef?: FormControl;
  @Input() default?: any;
  @Input() contextData: any;
  @Input() dataLoadStatusDelegate: Subject<'LOADING' | 'LOADED'>;

  options$?: Observable<FieldConfigOption<any>[]>;
  contextValueChangesSubscription?: Subscription;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.options) {
      this.options = [];
    }

    if (this.isOptionsClosure(this.options)) {
      this.dataLoadStatusDelegate.next('LOADING');

      this.options$ = changes['options'].currentValue(changes['context'].currentValue).pipe(
        catchError((e) => {
          console.error(e);
          this.dataLoadStatusDelegate.next('LOADED');
          return EMPTY;
        }),
        tap(() => {
          this.dataLoadStatusDelegate.next('LOADED');
        })
      );
    }
  }

  ngOnInit() {
    if (this.context) {
      this.contextValueChangesSubscription = this.context.valueChanges.pipe(
        tap(() => {
          this.formControlRef.patchValue(null);
        })
      ).subscribe();
    }
  }

  ngOnDestroy(): void {
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
