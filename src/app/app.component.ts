import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './shared/card/card.component';
import { ButtonComponent } from './shared/button/button.component';
import { NavComponent } from './shared/nav/nav.component';

@Component({
  standalone: true,
  imports: [CardComponent, RouterModule, ButtonComponent, NavComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  message = 'fathers-day';
  showMessage = false;
  handle() {
    this.showMessage = true;
  }

  spy() {
    console.log('i see you');
  }
}
