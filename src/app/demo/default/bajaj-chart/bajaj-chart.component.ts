// angular import
import { Component, ViewChild } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import {
  NgApexchartsModule,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexAxisChartSeries,
  ApexTooltip,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  colors: string[];
  stroke: ApexStroke;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-bajaj-chart',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule],
  templateUrl: './bajaj-chart.component.html',
  styleUrl: './bajaj-chart.component.scss'
})
export class BajajChartComponent {
  // public props
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;

  // constructor
  constructor() {
    this.chartOptions = {
      chart: {
        type: 'area',
        height: 95,
        stacked: true,
        sparkline: {
          enabled: true
        },
        background: 'transparent'
      },
      stroke: {
        curve: 'smooth',
        width: 1
      },
      series: [
        {
          data: [0, 15, 10, 50, 30, 40, 25]
        }
      ],
      tooltip: {
        theme: 'light',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: () => 'Ticket '
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#673ab7']
    };
  }
}
