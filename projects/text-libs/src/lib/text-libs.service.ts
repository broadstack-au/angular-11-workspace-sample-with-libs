import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextLibsService {

  constructor() { }

  kebabCase(str: string): string {
    const res = str  .replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase()
    console.log(res);
    return res
  }

  camelCase(str: string): string {
    const res = str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
    console.log(res)
    return res
  }

  snakeCase(str: string): string {
    let matches = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    if (!matches) {
      return '';
    }

    const res = matches.map(x => x.toLowerCase()).join('_');
    console.log(res)
    return res;
  }
}
