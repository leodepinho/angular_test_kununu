import { Injectable } from '@angular/core';
import {IStorage} from "../../shared/interfaces/storage.interface";

@Injectable()
export class DataMemoryStorageService implements IStorage {

  constructor() { }

  /**
   * Save a single pair value to the memory storage.
   * @param key - key value name.
   * @param value - current key value.
   */
  public saveData(key: string, value: string): void {
    localStorage.setItem(key,value)
  }

  /**
   * Get a single data value from memory.
   * @param key - key value.
   */
  public getValue(key: string): string{
    return localStorage.getItem(key);
  }

  /**
   * Get the data values from memory based of the array of keys received.
   * The order of each key it's important to set a sequential assignment.
   * @param keys - Array of key values.
   */
  public getDataValues(keys: string[]): Promise<any>{
    let promise = new Promise<any>((resolve) => {
      let values = [];
      for(let index: number = 0; index < keys.length; index++){
        values.push(localStorage.getItem(keys[index]));
      }
      resolve(values);
    });
    return promise;
  }

  /**
   * Remove a single data value from memory.
   * @param key - key value.
   */
  public removeValue(key: string): void{
    localStorage.removeItem(key);
  }

}
