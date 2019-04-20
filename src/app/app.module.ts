import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import {DBmanagerService} from './DBmanager.service';
import { CalendarComponent } from './calendar/calendar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const myFirebaseConfig = {
  apiKey: 'AIzaSyBhN6hLEjhooTXP80mUzPdlZ_ottCTDSoI',
  authDomain: 'multiappcalendar.firebaseapp.com',
  databaseURL: 'https://multiappcalendar.firebaseio.com',
  projectId: 'multiappcalendar',
  storageBucket: 'multiappcalendar.appspot.com',
  messagingSenderId: '711436483886'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // DocsComponent,
    // FeaturesComponent,
    // ResourcesComponent,
    // BlogComponent,
    // BlogPostComponent,
    // BlogsinglepostComponent,
    // ErrorComponent,
    // AddpostcomponentComponent,
    WeatherComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(myFirebaseConfig),
    AngularFireAuthModule
  ],
  providers: [PostService, DBmanagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
