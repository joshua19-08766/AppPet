import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import { Router} from '@angular/router';
import { LoginPageForm } from './login.page.form.spec';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
form:FormGroup;
  constructor( private router: Router, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.form =new LoginPageForm(this.formBuilder).createForm();
  }
signup(){
this.router.navigate(['signup']);

}
main(){
  this.router.navigate(['main']);
  
  }
}