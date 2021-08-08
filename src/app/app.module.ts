import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { Scroll2Component } from './scroll2/scroll2.component';
import { Scroll3Component } from './scroll3/scroll3.component';

import { environment } from '../environments/environment';

@NgModule({
imports: [BrowserModule, FormsModule
  ],
  declarations: [
    AppComponent,
    CalcComponent,
    Scroll2Component,
    Scroll3Component,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
