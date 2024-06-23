import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './shared/card/card.component';

@Component({
  standalone: true,
  imports: [CardComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fathers-day';
}
