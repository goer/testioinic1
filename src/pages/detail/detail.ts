import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeritaProvider } from '../../providers/berita/berita';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  private dataBerita = {
    title: '',
    photo: '',
    description: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public beritaProvider: BeritaProvider) {
    this.dataBerita = navParams.get("berita")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
