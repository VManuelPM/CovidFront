import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Data } from "../../models/data";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    "continent",
    "country",
    "country_code",
    "weekly_count",
    "indicator",
    "population",
    "year_week",
  ];
  dataSource: MatTableDataSource<Data>;
  @Input() data = "";

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setDataSource(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setDataSource(this.data);
  }

  setDataSource(dataSource) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(dataSource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
