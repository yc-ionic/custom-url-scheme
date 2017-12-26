[![Build Status](https://travis-ci.org/yc-ionic/custom-url-scheme.svg?branch=master)](https://travis-ci.org/yc-ionic/custom-url-scheme.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/yc-ionic/custom-url-scheme/badge.svg?branch=master)](https://coveralls.io/github/yc-ionic/custom-url-scheme?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# @yci/custom-url-scheme

## Installation

1. Install the Ionic plugin
```
 npm i -S @yci/custom-url-scheme
```

2. Install the cordova plugin written by EddyVerbruggen
> [https://github.com/EddyVerbruggen/Custom-URL-scheme](https://github.com/EddyVerbruggen/Custom-URL-scheme)

3. Add it to your app’s NgModule.

```typescript
// Import your library
import { CustomUrlSchemeModule } from '@yci/custom-url-scheme';

@NgModule({

  ...

  imports: [

    ...

    // Specify your library as an import
    CustomUrlSchemeModule.forRoot()
  ],
  
  ...

})
export class AppModule { }
```

## Usage
Once your library is imported, you can use its service in your Angular application:

```ts
import { CustomUrlScheme } from '@yci/custom-url-scheme';

// ...

constructor(public cus: CustomUrlScheme) {
  cus.add('myScheme')
    .subscribe(x => {
      console.log(x);
    });
}

// ...
```

## Methods
```ts
public add(urlScheme: string): Subject<IUrlScheme>;
```

## Interfaces
```ts
interface IUrlScheme {
  scheme: string;
  path: string;
  query: {
    [x: string]: string;
  };
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

## License

MIT © [Yu Chen](mailto:yu.chen@live.ie)

