import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProuctsComponent } from './shared/component/proucts/proucts.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { AppRoutingMdule } from './app-routing.module';
import { UserComponent } from './shared/component/user/user.component';
import { ProductComponent } from './shared/component/product/product.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { EditProductComponent } from './shared/component/proucts/edit-product/edit-product.component';
import { EditUserComponent } from './shared/component/users/edit-user/edit-user.component';
import { LoginComponent } from './shared/component/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    ProuctsComponent,
    NavbarComponent,
    UserComponent,
    ProductComponent,
    PageNotFoundComponent,
    EditProductComponent,
    EditUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingMdule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
