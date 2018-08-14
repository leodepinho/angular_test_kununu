export interface IStorage {
  saveData(key: string, value: string);
  getValue(key: string): string;
  getDataValues(keys: string[]): Promise<any>;
  removeValue(key: string): void;
}
