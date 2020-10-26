import { Injectable, Inject } from '@angular/core';
//REMOVE:   remove this from your code this is just for stackblitz.com
import * as en from './i18n/en.json'; //REMOVE
import * as de from './i18n/de.json'; //REMOVE
import * as ar from './i18n/ar.json'; //REMOVE

const langs = { ar: ar, en: en, de: de }; //REMOVE

declare const require;

@Injectable({
  providedIn: 'root'
})

export class NgFerhadoTranslator {
  private prefix = 'ferhado-lang';
  private rtlLangs = ["ar", "fa", "ur"];
  private languagesObject;

  private html = document.getElementsByTagName('html')[0];
  public lang;
  public dir;

  constructor(@Inject('config') private config) {
    if (this.config.storagePrefix) this.prefix = `${this.config.storagePrefix}-lang`;
    this.lang = localStorage.getItem(this.prefix) || this.config.defaultLang || 'en';
    this.setLanguage(this.lang);
  }

  setLanguage(value) {
    this.lang = value;
    localStorage.setItem(this.prefix, value);

    this.languagesObject = langs[value];//REMOVE
    //this.languagesObject = require(`./i18n/${value}.json`); //Active this line

    this.dir = this.rtlLangs.indexOf(value) !== -1 ? 'rtl' : 'ltr';
    this.html.setAttribute('dir', this.dir);
    this.html.setAttribute('lang', this.lang);
  }

  get(key) {
    try { return this.languagesObject[key]; } catch (error) { }
  }
}