import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authservice:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this._authservice.loginToApp()
  }
  logOut(){
 this._authservice.logOutToApp()
  }
}
