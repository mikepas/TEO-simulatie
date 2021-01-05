import { Component, OnInit } from '@angular/core';
import { Types } from '../../models/Types';

@Component({
  selector: 'app-flowing-water-wiki',
  templateUrl: './flowing-water-wiki.component.html',
  styleUrls: ['./flowing-water-wiki.component.scss']
})
export class FlowingWaterWikiComponent implements OnInit {
  types: Types;

  constructor() {
    this.types = new Types();
  }

  ngOnInit(): void {
  }

}
