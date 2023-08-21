import { Injectable } from '@angular/core';
import { airPorts } from 'rp-travel-ui';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  cities?: airPorts[];
  constructor() { 
  }
}
