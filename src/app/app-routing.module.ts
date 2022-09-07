import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [
  {path: 'column-chart', component:ColumnChartComponent},
  {path: 'line-chart', component: LineChartComponent},
  {path: 'pie-chart', component: PieChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ColumnChartComponent, LineChartComponent, PieChartComponent];