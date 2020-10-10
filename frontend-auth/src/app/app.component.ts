import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ApiPostService } from './api-post.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
});
  Checkval:boolean;
    title = 'frontend-auth';
  user: SocialUser; 
  /* 
  Class Social User {
  provider: string;
    id: string;
    email: string;
    name: string;
    photoUrl: string;
    firstName: string;
    lastName: string;
    authToken: string;
    idToken: string;
    authorizationCode: string;
    }
    data returned from the fb graph api
  */
 signupUser:Users;

 httpResponse: Response;
  loggedIn: boolean;
  constructor(private authService: AuthService,public http: HttpClient) { }
  

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      
      console.log(this.user);
    });
  }


  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
  // signOut will be same for both providers
  signOut(): void {
    this.authService.signOut();
  }

  AddUSer() {
    
    let data = {
      "email":this.profileForm.value.firstName,
      "password": this.profileForm.value.lastName
    }
   var request=JSON.stringify(data);
    fetch("https://reqres.in/api/register",{
      headers:{ "Content-Type":"application/json"},
      method: "POST",
      body: request,
    }).then(res=>res.json()).then(data => {
      console.log(data);
      if (data.token!="") {
        this.Checkval = true;
      }
    })

    this.Checkval = true;

    }

}

