import {
  Component,
  HostListener,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { KeyComponent } from './key.component';
import {
  IParticlesProps,
  NgParticlesService,
  NgxParticlesModule,
} from '@tsparticles/angular';
import { MoveDirection, OutMode } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-keyboard',
  templateUrl: 'keyboard.component.html',
  standalone: true,
  imports: [KeyComponent, NgxParticlesModule],
})
export class KeyboardComponent implements OnInit {
  keys = input<string[]>(['a', 'b', 'c', 'd', 'k']);
  key = '';
  id = signal('anything');
  particlesOptions = signal<IParticlesProps>({
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: {
          enable: true,
          delay: 0.5,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ['#AC0', '#0AC', '#CA0', '#0CA'],
      },
      links: {
        color: '#333',
        distance: 200,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: true,
        speed: 10,
        straight: false,
      },
      number: {
        density: {
          enable: true,
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
    emitters: {
      autoPlay: true,
      fill: true,
      position: { x: -5, y: 55 },
      life: { wait: false },
      rate: { delay: 7.15, quantity: 1 },
      shape: {
        type: 'square',
        options: {},
        replace: {
          color: false,
          opacity: false,
        },
      },
      startCount: 0,
      size: {
        mode: 'percent',
        height: 0, width: 0,
      },
      particles: {
        shape: {
          type: 'images',
          options: {
            images: {
              src: 'https://particles.js.org/images/cyan_amongus.png',
              width: 500,
              height: 634,
            },
          },
        },
        size: { value: 40 },
        move: {
          direction: MoveDirection.right,
          speed: 10,
          straight: true,
          outModes: { right: OutMode.destroy },
        },
        zIndex: { value: 5 },
        rotate: {
          value: { min: 0, max: 760 },
          animation: { enable: true, speed: 10, sync: true },
        },
      },
    },
    detectRetina: true,
  });
  constructor(
    private readonly ngParticlesService: NgParticlesService
  ) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
    });
  }

  @HostListener('document:keyup', ['$event']) onKeyup(
    event: KeyboardEvent
  ) {
    this.key = event.key;
  }

  particlesLoaded(event: any) {
    console.log(event);
  }
}
