import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from '../../model/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId!: number;
  userObj !:Iuser;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UsersService) { }

  ngOnInit(): void {
    console.log(this._route.snapshot)
   // this.userId= +this._route.snapshot.params['userId']
   this._route.params
      .subscribe((params:Params)=>{
        console.log(params)
        this.userId= +params['userId']
        this.userObj=this._userService.getUser(this.userId)!;
      })

  }
  goToeditUser(){
    this._router.navigate(['users',this.userId,'edit'],{
      queryParamsHandling:"preserve"
    })
  }
}
