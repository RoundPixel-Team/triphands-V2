import { Component, ElementRef, OnInit } from '@angular/core';
import { destinationCard, topDestinationCard } from './interface';
import { TranslateService } from '@ngx-translate/core';
import { inject } from '@angular/core';
import { EnvironmentService } from 'rp-travel-ui';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-top-destination',
  templateUrl: './top-destination.component.html',
  styleUrls: ['./top-destination.component.scss']
})
export class TopDestinationComponent implements OnInit {
  translate = inject(TranslateService);
  sharedService = inject(SharedService)
  cards:Array<destinationCard>=[];
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }

  ngOnInit(): void {
    this.sharedService.getTopDestination().subscribe((res:any)=>{
      this.cards = res;
    })
    
  }

}
