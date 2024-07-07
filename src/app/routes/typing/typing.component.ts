import { Component } from '@angular/core';
import { generate } from 'random-words';
import { ButtonComponent } from '../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-typing',
  standalone: true,
  // templateUrl could also just be template
  templateUrl: './typing.component.html',
  imports: [ButtonComponent, FormsModule],
})
export class TypingComponent {
  // in angular, you have to create a class for a component
  word = generate();
  typing = '';
  correct = false;

  newWord() {
    this.word = generate();
  }

  checkWord() {
    if (this.word === this.typing) {
      this.correct = true;
    } else {
      this.correct = false;
    }
    console.log('checkWord', this.correct);
  }
}
