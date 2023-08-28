import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FlightResultService, airItineraries } from 'rp-travel-ui';

@Component({
  selector: 'app-oneway-result',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.scss']
})
export class OnewayComponent implements OnInit {
@Input() item :airItineraries[]=[]
FlightResult= inject(FlightResultService)
  route = inject(ActivatedRoute)
  public translate = inject(TranslateService)

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

        this.FlightResult.getDataFromUrl(lang, currency, pointOfReservation, flightType, flightsInfo, serachId, passengers, Cclass, showDirect)
      });
  }

}
