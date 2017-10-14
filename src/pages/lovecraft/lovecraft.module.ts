import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LovecraftPage } from './lovecraft';

@NgModule({
  declarations: [
    LovecraftPage,
  ],
  imports: [
    IonicPageModule.forChild(LovecraftPage),
  ],
})
export class LovecraftPageModule {}
