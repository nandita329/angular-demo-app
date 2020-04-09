import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  static checkPassword(control: AbstractControl): Promise<ValidationErrors|null> {
    return new Promise((resolve) => {
      if (control.value !== '1234') {
        resolve ({ checkPassword: true });
      } else {
        resolve(null);
      }
    });
  }

  // static checkPassword(control: AbstractControl): Promise<ValidationErrors|null> {
  //   return new Promise((resolve) => {
  //     if (control.value === '1234') {
  //       resolve ({ checkPassword: true });
  //     } else {
  //       resolve(null);
  //     }
  //   });
  // }

  static passwordsShouldMatch(control: FormGroup): ValidationErrors | null {
    const newPassword = control.get('new');
    const confirmPassword = control.get('confirm');

    if (newPassword.value !== confirmPassword.value) {
      return { passwordsShouldMatch: true };
    }

    return null;
  }
}