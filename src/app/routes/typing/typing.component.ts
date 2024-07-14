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
  word = generate() as string;
  typing = '';
  errors = 0;
  correct = false;

  newWord() {
    this.word = generate() as string;
  }

  clearWord() {
    this.typing = '';
  }

  checkErrors(word: string, typing: string) {
    if (word.indexOf(typing) === 0) {
      // on the right track
    } else {
      // increment their error counter
      this.errors++;
    }
  }

  // TODO: call the checkWord function from the effect
  checkWord(event: KeyboardEvent) {
    if (this.word === this.typing) {
      // TODO: generate a new word if it's correct
      this.correct = true;
      this.newWord();
      this.clearWord();
    } else {
      // TODO: perform a substring error check
      this.correct = false;
      if (event.code !== 'Backspace') {
        this.checkErrors(this.word, this.typing);
      }
    }
  }
}
