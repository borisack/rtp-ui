import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {SecurityServices} from '../../communication/security.services';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[SecurityServices]
})
export class LoginPage {
  isMobile ;
  email: string;
  password: string;
  errorMessage: string ;

  constructor(public navCtrl: NavController, public plt: Platform, public securityServices: SecurityServices) {
      this.isMobile = plt.is('mobile');
      console.info("isMobile = " + this.isMobile);
  }

  login(){
    this.securityServices.doLogin(this.email, this.password).subscribe(
      result => {
        console.info("res :" + result.responseCode.code);
        switch(result.responseCode.code){
          case 0 :{
            this.navCtrl.setRoot(HomePage);
            return;
          }
          default :{
            this.errorMessage = result.responseCode.text;
          }
        }
      }
    );
    
  }
}
