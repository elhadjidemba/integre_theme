import { Route } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';

export const navbarRoute: Route = {
  path: '',
  component: NavBarComponent,
  outlet: 'navbar'
};
