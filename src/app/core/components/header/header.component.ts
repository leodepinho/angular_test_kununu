import { Component, OnInit } from '@angular/core';
import {TranslationService} from "../../services/translation.service";
import {DataMemoryStorageService} from "../../services/data-memory-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * Current culture
   */
  public culture: string;
  /**
   * Current lenguages
   */
  public lenguages: string[];

  constructor(
    public translation: TranslationService,
    public dataStorage: DataMemoryStorageService
    ) { }

  /**
   * Init the values of culture and lenguages
   */
  ngOnInit() {
    this.translation.currentCulture.subscribe(culture => {
      this.culture = culture;
    });
    this.translation.currentLenguages.subscribe(lenguages => {
      this.lenguages = lenguages;
    });
  }

  /**
   * Save lenguage selected in storage
   * @param {string} lenguage
   */
  setLenguage(lenguage: string) {
    let data = JSON.parse(this.dataStorage.getValue('currentLenguages'));
    let currentLenguages = {}
    if (data) {
      //save lenguage in local storage
      console.log(data);
      if (data[this.culture]) {
        for (let key in data) {
          if (key !== this.culture) {
            currentLenguages[key] = data[key];
          }
        }
        currentLenguages[this.culture] = this.translation.getLocale(this.culture, lenguage);
      } else {
        for (let key in data) {
          currentLenguages[key] = data[key];
        }
        currentLenguages[this.culture] = this.translation.getLocale(this.culture, lenguage);
      }
    } else {
      currentLenguages[this.culture] = this.translation.getLocale(this.culture, lenguage);
    }
    this.dataStorage.saveData('currentLenguages', JSON.stringify(currentLenguages));
    // Refresh current route to recompile application
    window.location.reload();
  }
}
