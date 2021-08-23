import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleHeaderModule } from 'ui-libs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
