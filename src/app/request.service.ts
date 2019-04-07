import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()

export class RequestService {
  url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
  newsurl: string = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ae20f69c7709447cb10e96bba051aa4c';
  constructor(private request: HttpClient) { }

  getData() {
    return this.request.get(this.url).map((response: Response) => { return response ; } );
  }
  getNews() {
    // var req = new Request(this.url);
    // fetch(req)
    //   .then(function(response) {
    //     //console.log(response.json());
    //     this.newsarr = response.json();
    //     console.log(this.newsarr.articles);
    //   });
    return this.request.get(this.newsurl).map((response: Response) => { return response ; } );
  }
}



