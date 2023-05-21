import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
     userId!:number;
     userObj!:Iuser;
     userRole!: string;
  constructor(private _usersService:UsersService,
    private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params
    .subscribe((userParam:Params)=>{
        this.userId=+userParam['userId']
        this.userObj=this._usersService.getUser(this.userId)!
    })
    this._route.queryParams.subscribe((params:Params)=>{
          console.log(params)
          this.userRole=params['userRole']
    })
  }
   onUpdateUser(userName:HTMLInputElement){
       let obj:Iuser={
         userName:userName.value,
         id:this.userId,
         userRole:this.userObj.userRole
       }
       this._usersService.onUpdateUser(obj)
       this._router.navigate(['/users',this.userId])
   }
}
