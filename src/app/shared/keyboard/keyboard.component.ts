import {
  Component,
  HostListener,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { KeyComponent } from './key.component';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import {
  MoveDirection,
  // ClickMode,
  // HoverMode,
  OutMode,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

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
  constructor(
    private readonly ngParticlesService: NgParticlesService
  ) {}
  
  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
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
