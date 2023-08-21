import { Component, Input, OnInit } from '@angular/core';
import { airItineraries } from 'rp-travel-ui';

@Component({
  selector: 'app-oneway-result',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.scss']
})
export class OnewayComponent implements OnInit {
@Input() item :airItineraries[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
