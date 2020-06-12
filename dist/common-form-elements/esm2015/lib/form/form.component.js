/**
 * @fileoverview added by tsickle
 * Generated from: lib/form/form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class FormComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formInput = {
            label: 'Board',
            placeholder: '',
            values: ['andhra pradesh', 'Tamil Nadu', 'Icse', 'cbse'],
            dataSrc: '',
            apiPath: '',
            parentId: ''
        };
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-form',
                template: "<sb-dropdowns [label]=\"formInput.label\" [values]=\"formInput.values\"></sb-dropdowns>",
                styles: [""]
            }] }
];
/** @nocollapse */
FormComponent.ctorParameters = () => [];
FormComponent.propDecorators = {
    formInput: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FormComponent.prototype.formInput;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24tZm9ybS1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2Zvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLGFBQWE7SUFFeEIsZ0JBQWdCLENBQUM7Ozs7SUFFakIsUUFBUTtRQUVOLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixLQUFLLEVBQUUsT0FBTztZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7WUFDeEQsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztJQUNKLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLG1HQUFvQzs7YUFFckM7Ozs7O3dCQUVFLEtBQUs7Ozs7SUFBTixrQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ItZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZvcm1JbnB1dDogYW55O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5mb3JtSW5wdXQgPSB7XG4gICAgICBsYWJlbDogJ0JvYXJkJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgIHZhbHVlczogWydhbmRocmEgcHJhZGVzaCcsICdUYW1pbCBOYWR1JywgJ0ljc2UnLCAnY2JzZSddLFxuICAgICAgZGF0YVNyYzogJycsXG4gICAgICBhcGlQYXRoOiAnJyxcbiAgICAgIHBhcmVudElkOiAnJ1xuICAgIH07XG4gIH1cblxufVxuIl19