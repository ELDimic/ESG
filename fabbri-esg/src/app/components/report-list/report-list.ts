import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReportService, SustainabilityReport } from '../../services/report';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-list.html',
  styleUrls: ['./report-list.css'],
})
export class ReportList {
  // Lista dei report da visualizzare, fornita dal componente padre
  @Input() reports: SustainabilityReport[] = [];
  // Evento emesso quando l'utente richiede il download di un report
  @Output() downloadRequested = new EventEmitter<number>();

  constructor(private reportService: ReportService) { }

  reportUrl(fileName: string): string {
    return this.reportService.getReportUrl(fileName);
  }

  notify(year: number): void {
    this.downloadRequested.emit(year);
  }
  /**
 * Emette l'evento di richiesta download verso il componente padre
 * @param filename Nome del file PDF da scaricare
 */
  downloadReport(filename: string) {
    const url = `/assets/${filename}`;
    console.log('Download URL:', url);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
