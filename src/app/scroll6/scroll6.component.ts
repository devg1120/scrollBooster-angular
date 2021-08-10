import { Component, OnInit, Input, Output, 
         EventEmitter, SimpleChange, ViewChild, ElementRef } from '@angular/core';
import ScrollBooster from 'scrollbooster';


/*******************************************  Split Define **/

export type HsplitPosition = "up"   | "down"  ;
export type VsplitPosition = "left" | "right" ;

export interface Vsplit {
   direction : "viertical";
   position  : VsplitPosition;
}

export interface Hsplit {
   direction : "horizontal";
   position  : HsplitPosition;
}

export type SplitType = Vsplit | Hsplit;

/***********************************************************/

@Component({
  selector: 'scroll6',
  templateUrl: './scroll6.component.html',
  styleUrls: ['./scroll6.component.scss']
})

export class Scroll6Component implements OnInit {
 
  @Input() direction;
  @Input() bounceForce;
  @Input() splitType : SplitType;

  scb :ScrollBooster;
  //_direction: string = 'none';

  //scb.updateOptions({ emulateScroll: false });
  //scb.updateOptions({ direction: "all" });

  ngOnInit() {
  }

  @ViewChild('viewport', { read: ElementRef }) viewport!: ElementRef;
  @ViewChild('content', { read: ElementRef }) content!: ElementRef;

  ngAfterViewInit() {
    this.scb = new ScrollBooster({
      viewport: this.viewport.nativeElement,
      content: this.content.nativeElement,
      //scrollMode: 'transform',
      scrollMode: 'native',
      direction: 'vertical', 
      bounce: true,
      // Elastic bounce effect factor
      bounceForce: .3,  /* defaulr 0.1 */
      // Scroll friction factor 
      // - how fast scrolling stops after pointer release
      friction: .1,    /* default 0.05 */
      emulateScroll: false,
      textSelection: true,
      onUpdate: (state) => {
        //console.log("*** pos:",state.position.x,state.position.y);
        // console.log("*** offset:",state.dragOffset.x,state.dragOffset.y);
      }
    });

     if (this.splitType) {
        console.log("scroll6 splitType:", this.splitType.direction);
        console.log("scroll6 splitType:", this.splitType.position);
     }
  }


  ngOnChanges(changes: { [property: string]: SimpleChange }){
     if (!(this.scb)) {
        return;
     }

     if (changes['splitType']) {
        console.log("scroll6 splitType:", this.splitType.direction);
        console.log("scroll6 splitType:", this.splitType.position);
     }
     if (changes['direction']) {
        let change: SimpleChange = changes['direction']; 
        let dir = changes.direction.currentValue;
        console.log("scroll6 bounceForce change:", dir);
        this.scb.updateOptions({ direction: dir });
     }
     if (changes['bounceForce']) {
        let change: SimpleChange = changes['bounceForce']; 
        let bfv = changes.bounceForce.currentValue;
        console.log("scroll6 bounceForce change:", bfv);
        this.scb.updateOptions({ bounceForce: bfv });
     }
  }
}
