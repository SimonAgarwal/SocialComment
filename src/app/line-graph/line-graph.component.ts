import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {
  @ViewChild('myCanvas') canvas: ElementRef;
  
  public lineChartColors: Color[] = [
    {
      borderColor: '#d15a56',
      borderWidth:1,
      backgroundColor: '#782422',
      
    },
  ];
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40] },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
