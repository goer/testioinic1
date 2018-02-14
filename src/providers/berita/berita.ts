//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable'; //
import 'rxjs/add/operator/map';

/*
  Generated class for the BeritaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeritaProvider {

  public berita = [
    {
      id: 0,
      title: "Title satu",
      photo: "https://cdn.pixabay.com/photo/2014/03/14/20/07/painting-287403__180.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
    {
      id: 1,
      title: "Title dua",
      photo: "https://cdn.pixabay.com/photo/2018/01/28/17/48/gallery-3114279_960_720.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
    {
      id: 2,
      title: "Title tiga",
      photo: "https://cdn.pixabay.com/photo/2015/04/03/20/52/milan-705880__180.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
    {
      id: 3,
      title: "Title empat",
      photo: "https://cdn.pixabay.com/photo/2017/10/29/07/35/poster-2899083__180.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
    {
      id: 4,
      title: "Title lima",
      photo: "https://cdn.pixabay.com/photo/2017/10/29/07/36/poster-2899089__180.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
  ]

  listBerita(): Observable<any[]> {
    return new Observable((observer) => {
      observer.next(this.berita);
      observer.complete();
    })
  }

  detailBerita(id) {
    return this.berita[id]
  }

  // public dataBerita = {
  //   title: '',
  //   photo: '',
  //   description: ''
  // }
  saveBerita(dataBerita) {
    this.berita.push(dataBerita);
  }

  constructor() {
    console.log('Hello BeritaProvider Provider');
  }

}
