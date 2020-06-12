import { CommonModule } from '@angular/common';
import { Injectable, Component, Input, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-form-elements.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonFormElementsService = /** @class */ (function () {
    function CommonFormElementsService() {
    }
    CommonFormElementsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CommonFormElementsService.ctorParameters = function () { return []; };
    /** @nocollapse */ CommonFormElementsService.ngInjectableDef = defineInjectable({ factory: function CommonFormElementsService_Factory() { return new CommonFormElementsService(); }, token: CommonFormElementsService, providedIn: "root" });
    return CommonFormElementsService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-form-elements.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonFormElementsComponent = /** @class */ (function () {
    function CommonFormElementsComponent() {
    }
    /**
     * @return {?}
     */
    CommonFormElementsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CommonFormElementsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-common-form-elements',
                    template: "\n    <p>\n      common-form-elements works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    CommonFormElementsComponent.ctorParameters = function () { return []; };
    return CommonFormElementsComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dropdowns/dropdowns.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/form/form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.formInput = {
            label: 'Board',
            placeholder: '',
            values: ['andhra pradesh', 'Tamil Nadu', 'Icse', 'cbse'],
            dataSrc: '',
            apiPath: '',
            parentId: ''
        };
    };
    FormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-form',
                    template: "<sb-dropdowns [label]=\"formInput.label\" [values]=\"formInput.values\"></sb-dropdowns>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FormComponent.ctorParameters = function () { return []; };
    FormComponent.propDecorators = {
        formInput: [{ type: Input }]
    };
    return FormComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/textbox/textbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextboxComponent = /** @class */ (function () {
    function TextboxComponent() {
    }
    /**
     * @return {?}
     */
    TextboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TextboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-textbox',
                    template: "<p>\n  textbox works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TextboxComponent.ctorParameters = function () { return []; };
    return TextboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/textarea/textarea.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextareaComponent = /** @class */ (function () {
    function TextareaComponent() {
    }
    /**
     * @return {?}
     */
    TextareaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TextareaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-textarea',
                    template: "<p>\n  textarea works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TextareaComponent.ctorParameters = function () { return []; };
    return TextareaComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/checkbox/checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-checkbox',
                    template: "<p>\n  checkbox works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    return CheckboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-form-elements.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonFormElementsModule = /** @class */ (function () {
    function CommonFormElementsModule() {
    }
    CommonFormElementsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CommonFormElementsComponent, DropdownsComponent, FormComponent, TextboxComponent, TextareaComponent, CheckboxComponent],
                    imports: [CommonModule],
                    exports: [CommonFormElementsComponent, DropdownsComponent, FormComponent]
                },] }
    ];
    return CommonFormElementsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: common-form-elements.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CommonFormElementsModule, CommonFormElementsService, CommonFormElementsComponent, CheckboxComponent as ɵe, DropdownsComponent as ɵa, FormComponent as ɵb, TextareaComponent as ɵd, TextboxComponent as ɵc };

//# sourceMappingURL=common-form-elements.js.map