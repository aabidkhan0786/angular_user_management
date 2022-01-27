import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList !: users [];
  constructor() {
    this.userList = [];
   }

  ngOnInit(): void {
    const records = localStorage.getItem("users")
    if(records !== null){
      this.userList = JSON.parse(records);
    }
  }

  isUsers(){
    return localStorage.getItem("users")
  }

  isAdmin(){
    const rec = localStorage.getItem("loggedIn")
    if(rec != null){
      const records = JSON.parse(rec)
      return records.admin
  }
}

  deleteUsers(id:any){
    const oldRecords = localStorage.getItem("users")
    if(oldRecords !==null){
      const newRecords = JSON.parse(oldRecords)
      newRecords.splice(newRecords.findIndex((rec:any)=> rec.id === id),1)
      localStorage.setItem("users", JSON.stringify(newRecords))
    }
    const records = localStorage.getItem("users")
    if(records !== null){
      this.userList = JSON.parse(records);
    }
  }
  }


