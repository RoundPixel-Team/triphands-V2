import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FlightResultService } from 'rp-travel-ui';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss']
})
export class FlightResultComponent implements OnInit {
  FlightResult= inject(FlightResultService)
  route = inject(ActivatedRoute)
  router = inject(Router)
  searchId!:string
  constructor() { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        console.log("lang", params['language'], params['directOnly'])
        let lang = params['language']
        let currency = params['currency'];
        let pointOfReservation = params['SearchPoint'];
        let flightType = params['flightType'];
        let flightsInfo = params['flightInfo'];

        let serachId = params['searchId'];
        let passengers = params['passengers'];
        let Cclass = params['Cclass'];
        let showDirect: boolean;

        if (params['directOnly'] == 'false') {
          showDirect = false;
        }
        else {
          showDirect = true;
        }
        this.searchId=params['searchId']
        this.FlightResult.getDataFromUrl(lang, currency, pointOfReservation, flightType, flightsInfo, serachId, passengers, Cclass, showDirect)
      });
  }
  

}
