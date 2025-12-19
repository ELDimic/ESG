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
  // Array dei report di sostenibilità disponibili
  reports: SustainabilityReport[];

  constructor(private reportService: ReportService) {
    // Recupera i report dal servizio
    this.reports = this.reportService.getReports();
  }
}
