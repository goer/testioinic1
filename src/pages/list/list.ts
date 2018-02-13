import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeritaProvider } from '../../providers/berita/berita';
import { DetailPage } from '../detail/detail';


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

  detail(id) {
    this.navCtrl.push(DetailPage, { id: id })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
