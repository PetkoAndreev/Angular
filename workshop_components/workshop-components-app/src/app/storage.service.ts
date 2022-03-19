import { PLATFORM_ID, Provider } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

interface IStorage {
  setItem<T>(key: string, item: T): T;
  getItem<T>(key: string): T | null;
}

export class StorageService implements IStorage {
  setItem<T>(key: string, item: T): T { return item; }
  getItem<T>(key: string): T | null { return null; }
}

export function storageFactory(platformId: string): any {
  if (isPlatformBrowser(platformId)) {
    return new BrowserStorage();
  }
  if (isPlatformServer(platformId)) {
    return new ServerStorage();
  }
  throw new Error('No implementation for this platform: ' + platformId);
}

export const storageServiceProvider: Provider = {
  provide: StorageService,
  useFactory: storageFactory,
  deps: [PLATFORM_ID]
};

// Class of generic type "T" ("T" can be number, string, object).
// class LocalStorage<T> {
//   data: { [key: string]: T } = {};

//   getItem(key: string): T {
//       return this.data[key];
//   }

//   setItem(key: string, value: T) {
//       this.data[key] = value;
//   }
// }

// @Injectable()
export class BrowserStorage {
  localStorage = localStorage;

  setItem<T>(key: string, item: T): T {
    const str = typeof item === 'string' ? item : JSON.stringify(item);
    this.localStorage.setItem(key, str);
    return item;
  }

  getItem<T>(key: string): T | null {
    let item;
    const tmp = this.localStorage.getItem(key);
    if (!tmp) { return null; }
    try {
      item = JSON.parse(tmp);
    }
    catch {
      item = tmp;
    }

    return item;
  }
}

// @Injectable()
export class ServerStorage {
  localStorage = {
    data: {} as any,
    setItem<T>(key: string, item: T): void {
      this.data[key] = item;
    },
    getItem<T>(key: string): void {
      return this.data[key];
    }
  };

  setItem<T>(key: string, item: T): T {
    this.localStorage.setItem(key, JSON.stringify(item));
    return item;
  }

  getItem<T>(key: string): T {
    let item;
    const tmp = this.localStorage.getItem(key) as any;
    try {
      item = JSON.parse(tmp);
    }
    catch {
      item = tmp;
    }

    return item;
  }
}