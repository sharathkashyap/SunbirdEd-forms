import { CommonModule } from '@angular/common';
import { Injectable, Component, Input, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-form-elements.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonFormElementsService {
    constructor() { }
}
CommonFormElementsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CommonFormElementsService.ctorParameters = () => [];
/** @nocollapse */ CommonFormElementsService.ngInjectableDef = defineInjectable({ factory: function CommonFormElementsService_Factory() { return new CommonFormElementsService(); }, token: CommonFormElementsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-form-elements.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonFormElementsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CommonFormElementsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-common-form-elements',
                template: `
    <p>
      common-form-elements works!
    </p>
  `
            }] }
];
/** @nocollapse */
CommonFormElementsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dropdowns/dropdowns.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.values);
    }
}
DropdownsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-dropdowns',
                template: "<form>\n  <label class=\"sb-label\">{{label}}</label>\n  <select class=\"sb-dropdown\">\n    <option vlaue=\"\">AP</option>\n    <option vlaue=\"\">TN</option>\n    <option vlaue=\"\">Icse</option>\n    <option vlaue=\"\">Cbse</option>\n  </select>\n</form>\n\n<div *ngFor=\"let v of values\">\n  {{v}}\n</div>",
                styles: [".sb-dropdown{background-color:#fff;outline:0;width:100%;margin-top:10px;padding:9px}.sb-label{padding-left:15px;font-weight:700}option{font-size:16px;padding:10px}"]
            }] }
];
/** @nocollapse */
DropdownsComponent.ctorParameters = () => [];
DropdownsComponent.propDecorators = {
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    values: [{ type: Input }],
    dataSrc: [{ type: Input }],
    apiPath: [{ type: Input }],
    parentId: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/form/form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/textbox/textbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextboxComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TextboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-textbox',
                template: "<p>\n  textbox works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
TextboxComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/textarea/textarea.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextareaComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-textarea',
                template: "<p>\n  textarea works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
TextareaComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/checkbox/checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-checkbox',
                template: "<p>\n  checkbox works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-form-elements.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonFormElementsModule {
}
CommonFormElementsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CommonFormElementsComponent, DropdownsComponent, FormComponent, TextboxComponent, TextareaComponent, CheckboxComponent],
                imports: [CommonModule],
                exports: [CommonFormElementsComponent, DropdownsComponent, FormComponent]
            },] }
];

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