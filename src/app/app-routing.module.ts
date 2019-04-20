import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WeatherComponent} from './weather/weather.component';
import {CalendarComponent} from './calendar/calendar.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'features', component: FeaturesComponent},
  // {path: 'docs', component: DocsComponent},
  // {path: 'resources', component: ResourcesComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'weather', component: WeatherComponent}
  // {path: 'blog/:id/:title/:datainfo', component: BlogPostComponent},
  // {path: '**', component: ErrorComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
