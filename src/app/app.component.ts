import { Component, inject } from '@angular/core';
import { AttributesService } from './services/attributes/attributes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public attributes = inject(AttributesService);
}
