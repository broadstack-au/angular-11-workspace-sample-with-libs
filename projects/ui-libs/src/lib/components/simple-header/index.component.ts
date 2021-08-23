import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eg-simple-header',
  template: `
    <span [innerHTML]="'<h' + this.level + '>'+this.content+'</h' + this.level + '>'"></span>
  `,
  styles: []
})
export class SimpleHeaderComponent implements OnInit {

  @Input() level: string = "1";
  @Input() content: string = "header";

  constructor() {
    this.level = "1";
    this.content = "header";
  }

  ngOnInit(): void {
  }

}
