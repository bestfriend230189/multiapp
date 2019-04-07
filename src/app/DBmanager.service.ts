import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';



@Injectable()
export class DBmanagerService{
  fireurl = 'https://angrylar-requests.firebaseio.com/blog.json';
  fireheaders = new HttpHeaders({'Content-type': 'application/json'});
  response_fire: any = null;
  arrr = [];
  constructor (private HTTP: HttpClient){

  }

  saveDataToFire(data: any[]){
    return this.HTTP.post(this.fireurl, data, {headers: this.fireheaders});
  }
  readDataFromFire(){
    // return this.HTTP.get(this.fireurl).subscribe((resp : any[]) => {
    //  console.log(resp);
    //   return resp;
    // });
    // this.response_fire =  this.HTTP.get(this.fireurl).map((resp: any[]) => {
    //   // this.response_fire = resp;
    //   return resp;
    // });
    //
    // const transformResponse = Object.keys(this.response_fire).map(key => {
    //   this.response_fire[key].key = key;
    //   this.arrr.push(response[key]);
    //   console.log(this.arrr);
    // });
    // this.response_fire =  this.HTTP.get(this.fireurl);
    // return this.response_fire;
  }
}
