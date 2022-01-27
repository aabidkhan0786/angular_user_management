import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  users !: users;
  constructor(private router: Router) { 
    this.users = new users();
  }
  ngOnInit(): void {
  }

  
  //generating unique id
  getNewId(){
    const oldRecords = localStorage.getItem("users")
    if(oldRecords !==null){
      const newRecords = JSON.parse(oldRecords)
      return newRecords.length +1
    }else{
      return 1
    }
  }


  registerUsers(){
    const id = this.getNewId()
    this.users.id = id
    const oldRecords = localStorage.getItem("users")
    if(oldRecords !==null){
      const newRecords = JSON.parse(oldRecords)
      newRecords.push(this.users)
      localStorage.setItem("users", JSON.stringify(newRecords))
      alert("User Created please login!!")
      this.router.navigateByUrl("/login")
    }else{
      const userArr =[];
      userArr.push(this.users)
      localStorage.setItem("users", JSON.stringify(userArr))
      alert("User Created please login!!")
      this.router.navigateByUrl("/login")
    }
  }


}
