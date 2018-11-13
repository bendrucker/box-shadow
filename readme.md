# box-shadow [![Build Status](https://travis-ci.org/bendrucker/box-shadow.svg?branch=master)](https://travis-ci.org/bendrucker/box-shadow) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/box-shadow.svg)](https://greenkeeper.io/)

> Create a CSS box shadow using JS objects


## Install

```
$ npm install --save box-shadow
```


## Usage

```js
var boxShadow = require('box-shadow')

boxShadow({
  x: 0,
  y: 2,
  blur: 3,
  spread: 4,
  color: [204, 54, 51]  
})
//=> 0px 2px 3px 4px rgba(204,54,51,1)
```

## API

#### `boxShadow(data)` -> `string`

##### data

*Required*  
Type: `object` / `array[object]`

An object containing CSS properties for the box shadow:

* x
* y
* blur
* spread

These can be strings (`1em`) or numbers to be converted to pixels (`2` -> `2px`).

Additionally, `data` requires a `color` property to be passed to [color-style](https://github.com/mattdesl/color-style). This can be a simple string (`red`) or an array of RGBA values (`[204, 54, 51, 0.5]`).

`data` can also be an array of box shadow objects that will be stringified and joined.


## License

MIT © [Ben Drucker](http://bendrucker.me)
