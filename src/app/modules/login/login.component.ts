import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  returnUrl: string;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private authService:AuthService,
    private route: ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    
    this.login = Login.loginInit();
    this.loginForm = this.formBuilder.group(this.login);
    console.log(this.route.snapshot.queryParams['returnUrl']);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  onSubmit(data){
    if(data.username != null && data.password != null){
      this.authService.login(data.username,data.password).subscribe(
        response => {
          localStorage.setItem('jwt', JSON.stringify(response["access_token"]));
          this.router.navigateByUrl(this.returnUrl);
        }
      );
    }
  }

}
