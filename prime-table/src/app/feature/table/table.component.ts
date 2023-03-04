import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table/table';
import { DataService } from 'src/app/data-access/data.service';
import { Rate } from 'src/app/models/currencyRate';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  rates: Rate[] = [];
  cols: any[] = [];
  loading: boolean = true;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRates().subscribe((rates) => {
      this.rates = rates;
      this.loading = false;
    });

    this.cols = [
      { field: 'code', header: 'Symbol waluty' },
      { field: 'currency', header: 'Waluta' },
      { field: 'mid', header: 'Kurs waluty' }
    ];
  }

  clear(table: Table) {
    table.clear();
  }
}
