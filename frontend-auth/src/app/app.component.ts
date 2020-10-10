import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ApiPostService } from './api-post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
 signupUser: any;
  loggedIn: boolean;
  constructor(private authService: AuthService,private apiService: ApiPostService) { }
  

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
    this.apiService.createUsers(this.signupUser).subscribe((res)=>{

    });
    }

}

