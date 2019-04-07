import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RequestService]
})
export class HomeComponent implements OnInit {
  privat24 : any = [];
  newsarr : any = [];
  totalResults = null;

  constructor(public Request: RequestService) { }

  ngOnInit() {
    this.Request.getData().subscribe((response) => {
      this.privat24 = response;
      console.log(this.privat24);
    });

    this.Request.getNews().subscribe((response) => {
      this.newsarr = response;
      // this.totalResults = response.totalResults;
      console.log(this.newsarr);
    });
  }

}
