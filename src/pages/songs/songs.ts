import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html',
})
export class Songs {

  groupSelected: any = [];
  index: any;
  callbackHome: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.groupSelected = navParams.get('group');
    this.index = navParams.get('index');
    this.callbackHome = navParams.get('callbackHome');
  }

  ionViewDidLoad() {}

  songSelected(song) {
    console.log('song: ' + song);
    console.log(this.callbackHome(song));
    
//    this.callbackHome(song).then(()=>{
//      this.navCtrl.popToRoot();
//    });
  }

}
