import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css'],
})
export class PageViewComponent implements OnInit {
  constructor() {}

  @Input() pageViewTitle: string = '';
  @Input() pageViewSubTitle: string = '';
  @Output() test = new EventEmitter<string>();

  ngOnInit(): void {}

  onClickTest() {
    this.test.emit('Hola desde page view' + ' posta');
  }
}
