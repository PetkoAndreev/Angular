import { Directive, Inject, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { emailValidator } from "./util";

@Directive({
    selector: '[emailValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: EmaiValidatorDirective, multi: true }]
})

export class EmaiValidatorDirective implements Validator {

    constructor() {

    }

    validate(control: AbstractControl): ValidationErrors | null {
        return emailValidator(control);
    }
}