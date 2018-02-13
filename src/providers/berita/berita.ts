//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; //
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
      title:"Title satu", 
      photo:"", 
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
    {
      title:"Title dua", 
      photo:"", 
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
    {
      title:"Title tiga", 
      photo:"", 
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
    {
      title:"Title empat", 
      photo:"", 
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
    {
      title:"Title lima", 
      photo:"", 
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
  ]

  listBerita(): Observable<any[]> {
    return new Observable ((observer) => {
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
