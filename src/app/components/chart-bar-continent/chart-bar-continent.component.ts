import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label, Color } from "ng2-charts";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-chart-bar-continent",
  templateUrl: "./chart-bar-continent.component.html",
  styleUrls: ["./chart-bar-continent.component.scss"],
})
export class ChartBarContinentComponent implements OnInit {
  chartReady = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };

  public barChartLabels: Label[];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[];

  constructor(private dataService: DataService) {}

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

  ngOnInit(): void {
    this.getContinents();
  }

  getContinents() {
    this.dataService.getDataContinents().subscribe((res) => {
      this.barChartLabels = [[res.africaTotal.year_week]];

      this.barChartData = [
        { data: [res.africaTotal.cumulative_count], label: "Africa" },
        { data: [res.americaTotal.cumulative_count], label: "America" },
        { data: [res.asiaTotal.cumulative_count], label: "Asia" },
        { data: [res.europeTotal.cumulative_count], label: "Europe" },
        { data: [res.oceaniaTotal.cumulative_count], label: "Oceania" },
      ];
      this.chartReady = true;
    });
  }

  public barChartColors: Color[] = [
    { backgroundColor: "rgb(255, 165, 0)" },
    { backgroundColor: "rgb(255, 0, 0)" },
    { backgroundColor: "rgb(60, 60, 60)" },
    { backgroundColor: "#F46C23" },
    { backgroundColor: "#275BEC" },
  ];
}
