import { Component, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './shared/card/card.component';
import { ButtonComponent } from './shared/button/button.component';
import { NavComponent } from './shared/nav/nav.component';
import { KeyboardComponent } from './shared/keyboard/keyboard.component';

@Component({
  standalone: true,
  imports: [
    CardComponent,
    RouterModule,
    ButtonComponent,
    NavComponent,
    KeyboardComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  keys = signal<string[]>([]);
  message = 'fathers-day';
  showMessage = false;
  handle() {
    this.showMessage = true;
  }

  spy() {
    console.log('i see you');
  }

  /**
   * Listen to keydown events, so that we can pass it into the keyboard component
   */
  @HostListener('document:keydown', ['$event']) onKeydown(
    event: KeyboardEvent
  ) {
    console.log('keydown', event.key);
    this.keys.set([...this.keys(), event.key]);
  }

  @HostListener('document:keyup', ['$event']) onKeyup(
    event: KeyboardEvent
  ) {
    this.keys.set([
      ...this.keys().filter((key) => key !== event.key),
    ]);
  }
}
