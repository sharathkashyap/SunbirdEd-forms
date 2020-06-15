import { FieldConfigInputType, FieldConfigValidationType } from './form-config-interface';
import { of } from 'rxjs';
import { FormControl } from '@angular/forms';

export const FieldConfig = [
    {
        code: 'declared-school-name',
        type: FieldConfigInputType.INPUT,
        templateOptions: {
            label: 'Sample Input',
            placeHolder: 'ENTER_SCHOOL_NAME'
        }
    },
    {
        code: 'declared-school-name',
        type: FieldConfigInputType.INPUT,
        default: 'hello Defalut value',
        templateOptions: {
            label: 'Sample Input',
            placeHolder: 'ENTER_SCHOOL_NAME'
        }
    },
    {
        code: 'state',
        type: FieldConfigInputType.SELECT,
        templateOptions: {
            label: 'Sample Select box',
            placeHolder: 'STATE_OPTION_TEXT',
            multiple: false,
            options: [{ label: 'abc', value: 'abc' }]
        },
        validations: [
            {
                type: FieldConfigValidationType.REQUIRED,
                value: true,
                message: ''
            }
        ]
    },
    {
        code: 'select-async',
        type: FieldConfigInputType.SELECT,
        templateOptions: {
            label: 'Sample Async Select box',
            placeHolder: 'STATE_OPTION_TEXT',
            multiple: false,
            options: () => of([{ label: 'xyz', value: 'xyz' }])
        }
    },
    {
        code: 'updatePreference',
        type: FieldConfigInputType.LABEL,
        templateOptions: {
            label: 'PREFERENCES_CAN_BE_UPDATED'
        }
    },
    {
        code: 'tnc',
        type: FieldConfigInputType.CHECKBOX,
        templateOptions: {
            labelHtml: {
                contents: '<span>$0 <u><a href="$url">$appName$1<\/a><\/u><\/span>',
                values: {
                    '$0': 'I_UNDERSTAND_AND_ACCEPT',
                    '$1': 'TERMS_OF_USE'
                }
            }
        },
        validations: [
            {
                type: FieldConfigValidationType.REQUIRED,
                value: true,
                message: ''
            }
        ]
    },
    {
        code: 'board',
        type: FieldConfigInputType.SELECT,
        templateOptions: {
            label: 'Sample Async Board',
            placeHolder: 'Board',
            multiple: false,
            options: () => of([{ label: 'Karnataka', value: 'kar' }, { label: 'Andra Pradesh', value: 'ap' }])
        }
    },
    {
        code: 'medium',
        type: FieldConfigInputType.SELECT,
        context: 'board',
        templateOptions: {
            label: 'Sample Async Medium',
            placeHolder: 'Medium',
            multiple: false,
            options: (context?: FormControl) => {
                if (!context) {
                    return of([]);
                }
                if (context.value && Array.isArray(context.value)) {
                    const result = context.value.reduce((acc, val) => {
                        if (val.value === 'kar') {
                            acc.concat([{ label: 'kannada', value: 'kan' }]);
                        } else if (val.value === 'ap') {
                            acc.concat([{ label: 'telugu', value: 'tel' }]);
                        }
                        return acc;
                    }, []);
                    return of(result);
                }
                if (context.value === 'kar') {
                    return of([{ label: 'kannada', value: 'kan' }]);
                } else if (context.value === 'ap') {
                    return of([{ label: 'telugu', value: 'tel' }]);
                }
                return of([]);
            }
        }
    },
    {
        code: 'sometext',
        type: FieldConfigInputType.LABEL,
        templateOptions: {
            label: 'Sample lazy dynamic forms'
        }
    },
    ////////////////////////////////////////////////////////////////////////////////////////////
    {
        code: 'category',
        type: 'select' as FieldConfigInputType,
        // default: 'loginRegistraction', // new property
        templateOptions: {
            placeHolder: 'Select Category',
            multiple: false,
            options: [
                {
                    value: 'content',
                    label: 'Content'
                },
                {
                    value: 'loginRegistraction',
                    label: 'Login/Registration'
                },
                {
                    value: 'teacherTraining',
                    label: 'Teacher Training'
                },
                {
                    value: 'other',
                    label: 'Other'
                }
            ]
        },
    },
    {
        code: 'subcategory',
        type: FieldConfigInputType.NESTED_SELECT,
        // default: "contentquality", // new property
        children: {
            contentquality: [
                {
                    code: 'board1',
                    type: FieldConfigInputType.SELECT,
                    templateOptions: {
                        placeHolder: 'Select Baord',
                        multiple: false,
                        options: () => of([{ label: 'Karnataka1111', value: 'kar' }, { label: 'Andra Pradesh11111', value: 'ap' }])
                    },
                },
                {
                    code: 'medium1',
                    type: FieldConfigInputType.SELECT,
                    // dependsOn: "board", // new property
                    templateOptions: {
                        placeHolder: 'Select Medium',
                        multiple: true,
                        // "dataSrc": { // from formapi, to be removed client side
                        //     marker: 'FRAMEWORK_CATEGORY_TERMS',
                        //     params: { categoryCode: 'medium' },
                        // },
                        options: () => of([{ label: 'Karnataka22222', value: 'kar' }, { label: 'Andra Pradesh2222222', value: 'ap' }])
                    },
                }
            ]
        },
        templateOptions: {
            placeHolder: 'Select Subcategory',
            multiple: false,
            options: [
                {
                    value: 'otp',
                    label: 'OTP Issue',
                    // association: { // new property
                    //     field: 'category',
                    //     value: 'loginRegistraction'
                    // }
                },
                {
                    value: 'contentquality',
                    label: 'Content Quality',
                    // association: { // new property
                    //     field: 'category',
                    //     value: 'content'
                    // }
                },
                {
                    value: 'contentnotplaying',
                    label: 'Content not playing/downloading',
                    // association: { // new property
                    //     field: 'category',
                    //     value: 'content'
                    // }
                }
            ]
        },
    }
];
