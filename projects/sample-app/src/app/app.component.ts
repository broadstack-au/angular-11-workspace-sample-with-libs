import { Component } from '@angular/core';
import { TextLibsService } from 'text-libs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public textLibs: TextLibsService) {
  }
  title = 'Sample app';
}
