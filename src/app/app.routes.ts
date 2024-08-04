import { Route } from '@angular/router';
import { TypingComponent } from './routes/typing/typing.component';
import { AboutComponent } from './routes/about/about.component';
import { HomeComponent } from './routes/home/home.component';
import { GalleryRouteComponent } from './routes/gallery/gallery.component';

// 1, create the component that is being routed
// 2, configure the appRoutes list to route to that new component
// 3, update your nav
export const appRoutes: Route[] = [
  // routing next time
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'typing', component: TypingComponent },
  { path: 'gallery', component: GalleryRouteComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
