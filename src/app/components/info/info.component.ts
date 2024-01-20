import { Component, inject } from '@angular/core';
import { AttributesService } from 'src/app/services/attributes/attributes.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  public attributes = inject(AttributesService);
}
