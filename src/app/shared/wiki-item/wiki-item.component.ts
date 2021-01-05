import { Component, Input, OnInit } from '@angular/core';
import { Calculation } from 'src/app/models/Calculation';

@Component({
  selector: 'app-wiki-item',
  templateUrl: './wiki-item.component.html',
  styleUrls: ['./wiki-item.component.scss']
})
export class WikiItemComponent implements OnInit {
  @Input() type: Calculation | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
