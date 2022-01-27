import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isAdmin(){
    const rec = localStorage.getItem("loggedIn")
    if(rec != null){
      const records = JSON.parse(rec)
      return records.admin
  }
}
  
  loggedIn(){  
    return localStorage.getItem("loggedIn")
  }

  logOut(){
    this.router.navigateByUrl("login")
    localStorage.removeItem("loggedIn")
  }

}
