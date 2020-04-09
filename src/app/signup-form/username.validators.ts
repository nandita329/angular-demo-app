import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsenameValidators {
    static cannotContainSpace(control : AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0){
            return {cannotContainSpace:true};
        }else{
            return null;
        }
    }

    static checkUsername(control: AbstractControl): Promise<ValidationErrors|null> {
      return new Promise((resolve) => {
        if (control.value !== '1234') {
          resolve ({ checkUsername: true });
        } else {
          resolve({ checkUsername: false });
        }
      });
    }
}