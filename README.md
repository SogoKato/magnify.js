# Magnify.js

Magnify.js is a simple vanilla JS library to magnify HTML elements on mouse hover event.

[Demo Page](http://sogokato.github.io/magnify.js/)

## Getting Started

### CDN

`<script src="https://cdn.jsdelivr.net/gh/SogoKato/magnify.js@main/magnify.min.js"></script>`

### Download Locally

Download `magnify.min.js` file from this repository and insert it to your HTML.

```html
<div class="magnify">
    I will be 1.5x big (the default).
</div>
<div class="magnify" data-magnify-scale="2">
    I will be 2x big.
</div>

<script src="https://cdn.jsdelivr.net/gh/SogoKato/magnify.js@main/magnify.min.js"></script>
<script>
    // Apply for each element with `magnify` class (default behavior).
    const magnify = new Magnify(".magnify");
</script>
```

## Features

### Scale

You can set magnification ratios by setting `data-magnify-scale` for each element's attribute or passing a global option when instanciating.

```js
const magnify = new magnify(".magnify", {
  scale: "3"  // will be 3x big
});
```

## Options

|Option Name|Type|Default|Description|
|---|---|---|---|
|scale|string|`1.5`|`transform: scale(X)` value.|
|className|string|`magnified`|A class name when applied scaling.|

## FAQ

### When is it useful?

Though you can mark up `transform: scale(X)` on `:hover` only with CSS, it is difficult to implement it when you use some JS library that changes `transform` property (e.g. [Rellax](https://dixonandmoe.com/rellax/)). Magnify.js carefully modifies `transform` property so that any values except `scale` are kept as is.
