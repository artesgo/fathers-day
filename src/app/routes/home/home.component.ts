import { Component, viewChild } from '@angular/core';
import { ButtonDirective } from '../../shared/button/button.directive';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [ButtonDirective, ButtonComponent],
})
export class HomeComponent {
  dir = viewChild<ButtonDirective>('appBtn');

  hi() {
    console.log('hi', this.dir());
    //
    this.dir()?.hi();
  }
}
