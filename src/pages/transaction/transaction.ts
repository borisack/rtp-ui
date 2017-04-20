import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {SecurityServices} from '../../communication/security.services';

@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
  providers:[SecurityServices]
})
export class TransactionPage {
  isMobile ;

  constructor(public navCtrl: NavController, public plt: Platform, public securityServices: SecurityServices) {
      this.isMobile = plt.is('mobile');
      console.info("isMobile = " + this.isMobile);
  }

  submit(){
    
  }
}
