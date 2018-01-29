import { Component, OnInit } from '@angular/core';
import {PixalsearchService} from '../pixalsearch.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isSearching: boolean;

  constructor(private pixal: PixalsearchService) { }

  ngOnInit() {
    this.pixal.isSearching.subscribe(searching => {
      this.isSearching = searching;
    });
  }

}
