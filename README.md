# delit

Removes empty objects, arrays, empty strings, null, false, NaN, 0 and undefined values from nested objects. it is possible to select what you do not want to remove

- No dependencies
- Powerful
- Simple
- Lightweight

## Status

![npm](https://img.shields.io/npm/v/delit)

## Installation

Install the package via `npm`:

```
$ npm i delit
```

## Usage

delit(object [, exclude(as string)]);

### Arguments

1. `object` _(Object)_: The source object.
2. `[, exclude]` _(String)_: An optional strings with the following options:

| Options     | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| none        | Clean all fields\*, (ie: {}, [], false, undefined, "", null, NaN, 0)  |
| "false"     | Clean all fields\*, except false values.                              |
| "0"         | Clean all fields\*, except 0 values.                                  |
| "null"      | Clean all fields\*, except null values.                               |
| "undefined" | Clean all fields\*, except undefined values (is converted to string). |
| ""          | Clean all fields\*, except '' (empty strings).                        |
| "null"      | Clean all fields\*, except 'null'.                                    |
| "NaN"       | Clean all fields\*, except 'NaN' (is converted to string).            |
| "[]"        | Clean all fields\*, except [] (empty arrays).                         |
| "{}"        | Clean all fields\*, except {} (empty objects).                        |

(\*) all fields: {}, [], false, undefined, "", null, NaN, 0

_(Object)_: Returns the cleansed object.

### Example

```javascript
const delit = require('delit');

delit(object, "false", "0", "[]", "null") // Clean all fields*, except false, 0, [], and null values:

const object =  {
    a: 4,
    b: "hello",
    c: [], <------------------------- NOT REMOVED
    d: false,  <--------------------- NOT REMOVED
    e: {
      f: 0, <------------------------ NOT REMOVED
      g: "yeah",
      h: {}, <---------------------------------- remove
      i: "", <---------------------------------- remove
      j: {
        k: undefined, <------------------------- remove
        l: 5,
        m: null, <------------------- NOT REMOVED
        n: {
          o: undefined, <----------------------- remove
          p: "12",
          q: NaN, <----------------------------- remove
          r: true,
          s: {
            t: false, <-------------- NOT REMOVED
            u: "string",
            v: [],  <---------------- NOT REMOVED
            w: [{}], <-------------------------- remove {}, only maintain external []
            x: [
              {},  <---------------------------- remove
              { y: 15 },
              { z: undefined, aa: true }, <----- remove only z
              [
                { ab: 5 },
                {
                  ac: false, <-------- NOT REMOVED
                  ad: null,  <-------- NOT REMOVED
                  ae: "done...",
                  af: [{ ag: "" }], <------------ remove {}, only maintain external []
                  ah: [],  <---------- NOT REMOVED
                  ai: 0  <------------ NOT REMOVED
                }
              ],
              NaN <------------------------------ remove
            ]
          }
        }
      }
    }
  };

```

## Release

```sh
npm version [<newversion> | major | minor | patch] -m "Release %s"
```

## License

MIT License

Copyright (c) 2020 Ismael Soschinski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
