import { Component } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blusmart';
  tableData: any;
  cardData:any;
  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.tableService.getTableData().subscribe((data) => {
      this.tableData = data;
    });

    this.tableService.getCardData().subscribe((data)=>{
      this.cardData = data;
    })
  }
}
