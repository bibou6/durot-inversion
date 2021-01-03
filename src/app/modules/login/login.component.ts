import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Login } from 'src/app/core/models/login.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm;

  login:Login;

  constructor(
    private authService:AuthService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    
    this.login = Login.loginInit();
    this.loginForm = this.formBuilder.group(this.login);
  }

  onSubmit(data){
    console.log(data);
    if(data.username != null && data.password != null){
      console.log('calling authService');
      this.authService.login(data.username,data.password);
    }
  }

}
