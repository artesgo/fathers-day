import { Component, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  // this back tick ` is right above your tab key
})
export class ButtonComponent {
  click = output();
  mouseover = output();
  mouseout = output();
}
