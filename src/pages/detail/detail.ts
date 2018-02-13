import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeritaProvider } from '../../providers/berita/berita';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public beritaProvider: BeritaProvider ) {
    var id=navParams.get("id")
    this.dataBerita=beritaProvider.detailBerita(id)

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
