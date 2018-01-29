import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.css']
})
export class PhotolistComponent implements OnInit {
  @Input() Photos;
  @Input() searching;

  constructor() { }

  ngOnInit() {
  }

}
