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
import { PercentAppComponent } from './percent-app/percent-app.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { SecondLeftComponent } from './second-left/second-left.component';
import { SecondRightComponent } from './second-right/second-right.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    StatsComponent,
    LineGraphComponent,
    DoughnutComponent,
    PercentAppComponent,
    CampaignsComponent,
    SecondLeftComponent,
    SecondRightComponent
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
