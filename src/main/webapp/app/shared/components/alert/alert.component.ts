import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input()
  type!: string;
  @Input()
  dismiss!: string;
  constructor() {}
  public dismissAlert(element: any): void {
    element.parentElement.removeChild(element);
  }

  ngOnInit(): void {}
}
