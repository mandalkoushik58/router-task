import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/component/dashboard/dashboard.component";
import { ProuctsComponent } from "./shared/component/proucts/proucts.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { UserComponent } from "./shared/component/user/user.component";
import { ProductComponent } from "./shared/component/product/product.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";
import { EditProductComponent } from "./shared/component/proucts/edit-product/edit-product.component";
import { EditUserComponent } from "./shared/component/users/edit-user/edit-user.component";
import { AuthGuard } from "./shared/component/users/auth.guard";
import { LoginComponent } from "./shared/component/login/login.component";


const route :Routes =[
  {path:'',component:LoginComponent},
  {path:'home',component:DashboardComponent},
  {path:'users',component:UsersComponent,
  canActivate:[AuthGuard],
  children:[
    {path:':userId',component:UserComponent},
    {path:':userId/edit',component:EditUserComponent}
  ]


},
//{path:'users/:userId',component:UserComponent},
  //{path:'users/:userId/edit',component:EditUserComponent},
  {path:'products',component:ProuctsComponent,

      canActivateChild:[AuthGuard],
       children:[
        {path:':productId',component:ProductComponent},
        {path: ':productId/edit',component:EditProductComponent}
       ]
},



 // {path:'products/:productId',component:ProductComponent},
 // {path:'products/:productId/edit',component:EditProductComponent},
  {path:'page-not-found',component:PageNotFoundComponent},
  {path:'**', redirectTo:'page-not-found'}
]



@NgModule({
   imports:[
    RouterModule.forRoot(route)
   ],
   exports:[RouterModule]
})
export class AppRoutingMdule{

}
