import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { DocsComponent } from './docs/docs.component';
// import { FeaturesComponent } from './features/features.component';
// import { ResourcesComponent } from './resources/resources.component';
// import { BlogComponent } from './blog/blog.component';
// import { BlogPostComponent } from './blog-post/blog-post.component';
// import { BlogsinglepostComponent } from './blogsinglepost/blogsinglepost.component';
// import { ErrorComponent } from './error/error.component';
// import { AddpostcomponentComponent } from './addpostcomponent/addpostcomponent.component';
import { FormsModule } from '@angular/forms';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import {DBmanagerService} from './DBmanager.service';
import { CalendarComponent } from './calendar/calendar.component';


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
    HttpClientModule
  ],
  providers: [PostService, DBmanagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
