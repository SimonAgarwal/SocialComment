import { Component, OnInit } from '@angular/core';

import { Chart, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  //first graph
  //public doughnutChartLabels = ['70', '30'];
  public doughnutChartData1 = [70, 30];
  public doughnutChartType1 = 'doughnut';
  public doughnutColors1=[
    {
     backgroundColor: [
    '#521482',
     '#b5b1a7',
    
     ]
     },
     {
       borderColor:[
         '#000000'
       ]
     }
     ];

     //second graph

     public doughnutChartData2 = [60, 40];
  public doughnutChartType2 = 'doughnut';
  public doughnutColors2=[
    {
     backgroundColor: [
    '#5086fa',
     '#f7f6f2',
    
     ]
     },
     {
       borderColor:[
         '#000000'
       ]
     }
     ];

     //third graph

     public doughnutChartData3= [40, 60];
  public doughnutChartType3= 'doughnut';
  public doughnutColors3=[
    {
     backgroundColor: [
    '#b5b1a7',
     '#fa3d37',
    
     ]
     },
     {
       borderColor:[
         '#000000'
       ]
     }
     ];
    
    

  constructor() { }

  ngOnInit(): void {
   
   
  }

}
