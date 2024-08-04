import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBtn]',
  standalone: true,
})
export class ButtonDirective {
  @HostBinding('class') btnClass = 'btn btn-primary border-orange-700 border border-dashed p-4';

  hi() {
    console.log('hi from directive');
  }
}
