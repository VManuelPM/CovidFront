import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType } from "chart.js";
import { DataService } from "../../services/data.service";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label } from "ng2-charts";

@Component({
  selector: "app-chart-continent",
  templateUrl: "./chart-continent.component.html",
  styleUrls: ["./chart-continent.component.scss"],
})
export class ChartContinentComponent implements OnInit {
  chartReady = false;

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      position: "top",
      labels: {
        fontColor: "black",
      },
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    },
  };

  public pieChartLabels: Label[];

  public pieChartData: number[];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: [
        "rgb(255, 165, 0)",
        "rgb(255, 0, 0)",
        "rgb(60, 60, 60)",
        "#F46C23",
        "#275BEC",
      ],
      borderColor: [
        "rgb(0,0,0)",
        "rgb(0,0,0)",
        "rgb(0,0,0)",
        "rgb(0,0,0)",
        "rgb(0,0,0)",
      ],
    },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getContinents();
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  getContinents() {
    this.dataService.getDataContinents().subscribe((res) => {
      console.log(res);

      this.pieChartLabels = [
        ["Africa"],
        ["America"],
        ["Asia"],
        ["Europe"],
        ["Oceania"],
      ];

      this.pieChartData = [
        res.africaTotal.cumulative_count,
        res.americaTotal.cumulative_count,
        res.asiaTotal.cumulative_count,
        res.europeTotal.cumulative_count,
        res.oceaniaTotal.cumulative_count,
      ];
      this.chartReady = true;
    });
  }

  changeLegendPosition(): void {
    this.pieChartOptions.legend.position =
      this.pieChartOptions.legend.position === "left" ? "top" : "left";
  }
}
