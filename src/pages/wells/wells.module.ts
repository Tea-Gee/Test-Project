import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WellsPage } from './wells';

@NgModule({
  declarations: [
    WellsPage,
  ],
  imports: [
    IonicPageModule.forChild(WellsPage),
  ],
})
export class WellsPageModule {}
