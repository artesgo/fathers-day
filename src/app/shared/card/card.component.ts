import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  title = 'fathers-day';
  inside = 'hello';
  message = input('');

  clickHandler() {
    const localState = 'for this function';
    console.log('clicking this button');
  }

  anotherFunction() {
    this.clickHandler();
    // this.outside
    this.inside;
  }

  innerClick(event: Event) {
    // prevent bubbling of the event up the DOM
    // event.preventDefault();
    // event.stopPropagation();

    // doing more logic
    console.log('not console the other function');
  }
}

const outside = 'haha';
