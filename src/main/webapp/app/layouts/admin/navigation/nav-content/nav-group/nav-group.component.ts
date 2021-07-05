import { Component, Input, NgZone, OnInit } from '@angular/core';
import { NavigationItem } from '../../navigation';
import { Location } from '@angular/common';
import { NextConfig } from '../../../../../app-config';

@Component({
  selector: 'jhi-app-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss']
})
export class NavGroupComponent implements OnInit {
  @Input()
  item!: NavigationItem;
  @Input()
  layout1!: boolean;
  @Input() activeId: any;
  public nextConfig: any;

  constructor(private zone: NgZone, private location: Location) {
    this.nextConfig = NextConfig.config;
  }

  ngOnInit(): void {
    /* eslint-disable @typescript-eslint/class-name-casing */
    /* eslint-disable @typescript-eslint/camelcase */
    let current_url = this.location.path();
    if (this.location['_baseHref']) {
      current_url = this.location['_baseHref'] + this.location.path();
    }
    const link = "a.nav-link[ href='" + current_url + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      /* eslint-disable @typescript-eslint/class-name-casing */
      /* eslint-disable @typescript-eslint/camelcase */
      const parent = ele.parentElement;
      /* eslint-disable @typescript-eslint/class-name-casing */
      /* eslint-disable @typescript-eslint/camelcase */
      const up_parent = parent?.parentElement?.parentElement;
      /* eslint-disable @typescript-eslint/class-name-casing */
      /* eslint-disable @typescript-eslint/camelcase */
      const last_parent = up_parent?.parentElement;
      if (parent?.classList.contains('pcoded-hasmenu')) {
        if (this.nextConfig['layout'] === 'vertical') {
          parent.classList.add('pcoded-trigger');
        }
        parent.classList.add('active');
      } else if (up_parent?.classList.contains('pcoded-hasmenu')) {
        if (this.nextConfig['layout'] === 'vertical') {
          up_parent.classList.add('pcoded-trigger');
        }
        up_parent.classList.add('active');
      } else if (last_parent?.classList.contains('pcoded-hasmenu')) {
        if (this.nextConfig['layout'] === 'vertical') {
          last_parent.classList.add('pcoded-trigger');
        }
        last_parent.classList.add('active');
      }
    }
  }
}
