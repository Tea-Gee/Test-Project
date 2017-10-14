import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LovecraftPage} from "../../pages/lovecraft/lovecraft";
import {BearPage} from "../../pages/bear/bear";
import {WellsPage} from "../../pages/wells/wells";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  Lovecraft(){
    this.pushLovecraft();
  };
  Bear(){
    this.pushBear();
  };
  Wells(){
    this.pushWells();
  };

  pushLovecraft(){
    this.navCtrl.push(LovecraftPage);
  }
  pushBear(){
    this.navCtrl.push(BearPage);
  }
  pushWells(){
    this.navCtrl.push(WellsPage);
  }
  popView(){
    this.navCtrl.pop();
  }
}
