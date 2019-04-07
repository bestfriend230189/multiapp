import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  wetherarr: any = {};
  citytofind: any = "Rivne";
  tryfind = false;
  position = null;
  // lat = null;
  // lon = null;

  img_base_url = 'http://openweathermap.org/img/w/';

  constructor(public Request: WeatherService) {
  }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    console.log(this.citytofind);
    if (this.citytofind !== null) {
      this.tryfind = true;
      this.Request.getWeather(this.citytofind).subscribe((responsew) => {
        this.wetherarr = responsew;
        console.log(this.wetherarr);
      });
    } else {
      alert('Fill out name of city!!!');
    }
  }

  getWeatherByLocation() {
    var x = document.getElementById("demo");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showWeatherByPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
    showWeatherByPosition(pos) {
      console.log(pos.coords.latitude, pos.coords.longitude);
      this.Request.getWeatherByGeo(pos.coords.latitude, pos.coords.longitude).subscribe((responsbegeo) => {
        console.log(responsbegeo);
        this.wetherarr = responsbegeo;
        console.log(this.wetherarr);
      });
    }

}
