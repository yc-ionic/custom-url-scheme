import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

declare const window: { handleOpenURL: (url: string) => void };

@Injectable()
export class CustomUrlScheme {
  private urlSchemes: Array<{
    urlScheme: string;
    subject: Subject<IUrlScheme>;
  }> = [];

  constructor() {
    window.handleOpenURL = (url: string) => {
      const [scheme, remain] = url.split('://');
      const [path, qs] = remain.split('?');
      const query = qs.split('&')
        .map(x => x.split('='))
        .reduce((a, b) => {
          a[b[0]] = decodeURIComponent(b[1]);
          return a;
        }, {});
      for (const urlScheme of this.urlSchemes) {
        if (url.startsWith(urlScheme.urlScheme)) {
          urlScheme.subject.next({
            scheme: scheme,
            path: path,
            query: query,
          });
        }
      }
    };
  }

  public add(urlScheme: string): Subject<IUrlScheme> {
    const scheme = {
      urlScheme: urlScheme,
      subject: new Subject<IUrlScheme>()
    };
    this.urlSchemes.push(scheme);
    return scheme.subject;
  }
}

export interface IUrlScheme {
  scheme: string;
  path: string;
  query: {
    [x: string]: string;
  };
}