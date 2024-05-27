import { Component } from '@angular/core';
import { RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent,CardBodyComponent],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss'
})
export class ReportesComponent {

}
