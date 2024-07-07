import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  imports: [RouterLink],
})
// the class name should ideally be unique, so that typescript doesn't get confused when importing components
export class NavComponent {}
