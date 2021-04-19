import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import { ServicescustomvalidationService } from './servicescustomvalidation.service';
interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register-candidate',
  templateUrl: './register-candidate.component.html',
  styleUrls: ['./register-candidate.component.scss']
})

export class RegisterCandidateComponent implements OnInit {
  title = 'Candidate Form';
  registerForm: FormGroup;
  submitted = false;
  gender: Gender[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];


  constructor(
    private fb: FormBuilder,
    private customValidator: ServicescustomvalidationService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
        salute: ['', Validators.required],
        fname: ['', Validators.required],
        mname: ['', Validators.required],
        lname: ['', Validators.required],
        gender: ['', Validators.required],
        mstatus: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
        adhar: ['', Validators.required],
        datep: ['', Validators.required],
        pan: ['', Validators.required],
        country: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
        confirmPassword: ['', [Validators.required]],
        check: ['', Validators.required]
      },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if(this.submitted == true)
    {console.log(this.registerForm);
    }
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!');
      console.table(this.registerForm.value);
    }
  }
}
