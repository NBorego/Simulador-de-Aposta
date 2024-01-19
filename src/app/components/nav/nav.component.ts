import { Component, inject } from '@angular/core';
import { AttributesService } from 'src/app/services/attributes/attributes.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public attributes = inject(AttributesService);
}
