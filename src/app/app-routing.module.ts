import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { StatsComponent } from './stats/stats.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
const routes: Routes = [
  {path: '', redirectTo: "/first",pathMatch: 'full'},
  {path:'first',component:FirstPageComponent},
{path:'second',component:SecondPageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
