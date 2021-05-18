import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {
  public doughnutChartData2 = [45, 30,25];
  public doughnutChartType2 = 'doughnut';
  public doughnutColors2=[
    {
     backgroundColor: [
    '#521482',
     '#fa3d37',
     '#5086fa'
    
     ]
     },
     {
       borderColor:[
        '#521482',
        '#fa3d37',
        '#5086fa'
       ]
     }
     ];

  constructor() { }

  ngOnInit(): void {
  }

}
