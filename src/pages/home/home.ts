import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Groups } from '../groups/groups';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  getSongLesson: any;
  songLesson: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
//    this.getSongLesson = navParams.get('song');

    if( !this.getSongLesson ){
      this.songLesson = "Please select an item";
    } else {
      this.songLesson = this.getSongLesson;
    }

  }

  selectGroup(){
    let song = this;
    let callbackFunction = function(_params) {
      return new Promise((resolve, reject) => {
//       console.log('---selectedSongFromSong---');
//       console.log(_params);
//       console.log('---selectedSongFromSong---');
        song.songLesson = _params;
        resolve();
      })
    }

    let params = {
      callback: callbackFunction
    }
    this.navCtrl.push(Groups, {});
  }
}
