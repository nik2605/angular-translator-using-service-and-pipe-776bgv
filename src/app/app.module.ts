import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgFerhadoTranslatorModule } from '../ng-ferhado-translator/index';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgFerhadoTranslatorModule.forRoot({
      defaultLang: 'de',
      storagePrefix: 'ferhado-language'
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
