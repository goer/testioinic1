import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeritaProvider } from '../../providers/berita/berita';

/**
 * Generated class for the SavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-save',
  templateUrl: 'save.html',
})
export class SavePage {
  private dataBerita = {
    title: '',
    photo: '',
    description: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public beritaProvider: BeritaProvider) {
  }

  input() {
    this.beritaProvider.saveBerita(this.dataBerita)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavePage');
  }

}
