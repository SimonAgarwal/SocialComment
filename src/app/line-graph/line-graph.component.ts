import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';



@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {
  @ViewChild('myCanvas') canvas: ElementRef;
  type='AreaChart';
  data =([
    
    ['Mon',  20.1,11.2],
    ['Tue',  10.2,15],
    ['Wed',  15,14.3],
    ['Thurs',  20,11.7],
    ['Fri',17,30],
    ['Sat',29,25],
    ['Sun',30.5,29]
  ]);

   options = {
    title: 'Spend Time',
    hAxis: {  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0,gridlines: { count: 4,color:'black' }},
  
            
  colors:['red','#525151'],
  
  backgroundColor:'black'
  
  };
  width:500;
  height:500;
   
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
