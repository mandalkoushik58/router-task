import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   alreadyHaveAccount : boolean=false;
  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
  }
  login(){
     this._authService.loginToApp()
  }
}
