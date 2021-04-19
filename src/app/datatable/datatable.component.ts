import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {ServicescustomvalidationService} from './servicescustomvalidation.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit{
  showModal: boolean;
  registerForm: FormGroup;
  submitted: boolean;
  public fieldArray: Array<any> = [];
  public newAttribute: any = {};
  ConfirmModal: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private customValidator: ServicescustomvalidationService
  ) {
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(2)]],
      firstname: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      age: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      action: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else{
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
    }
    if(this.submitted)
    {
      this.showModal = false;
    }
  }

  deleteFieldValue(index){
    this.fieldArray.splice(index, 1);
  }

  show() {
    this.showModal = true;
  }


  hide()
  {
    this.showModal = false;
    this.registerForm.reset();
  }


}
