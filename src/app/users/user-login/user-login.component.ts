import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  users !: users;
  constructor(private router: Router) { 
    this.users = new users();
  }
  ngOnInit(): void {
  }

  onLogin(){
    const oldRecords = localStorage.getItem("users")
    if(oldRecords != null){
      const records = JSON.parse(oldRecords)
      console.log(records);
      const currUser = records.find((user:any)=> user.email == this.users.email && user.password == this.users.password)
      if( currUser !== undefined){
        localStorage.setItem("loggedIn", JSON.stringify(currUser))
        alert("Login Successful!!")
        this.router.navigateByUrl("")
      }else{
        alert("wrong credentials!!")
      }

    }
    
  }

}
