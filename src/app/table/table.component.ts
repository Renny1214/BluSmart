import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()
  tableData : any[] = [];
  pageSizeOptions: number[] = [5, 10, 25];
  pageSize: number = 5;
  currentPage: number = 1;

  constructor(private datePipe : DatePipe) { }

  ngOnInit() {
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
  }
  
  getRequestStatusClass(requestStatus: string): string {
    switch (requestStatus) {
      case 'Pending':
        return 'status-pending';
      case 'Approved':
        return 'status-approved';
      case 'Rejected':
        return 'status-rejected';
      default:
        return '';
    }
  }
  getRequestStatusTextClass(requestStatus: string): string {
    switch (requestStatus) {
      case 'Pending':
        return 'text-pending';
      case 'Approved':
        return 'text-approved';
      case 'Rejected':
        return 'text-rejected';
      default:
        return '';
    }
  }


  getFormattedDate(date : string){
    return this.datePipe.transform(new Date(date), 'dd-MM-yyyy, hh:mm a');
  }
}
