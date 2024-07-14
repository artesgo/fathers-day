import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  imports: [RouterLink, RouterLinkActive],
})
// the class name should ideally be unique, so that typescript doesn't get confused when importing components
export class NavComponent {}
