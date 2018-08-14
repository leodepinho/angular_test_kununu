import {Injectable, LOCALE_ID, TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
import {DataMemoryStorageService} from "./data-memory-storage.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Cultures} from "../../util/Cultures";

@Injectable()
export class TranslationService {
  /**
   * Lenguage Source
   * @type {BehaviorSubject<string[]>}
   */
  private lenguagesSource = new BehaviorSubject<string[]>(this.setLenguages());
  /**
   * Culture Source
   * @type {BehaviorSubject<string>}
   */
  private cultureSource = new BehaviorSubject<string>(this.setCulture());
  /**
   * Curent value of the lenguages by culture
   * @type {Observable<string[]>}
   */
  public currentLenguages = this.lenguagesSource.asObservable();
  /**
   * Current value of the culture
   * @type {Observable<string>}
   */
  public currentCulture = this.cultureSource.asObservable();


  constructor(public dataStorage: DataMemoryStorageService) {}

  /**
   * Set the lenguage (locale) depending on the current culture
   * @returns {Promise<Object[]>} - Translation providers
   */
  public getTranslationProviders(): Promise<Object[]> {

    let culture = window.location.pathname.split('/')[1];
    let locale = this.getLenguageByCulture(culture);

    const noProviders: Object[] = [];
    if (!locale || locale === 'en-US'){
      return Promise.resolve(noProviders);
    }

    const translationFile =  `../assets/locale/messages.${locale}.xlf`;
    return this.getFile(translationFile)
      .then((translations: string) => [
        {provide: TRANSLATIONS, useValue: translations},
        {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
        {provide: LOCALE_ID, useValue: locale}
      ])
      .catch(() => noProviders);
  }
  /**
   * Get translation file from the server
   * @param {string} filePath
   * @returns {Promise<string>}
   */
  public getFile(filePath: string): Promise<string> {
    const promise = new Promise<string>((resolve,reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET',filePath,true);
      xhr.setRequestHeader('Content-Type','application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200){
          resolve(xhr.responseText);
        } else {
          if (xhr.readyState === 4){
            resolve();
          }
        }
      };
      xhr.send();
    });
    return promise;
  }

  /**
   * Get lenguage by culture, check for the previous lenguage
   * selection (if this exist), if not the first key in the cultures constant
   * is the default lenguage for each culture
   * @param {string} culture
   * @returns {string}
   */
  getLenguageByCulture(culture: string): string {
    let data = JSON.parse(this.dataStorage.getValue('currentLenguages'));
    if (data) {
      if (data[culture]){
        return data[culture];
      } else {
        if (Cultures.KUNUNU_TEST_CULTURES[culture]) {
          return Object.values(Cultures.KUNUNU_TEST_CULTURES[culture])[0];
        } else {
          // If the culture doesn't exist, redirect to the default one
          window.location.href = 'us/welcome';
          return null;
        }
      }
    } else {
      if (Cultures.KUNUNU_TEST_CULTURES[culture]) {
        return Object.values(Cultures.KUNUNU_TEST_CULTURES[culture])[0];
      } else {
        window.location.href = 'us/welcome';
        return null;
      }
    }
  }

  /**
   * Init lenguages array for the given culture
   * @returns {string[]}
   */
  setLenguages(): string[] {
    let culture = window.location.pathname.split('/')[1];
    if (Cultures.KUNUNU_TEST_CULTURES[culture]) {
      return Object.keys(Cultures.KUNUNU_TEST_CULTURES[culture]);
    } else {
      return Object.keys(Cultures.KUNUNU_TEST_CULTURES['us']);
    }
  }

  /**
   * Init the given culture value
   * @returns {string}
   */
  setCulture(): string {
    let culture = window.location.pathname.split('/')[1];
    if (Cultures.KUNUNU_TEST_CULTURES[culture]) {
      return culture;
    } else {
      return 'us';
    }
  }

  /**
   * Get locale by culture and lenguage
   * @param {string} - culture
   * @param {string} - lenguage
   * @returns {string} - locale
   */
  getLocale(culture: string, lenguage: string): string {
    return Cultures.KUNUNU_TEST_CULTURES[culture][lenguage];
  }

  /**
   * Update observable lenguage
   * @param {string[]} lenguages
   */
  changeLenguages(lenguages: string[]){
    this.lenguagesSource.next(lenguages);
  }

  /**
   *  Update observable culture
   * @param {string} culture
   */
  changeCulture(culture: string){
    this.cultureSource.next(culture);
  }

}
