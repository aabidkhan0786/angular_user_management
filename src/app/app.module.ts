import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { NavbarComponent } from './users/navbar/navbar.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddComponent,
    UserUpdateComponent,
    UserLoginComponent,
    NavbarComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
