import { Component, OnInit } from '@angular/core';
import { CaseJugglingService } from 'text-libs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit  {
  constructor(public caseJuggling: CaseJugglingService) {
  }
  title = 'Sample app';
  ngOnInit() {
  }
}
