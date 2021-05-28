import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

 
  type = 'PieChart';  
  data = [  
     ['Name1', 30],  
     ['Name2', 70],  
     
      
  ];  
  columnNames = ['Name', 'Percentage'];  
  options = {    
    pieHole:0.7  ,
    backgroundColor:'black',
    titleTextStyle:
    {
      color:'white',
      fontSize:14
    },
    colors:['grey','#521482']
  };  
  width = 150;  
  height = 100; 


  //second
  type2 = 'PieChart';  
  data2 = [  
     ['Name1', 40],  
     ['Name2', 60],  
     
      
  ];  
  columnNames2 = ['Name', 'Percentage'];  
  options2 = {    
    pieHole:0.7  ,
    backgroundColor:'#5086fa',
    titleTextStyle:
    {
      color:'white',
      fontSize:14
    },
    colors:['#5086fa','white']
  };  
  width2= 150;  
  height2 = 100; 

  //third

  type3 = 'PieChart';  
  data3 = [  
     ['Name1', 60],  
     ['Name2', 40],  
     
      
  ];  
  columnNames3 = ['Name', 'Percentage'];  
  options3 = {    
    pieHole:0.7  ,
    backgroundColor:'black',
    titleTextStyle:
    {
      color:'white',
      fontSize:14
    },
    colors:['grey','red']
  };  
  width3= 150;  
  height3 = 100; 



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
