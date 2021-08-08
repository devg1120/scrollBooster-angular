import { Component, OnInit, Input, Output, 
         EventEmitter, ViewChild, ElementRef } from '@angular/core';
import ScrollBooster from 'scrollbooster';

@Component({
  selector: 'scroll3',
  templateUrl: './scroll3.component.html',
  styleUrls: ['./scroll3.component.scss']
})
export class Scroll3Component implements OnInit {

  ngOnInit() {
  }

  @ViewChild('viewport', { read: ElementRef }) viewport!: ElementRef;
  @ViewChild('content', { read: ElementRef }) content!: ElementRef;

  ngAfterViewInit() {
    new ScrollBooster({
      viewport: this.viewport.nativeElement,
      content: this.content.nativeElement,
      //scrollMode: 'transform',
      scrollMode: 'native',
      direction: 'vertical', 
      emulateScroll: true
    });
  }

}
