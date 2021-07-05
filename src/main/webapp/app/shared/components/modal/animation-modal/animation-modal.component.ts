import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'jhi-app-animation-modal',
  templateUrl: './animation-modal.component.html',
  styleUrls: ['./animation-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnimationModalComponent implements OnInit {
  @Input()
  modalClass!: string;
  @Input()
  contentClass!: string;
  @Input()
  modalID!: string;
  @Input() backDrop = false;
  constructor() {}
  public close(event: any): void {
    document.querySelector('#' + event)?.classList.remove('md-show');
  }

  ngOnInit(): void {}
}
