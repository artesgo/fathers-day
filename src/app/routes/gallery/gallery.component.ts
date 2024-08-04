import { Component, signal } from '@angular/core';
import { GalleryComponent } from '../../shared/gallery/gallery.component';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './gallery.component.html',
  selector: 'app-route-gallery',
  standalone: true,
  imports: [GalleryComponent, FormsModule],
})
export class GalleryRouteComponent {
  images = signal([
    '/pexels-anntarazevich-5620861.jpg',
    '/pexels-berceste-1499342462-27294595.jpg',
    '/pexels-karolina-grabowska-6659686.jpg',
    '/pexels-marcus-aurelius-9788610.jpg',
  ]);
  cols = signal(4);

  value = '';
  // TODO: should read from localStorage so it shows the previous list
  secondSection = signal([] as string[]);

  addImage() {
    // with regular variables, we assign back to it
    // this.secondSection = ...
    // with signal variables, we use the set function to update it
    this.secondSection.set([this.value, ...this.secondSection()]);
    // TODO: save this list to localStorage
  }

  // TODO: Add a button to gallery route to clear storage
  clearStorage() {
    // TODO: clear localStorage of these images
  }
}
