import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import './vendor';
import { YSharedModule } from 'app/shared/shared.module';
import { YCoreModule } from 'app/core/core.module';
import { YAppRoutingModule } from './app-routing.module';
import { YHomeModule } from './home/home.module';
import { YEntityModule } from './entities/entity.module';
import { NavBarComponent } from './layouts/admin/nav-bar/nav-bar.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { NavigationComponent } from './layouts/admin/navigation/navigation.component';
import { NavContentComponent } from './layouts/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './layouts/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './layouts/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './layouts/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavLeftComponent } from './layouts/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './layouts/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './layouts/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './layouts/admin/configuration/configuration.component';
/* Menu Items */
import { NavigationItem } from './layouts/admin/navigation/navigation';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
const appRoutes: Routes = [{ path: 'home', component: AdminComponent }];
@NgModule({
  imports: [
    BrowserModule,
    YSharedModule,
    YCoreModule,
    YHomeModule,
    RouterModule.forRoot(appRoutes),
    YEntityModule,
    YAppRoutingModule,
    BrowserAnimationsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    PerfectScrollbarModule
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent
  ],
  providers: [
    NavigationItem,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AuthComponent]
  // declarations: [MainComponent, NavBarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  // bootstrap: [MainComponent]
})
export class YAppModule {}
