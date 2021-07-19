import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { errorRoute } from './layouts/error/error.route';
import { navbarRoute } from './layouts/admin/nav-bar/navbar.route';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { Authority } from 'app/shared/constants/authority.constants';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';

const LAYOUT_ROUTES = [navbarRoute];
//const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];
const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'home',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class YAppRoutingModule {}
