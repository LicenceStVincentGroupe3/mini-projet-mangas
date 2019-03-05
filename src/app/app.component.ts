import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { UserService } from './user-service.service';
import { GoogleApiService } from 'ng-gapi';
import {ActivatedRoute} from '@angular/router';
import {TodoListApiService} from './todo-list-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public sheetId: string;
  public sheet: any;
  public foundSheet: any;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private authService: GoogleAuthService,
              private gapiService: GoogleApiService) {
     // First make sure gapi is loaded can be in AppInitilizer
     this.gapiService.onLoad().subscribe();
  }

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => 
    {
      console.log(fragment);
    })
  }

  public isLoggedIn(): boolean {
    return this.userService.isUserSignedIn();
  }

  public signIn() {
    this.userService.signIn();
  }



  title = 'ManA';
  user = {
    firstName: 'Dylan',
    lastName: 'Noally'
  };
  onDisconnect(disconnected: boolean) {
    console.log(disconnected);
  }

  onSendArticle(articleAdded: any) {
    console.log(articleAdded);
  }
}

