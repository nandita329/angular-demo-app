import { Component } from '@angular/core';
import { favoratieOnchangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  viewMode = 'map';
  post = {
    title :'Angular app',
    isFavorite : true
  }
  viewModeOnchange(name){
    this.viewMode = name;
  }
  onFavoriteChanged(isFavoriteArgs : favoratieOnchangeEventArgs){
    console.log(`Favorite changed : ${isFavoriteArgs.newValue}`)
  }
}
