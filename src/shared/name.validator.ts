import { AbstractControl, ValidatorFn } from "@angular/forms";

/*
export function nameChecker(control: AbstractControl): { [key: string]: any } | null {
    const check = /^admin$/.test(control.value);
    return check ? { 'nameCheck': { value: control.value } } : null;
}
*/

export function nameChecker(reg: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const check = reg.test(control.value);
        return check ? { 'nameCheck': { value: control.value } } : null;
    }
}