import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }
  ngOnInit(): void {
  }

  name: string = "";
  completed: string="";
  valuesNumber:number= -1;
  updateName: String[]=[];
  updateCompleted: number[]=[];

  public barChartLegend = true;
  public barChartPlugins = [];
  
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.updateName,
    datasets: [{data:this.updateCompleted, label:'series1' }]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  

  updateChart(){
    this.valuesNumber = Number(this.completed);
    this.updateName.push(this.name);
    this.updateCompleted.push(this.valuesNumber);
    this.name="";
    this.completed="";
  }

  generateChart(){
    this.chart?.update();
  }

  
}
