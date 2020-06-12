/**
 * @fileoverview added by tsickle
 * Generated from: lib/dropdowns/dropdowns.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var DropdownsComponent = /** @class */ (function () {
    function DropdownsComponent() {
    }
    /**
     * @return {?}
     */
    DropdownsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.values);
    };
    DropdownsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-dropdowns',
                    template: "<form>\n  <label class=\"sb-label\">{{label}}</label>\n  <select class=\"sb-dropdown\">\n    <option vlaue=\"\">AP</option>\n    <option vlaue=\"\">TN</option>\n    <option vlaue=\"\">Icse</option>\n    <option vlaue=\"\">Cbse</option>\n  </select>\n</form>\n\n<div *ngFor=\"let v of values\">\n  {{v}}\n</div>",
                    styles: [".sb-dropdown{background-color:#fff;outline:0;width:100%;margin-top:10px;padding:9px}.sb-label{padding-left:15px;font-weight:700}option{font-size:16px;padding:10px}"]
                }] }
    ];
    /** @nocollapse */
    DropdownsComponent.ctorParameters = function () { return []; };
    DropdownsComponent.propDecorators = {
        label: [{ type: Input }],
        placeholder: [{ type: Input }],
        values: [{ type: Input }],
        dataSrc: [{ type: Input }],
        apiPath: [{ type: Input }],
        parentId: [{ type: Input }]
    };
    return DropdownsComponent;
}());
export { DropdownsComponent };
if (false) {
    /** @type {?} */
    DropdownsComponent.prototype.label;
    /** @type {?} */
    DropdownsComponent.prototype.placeholder;
    /** @type {?} */
    DropdownsComponent.prototype.values;
    /** @type {?} */
    DropdownsComponent.prototype.dataSrc;
    /** @type {?} */
    DropdownsComponent.prototype.apiPath;
    /** @type {?} */
    DropdownsComponent.prototype.parentId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi1mb3JtLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsibGliL2Ryb3Bkb3ducy9kcm9wZG93bnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFhRTtJQUFnQixDQUFDOzs7O0lBRWpCLHFDQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGtVQUF5Qzs7aUJBRTFDOzs7Ozt3QkFFRSxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7SUFRUix5QkFBQztDQUFBLEFBbkJELElBbUJDO1NBZFksa0JBQWtCOzs7SUFDN0IsbUNBQW9COztJQUNwQix5Q0FBMEI7O0lBQzFCLG9DQUFxQjs7SUFDckIscUNBQXNCOztJQUN0QixxQ0FBc0I7O0lBQ3RCLHNDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYi1kcm9wZG93bnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd25zLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYWJlbDogYW55O1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogYW55O1xuICBASW5wdXQoKSB2YWx1ZXM6IGFueTtcbiAgQElucHV0KCkgZGF0YVNyYzogYW55O1xuICBASW5wdXQoKSBhcGlQYXRoOiBhbnk7XG4gIEBJbnB1dCgpIHBhcmVudElkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlcyk7XG4gIH1cblxufVxuIl19