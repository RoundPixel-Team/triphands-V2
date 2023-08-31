import { Injectable } from '@angular/core';
import { airPorts } from 'rp-travel-ui';
import airporten from "src/assets/airports/airporten.json";


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  cities: airPorts[] = airporten;
  constructor() { 
  }
}
