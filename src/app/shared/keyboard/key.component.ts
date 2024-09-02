import { Component, input } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  standalone: true,
})
export class KeyComponent {
  activated = input(false);
  width = input(20);
}
