import { Component, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/pluck';

import {PixalsearchService} from '../pixalsearch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('f') form;

  public Searching;
  public photos;
  public toggle: boolean = false;

  constructor(public pixal: PixalsearchService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    const term = (form.value.searchInput);
    if (term.trim() === '') {
      return;
    }
    this.form.reset();
    this.toggle = !this.toggle;
    this.pixal.photosSearch(term)
      .do(data => {
        this.Searching = true;
        this.pixal.isSearching.next(true);
      })
      .pluck('hits')
      .delay(1000)
      .subscribe(data => {
        this.Searching = false;
        this.pixal.isSearching.next(false);
        this.photos = data;
      });
  }

}
