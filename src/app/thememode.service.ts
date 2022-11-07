import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThememodeService {

  private _thememode: boolean = false

  constructor() {
    if(localStorage.getItem("thememode") === null) {
      if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("thememode", "true")
      }
      else {
        localStorage.setItem("thememode", "false")
      }
    }

    this.thememode = (localStorage.getItem("thememode") == "true")
  }

  switchThemeMode() {
    this._thememode = !this._thememode
    localStorage.setItem("thememode", this._thememode.toString())
  }

  get thememode(): boolean {
    return this._thememode
  }

  set thememode(value: boolean) {
    this._thememode = value
  }
}
