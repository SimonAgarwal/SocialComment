import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { StatsComponent } from './stats/stats.component';
import { ChartsModule } from 'ng2-charts';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { DoughnutComponent } from './doughnut/doughnut.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    StatsComponent,
    LineGraphComponent,
    DoughnutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
