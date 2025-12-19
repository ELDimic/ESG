import { Component } from '@angular/core';
import { ReportList } from '../../components/report-list/report-list';
import { ReportService, SustainabilityReport } from '../../services/report';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [ReportList],
  templateUrl: './reports.html',
  styleUrls: ['./reports.css'],
})
export class Reports {
  reports: SustainabilityReport[];

  constructor(private reportService: ReportService) {
    this.reports = this.reportService.getReports();
  }

  onDownload(event: any): void {
    console.log(event);
  }

}
