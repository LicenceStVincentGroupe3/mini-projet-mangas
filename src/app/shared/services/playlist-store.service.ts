import { Injectable } from '@angular/core';

@Injectable()
export class PlaylistStoreService {

  private mana = 'ManA';
  private playlists_template: Object = {
    'playlists': []
  };

  constructor() { }

  private init(): void {
    localStorage.setItem(this.mana, JSON.stringify(this.playlists_template));
  }

  public retrieveStorage() {
    let storedPlaylist = this.parse();

    if (!storedPlaylist) {
      this.init();
      storedPlaylist = this.parse();
    }

    return storedPlaylist;
  }

  public addToPlaylist(video: Object): void {
    let store = this.parse();
    store.playlists.push(video);
    localStorage.setItem(this.mana, JSON.stringify(store));
  }

  public removeFromPlaylist(video: any): void {
    let store = this.parse();
    store.playlists = store.playlists.filter(item => item.id !== video.id);
    localStorage.setItem(this.mana, JSON.stringify(store));
  }

  private parse() {
    return JSON.parse(localStorage.getItem(this.mana));
  }
}
