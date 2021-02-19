import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KomponentComponent } from './komponent/komponent.component';
import { Komponent2Component } from './komponent2/komponent2.component';

@NgModule({
  declarations: [
    AppComponent,
    KomponentComponent,
    Komponent2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
