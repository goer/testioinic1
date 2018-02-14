import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SavePage } from '../save/save';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.push(LoginPage)
  }
  input() {
    this.navCtrl.push(SavePage)
  }
}
