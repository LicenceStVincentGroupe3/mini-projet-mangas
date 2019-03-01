import { Component } from '@angular/core';
import {TodoListApiService} from './todo-list-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

