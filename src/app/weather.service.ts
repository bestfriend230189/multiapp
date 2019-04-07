import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {query} from '@angular/animations';


@Injectable()

export class WeatherService {
  url = 'http://api.openweathermap.org/data/2.5/weather?appid=558389224c7b46b0434be8ef3129403b';

  constructor(private request: HttpClient) { }

  getWeather(city) {
    return this.request.get(this.url + '&q=' + city).map((response: Response) => { return response ; } );
  }
  getWeatherByGeo(lat, lon) {
    return this.request.get(this.url + '&lat=' + lat.toString() + '&lon=' +
      lon.toString()).map((response: Response) => { return response ; } );
  }

}



