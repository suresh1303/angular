import { AbstractControl } from "@angular/forms";

export function emailChecker(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.get('email');
    const confEmail = control.get('confEmail');
    if(email?.pristine || confEmail?.pristine)
    return null;
    return email && confEmail && email.value !== confEmail.value ? { 'mismatch': true } : null;
}