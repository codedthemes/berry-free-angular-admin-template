// Angular Import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BajajChartComponent } from 'src/app/theme/shared/components/apexchart/bajaj-chart/bajaj-chart.component';
import { BarChartComponent } from 'src/app/theme/shared/components/apexchart/bar-chart/bar-chart.component';
import { ChartDataMonthComponent } from 'src/app/theme/shared/components/apexchart/chart-data-month/chart-data-month.component';

@Component({
  selector: 'app-default',
  imports: [CommonModule, BajajChartComponent, BarChartComponent, ChartDataMonthComponent, SharedModule],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  // public method
  ListGroup = [
    {
      name: 'Bajaj Finery',
      profit: '10% Profit',
      invest: '$1839.00',
      bgColor: 'bg-light-success',
      icon: 'ti ti-chevron-up',
      color: 'text-success'
    },
    {
      name: 'TTML',
      profit: '10% Loss',
      invest: '$100.00',
      bgColor: 'bg-light-danger',
      icon: 'ti ti-chevron-down',
      color: 'text-danger'
    },
    {
      name: 'Reliance',
      profit: '10% Profit',
      invest: '$200.00',
      bgColor: 'bg-light-success',
      icon: 'ti ti-chevron-up',
      color: 'text-success'
    },
    {
      name: 'ATGL',
      profit: '10% Loss',
      invest: '$189.00',
      bgColor: 'bg-light-danger',
      icon: 'ti ti-chevron-down',
      color: 'text-danger'
    },
    {
      name: 'Stolon',
      profit: '10% Profit',
      invest: '$210.00',
      bgColor: 'bg-light-success',
      icon: 'ti ti-chevron-up',
      color: 'text-success',
      space: 'pb-0'
    }
  ];

  profileCard = [
    {
      style: 'bg-primary-dark text-white',
      background: 'bg-primary',
      value: '$203k',
      text: 'Net Profit',
      color: 'text-white',
      value_color: 'text-white'
    },
    {
      background: 'bg-warning',
      avatar_background: 'bg-light-warning',
      value: '$550K',
      text: 'Total Revenue',
      color: 'text-warning'
    }
  ];
}
