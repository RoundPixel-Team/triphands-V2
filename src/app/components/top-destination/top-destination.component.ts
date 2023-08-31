import { Component, OnInit } from '@angular/core';
import { topDestinationCard } from './interface';
import { TranslateService } from '@ngx-translate/core';
import { inject } from '@angular/core';

@Component({
  selector: 'app-top-destination',
  templateUrl: './top-destination.component.html',
  styleUrls: ['./top-destination.component.scss']
})
export class TopDestinationComponent implements OnInit {
  translate = inject(TranslateService);
  cards:Array<topDestinationCard>=[];
  constructor() { }

  ngOnInit(): void {

    this.cards=[
      {
        imageUrl:'../../../assets/images/Dubai.png',
        title: "Dubai",
        footer:'Price Per Person is KWD121',
        footerAr:'السعر للشخص الواحد 121 دينار كويتي',
        body:'Stay at this 5-star luxury resort in Hurghada. Enjoy free WiFi, free parking, and 3 restaurants. Popular attractions Desert Rose Aqua Park and Senzo Mall are located nearby. Discover genuine guest reviews for Pharaoh Azur Resort, in Village Road neighborhood, along with the latest prices and availability – book now.',
        bodyAr:'استمتع بالإقامة في هذا المنتجع الفاخر ذو الـ 5 نجوم بمدينة الغردقة. استمتع بخدمة الواي فاي المجانية ومواقف مجانية للسيارات و3 مطاعم. تقع مناطق الجذب الشهيرة في Desert Rose Aqua Park وSenzo Mall في مكان قريب. اكتشف تقييمات الضيوف الحقيقية لـ'
      },
      {
        imageUrl:'../../../assets/images/Rome.png',
        title: "Rome",
        footer:'Price Per Person is KWD121',
        footerAr:'السعر للشخص الواحد 121 دينار كويتي',
        body:'Stay at this 5-star luxury resort in Hurghada. Enjoy free WiFi, free parking, and 3 restaurants. Popular attractions Desert Rose Aqua Park and Senzo Mall are located nearby. Discover genuine guest reviews for Pharaoh Azur Resort, in Village Road neighborhood, along with the latest prices and availability – book now.',
        bodyAr:'استمتع بالإقامة في هذا المنتجع الفاخر ذو الـ 5 نجوم بمدينة الغردقة. استمتع بخدمة الواي فاي المجانية ومواقف مجانية للسيارات و3 مطاعم. تقع مناطق الجذب الشهيرة في Desert Rose Aqua Park وSenzo Mall في مكان قريب. اكتشف تقييمات الضيوف الحقيقية لـ'
      },
      {
        imageUrl:'../../../assets/images/paris.png',
        title: "Paris",
        footer:'Price Per Person is KWD121',
        footerAr:'السعر للشخص الواحد 121 دينار كويتي',
        body:'Stay at this 5-star luxury resort in Hurghada. Enjoy free WiFi, free parking, and 3 restaurants. Popular attractions Desert Rose Aqua Park and Senzo Mall are located nearby. Discover genuine guest reviews for Pharaoh Azur Resort, in Village Road neighborhood, along with the latest prices and availability – book now.',
        bodyAr:'استمتع بالإقامة في هذا المنتجع الفاخر ذو الـ 5 نجوم بمدينة الغردقة. استمتع بخدمة الواي فاي المجانية ومواقف مجانية للسيارات و3 مطاعم. تقع مناطق الجذب الشهيرة في Desert Rose Aqua Park وSenzo Mall في مكان قريب. اكتشف تقييمات الضيوف الحقيقية لـ'
      },
      {
        imageUrl:'../../../assets/images/paris.png',
        title: "Paris",
        footer:'Price Per Person is KWD121',
        footerAr:'السعر للشخص الواحد 121 دينار كويتي',
        body:'Stay at this 5-star luxury resort in Hurghada. Enjoy free WiFi, free parking, and 3 restaurants. Popular attractions Desert Rose Aqua Park and Senzo Mall are located nearby. Discover genuine guest reviews for Pharaoh Azur Resort, in Village Road neighborhood, along with the latest prices and availability – book now.',
        bodyAr:'استمتع بالإقامة في هذا المنتجع الفاخر ذو الـ 5 نجوم بمدينة الغردقة. استمتع بخدمة الواي فاي المجانية ومواقف مجانية للسيارات و3 مطاعم. تقع مناطق الجذب الشهيرة في Desert Rose Aqua Park وSenzo Mall في مكان قريب. اكتشف تقييمات الضيوف الحقيقية لـ'
      },
    ]
  }

}
