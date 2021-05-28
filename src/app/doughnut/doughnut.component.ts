import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {

  title = 'Open Positions In department';  
  type = 'PieChart';  
  data = [  
     ['Name1', 25],  
     ['Name2', 30],  
     ['Name3', 45],  
      
  ];  
  columnNames = ['Name', 'Percentage'];  
  options = {    
    pieHole:0.4  ,
    backgroundColor:'black',
    titleTextStyle:
    {
      color:'white',
      fontSize:14
    },
    colors:['#5086fa','#fa3d37','#521482']
  };  
  width = 350;  
  height = 300;  



  public doc: any = window.document;

  constructor() { }

  ngOnInit(): Document {
    return window.document 
  }

}
