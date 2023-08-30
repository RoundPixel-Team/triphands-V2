import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public translate = inject(TranslateService)
  constructor() { }

  ngOnInit(): void {
  }

}
