import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /******************************************* scrool3 ***/

  scroll3_direction : string = 'none';
  scroll3inputToChild: Object;

  scroll3_onClick() {
    console.log("scroll3 click:", this.scroll3_direction);

  }

  scroll3_onChange(newValue) {
    console.log("scroll3_onChange:",newValue);
    this.scroll3inputToChild = newValue;
  }

  /******************************************* scrool4 ***/

  scroll4_direction : string = 'none';

  scroll4_onClick() {
    console.log("scroll4 click:", this.scroll4_direction);

  }

}
