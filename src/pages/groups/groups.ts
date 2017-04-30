import { StoredData } from './../../providers/stored-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Songs } from '../songs/songs';

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class Groups {

  callback: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public StoredDataService: StoredData) {
    this.callback = this.navParams.get("callback");
  }

  groupSelected(group, i) {
//    console.log(this.callback);
    this.navCtrl.push(Songs, {
      group: group,
      index: i,
      callbackHome: this.callback
    });
  }

  ionViewDidLoad() {
    this.StoredDataService.loadData();
  }

}
