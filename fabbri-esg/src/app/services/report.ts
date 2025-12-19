import { Injectable } from '@angular/core';

export interface SustainabilityReport {
  year: number;
  title: string;
  summary: string;
  fileName: string; // file dentro /assets/reports/
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  // Dati statici
  private reports: SustainabilityReport[] = [
    {
      year: 2024,
      title: 'Bilancio di Sostenibilità 2024',
      summary: 'Integrazione più forte tra strategia e sostenibilità, focus su governance, persone e impatti ambientali.',
      fileName: 'fabbri-bilancio-sostenibilita-2024.pdf'
    },
    {
      year: 2023,
      title: 'Bilancio di Sostenibilità 2023',
      summary: 'Consolidamento del percorso ESG, attenzione a innovazione e presidio dei processi.',
      fileName: 'fabbri-bilancio-sostenibilita-2023.pdf'
    },
    {
      year: 2022,
      title: 'Bilancio di Sostenibilità 2022',
      summary: 'Impostazione del percorso strutturato di rendicontazione e principi guida.',
      fileName: 'fabbri-bilancio-sostenibilita-2022.pdf'
    }
  ];

  getReports(): SustainabilityReport[] {
    // Ordinati dal più recente
    return [...this.reports].sort((a, b) => b.year - a.year);
  }

  // Path pubblico ai file negli assets
  getReportUrl(fileName: string): string {
    return `assets/reports/${encodeURIComponent(fileName)}`;
  }
}
