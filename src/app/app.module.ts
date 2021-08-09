import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { Scroll2Component } from './scroll2/scroll2.component';
import { Scroll3Component } from './scroll3/scroll3.component';
import { Scroll4Component } from './scroll4/scroll4.component';

import { environment } from '../environments/environment';

import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


@NgModule({
imports: [
    BrowserModule, 
    FormsModule,
    RadioButtonModule,
    ButtonModule,
    CardModule
  ],
  declarations: [
    AppComponent,
    CalcComponent,
    Scroll2Component,
    Scroll3Component,
    Scroll4Component,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
