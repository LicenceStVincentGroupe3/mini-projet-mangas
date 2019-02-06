import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ManA';

  // Envoi de la donnée au composant enfant
  uti = {
    prenom: 'Gradi',
    ndf: 'Mandambu'
  };

  // Récupération de la donnée du composant enfant
  seDeco(deconnecté: boolean){
    console.log(deconnecté);
  }
}
