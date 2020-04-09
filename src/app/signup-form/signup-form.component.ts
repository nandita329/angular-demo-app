import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators, FormArray } from '@angular/forms';
import { UsenameValidators } from './username.validators';
import { PasswordValidator } from 'app/change-password/passward.validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  {

  form = new FormGroup({
    account: new FormGroup({
      username : new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsenameValidators.cannotContainSpace,
        // PasswordValidator.checkPassword
        UsenameValidators.checkUsername
      ]),
      password : new FormControl('',Validators.required)
    }),
    skills : new FormArray([])
  });

  addSkills(skill : HTMLInputElement){
    this.skills.push(new FormControl(skill.value))
    skill.value = '';
  }

  removeSkill(skill :FormControl){
    let index = this.skills.controls.indexOf(skill);
    this.skills.removeAt(index);
  }

  get skills (){
    return this.form.get('skills') as FormArray;
  }

  
  get username(){
    return this.form.get('account.username');
  }

  get password(){
    return this.form.get('account.password');
  }

  
  login(){
    this.form.setErrors({
      invalid :true
    })
  }

  submit(form){
    console.log(form)
  }


}
