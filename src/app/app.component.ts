import { Component } from '@angular/core';
import { NgFerhadoTranslator } from '../ng-ferhado-translator/index';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public translator: NgFerhadoTranslator) { }
}
