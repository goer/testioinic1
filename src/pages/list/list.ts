import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeritaProvider } from '../../providers/berita/berita';
import { DetailPage } from '../detail/detail';
import { SavePage } from '../save/save';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public beritaProvider: BeritaProvider) {
  }
  
  input(){
    this.navCtrl.push(SavePage);
  }

  detail(b) {
    this.navCtrl.push(DetailPage, { berita: b })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
