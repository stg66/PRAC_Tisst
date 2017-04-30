import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Songs } from './songs';

@NgModule({
  declarations: [
    Songs,
  ],
  imports: [
    IonicPageModule.forChild(Songs),
  ],
  exports: [
    Songs
  ]
})
export class SongsModule {}
