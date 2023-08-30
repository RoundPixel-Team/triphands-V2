import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  goToAboutUs(){
    this.router.navigate(['/aboutUs'])
  }

  goToContactUs(){
    this.router.navigate(['/contactUs'])
  }

  goToHome(){
    this.router.navigate(['/'])
  }


  goToPrivacy(){
    this.router.navigate(['/privacyPolicy'])
  }


  goToTermsOfUse(){
    this.router.navigate(['/termsOfUse'])
  }
}
