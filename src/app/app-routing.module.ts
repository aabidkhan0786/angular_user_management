import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
// import { UserRegisterComponent } from './users/user-register/user-register.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';

const routes: Routes = [
  // {
  //   path:"",
  //   redirectTo: "login",
  //   pathMatch: "full"
  // },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'useradd',
    component: UserAddComponent
  },
  {
    path: 'userupdate/:id',
    component: UserUpdateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
