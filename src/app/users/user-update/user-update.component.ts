import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from 'src/app/interfaces/users';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {


  users !: users;
  constructor(private route: ActivatedRoute, private router: Router){ 
    this.users = new users();
    this.route.params.subscribe((res)=>{
      this.users.id = res['id']
    })
  }

  ngOnInit(): void {
    // debugger;
    const oldRecords = localStorage.getItem("users")
    console.log(oldRecords);
    
    if( oldRecords !== null){
      const userLists = JSON.parse(oldRecords)
      console.log(userLists);
      const currUser = userLists.find((user:any)=> user.id == this.users.id)
      console.log(currUser);
      if( currUser !== undefined){     
        this.users.name = currUser.name;
        this.users.phone = currUser.phone;
        this.users.email = currUser.email;
        this.users.address = currUser.address;
      }
    }
  }

  updateUsers(){
    const oldRecords = localStorage.getItem("users")
    if(oldRecords !==null){
      const newRecords = JSON.parse(oldRecords)
      // console.log(newRecords.splice(newRecords.findIndex((rec:any)=> rec.id === this.users.id),1));  
      newRecords.splice(newRecords.findIndex((rec:any)=> rec.id === this.users.id),1)
      newRecords.push(this.users)
      localStorage.setItem("users", JSON.stringify(newRecords))
    }
    this.router.navigateByUrl("")
  }

}
