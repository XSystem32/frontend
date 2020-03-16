import {Component, Input, OnInit} from '@angular/core';

/**
 * Bruges til generel funktionalitet til alle View-komponenter
 */
@Component({
  selector: 'view',
  templateUrl: 'view.component.html',
  styleUrls: ['view.scss']

})
export class ViewComponent implements OnInit  {

  @Input()
  options: ViewOptions;
  constructor() {
  }

  ngOnInit() {
    if (this.options != null) {
      if (!this.options.loading) this.options.loading = false;
    }
  }
}

export interface ViewOptions {
  id: string;
  title: string;
  loading?: boolean;
}
