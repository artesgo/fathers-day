import { Component, computed, input } from '@angular/core';

@Component({
  templateUrl: './gallery.component.html',
  selector: 'app-gallery',
  standalone: true,
})
export class GalleryComponent {
  images = input([] as string[]);
  cols = input(4);

  allCols = computed(() => this.splitArrayIntoCols(this.images(), this.cols()));

  splitArrayIntoCols(list: string[], cols: number) {
    // is when our list is less than the cols
    const _cols = Math.min(list.length, cols);
    // the length of each child column
    // 10 / 3 is 3.333333, rounded down, is 3
    // 10 / 3 is 3.333333, rounded up,   is 4
    const length = Math.ceil(list.length / _cols);

    const result = [];
    for (let i = 0; i < cols; i++) {
      // rounded down, i from 0 * 3 = 0, 0 * 3 + 3 = 3
      // rounded   up, i from 0 * 4 = 0, 0 * 4 + 4 = 4
      result.push(list.slice(i * length, i * length + length));
    }
    return result;
  }

  generateRandomImagePlaceholders(pics: number) {
    return new Array(pics).fill(0).map(() => {
      return {
        // TODO: redo this part and get skeleton images showing
        width: Math.round(Math.random() * 1000) + 200,
        height: Math.round(Math.random() * 1000) + 200,
        color: '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
        // #000000 to #FFFFFF
        // with opacity: #000FFF0F
        // hexadecimal is 0 - 9 and A - F, 0 - F, 256
      };
    });
  }
}
