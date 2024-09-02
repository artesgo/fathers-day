import {
  Component,
  HostListener,
  input,
  signal,
} from '@angular/core';
import { KeyComponent } from './key.component';
import { NgxParticlesModule } from '@tsparticles/angular';
import {
  MoveDirection,
  // ClickMode,
  // HoverMode,
  OutMode,
} from '@tsparticles/engine';

@Component({
  selector: 'app-keyboard',
  templateUrl: 'keyboard.component.html',
  standalone: true,
  imports: [KeyComponent, NgxParticlesModule],
})
export class KeyboardComponent {
  keys = input<string[]>(['a', 'b', 'c', 'd', 'k']);
  key = '';
  id = signal('anything');
  particlesOptions = signal<any>({
    background: {
      color: {
        value: '#0d47a1',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          // mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          // mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  });

  @HostListener('document:keyup', ['$event']) onKeyup(
    event: KeyboardEvent
  ) {
    this.key = event.key;
  }

  particlesLoaded(event: any) {
    console.log(event);
  }
}
