# be-buttoned-up (🧥)

[![Playwright Tests](https://github.com/bahrus/be-buttoned-up/actions/workflows/CI.yml/badge.svg?branch=baseline)](https://github.com/bahrus/be-buttoned-up/actions/workflows/CI.yml)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-buttoned-up?style=for-the-badge)](https://bundlephobia.com/result?p=be-buttoned-up)
<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-buttoned-up?compression=gzip">
<a href="https://nodei.co/npm/be-buttoned-up/"><img src="https://nodei.co/npm/be-buttoned-up.png"></a>

Allow a button to delegate to a sub menu of command buttons to select from.

```html
<button popovertarget=menu be-buttoned-up>&#9776;</button>

<menu id=menu>
    <button value=doSomething>Do something</button>
</menu>
```

What this does:

1.  Listens for click events on buttons inside menu when it is opened.
2.  Sets the "value" property of the anchoring button element to the value of the clicked button in the popup ("doSomething").
3.  Closes the popup when such a button is clicked.
3.  The anchoring button emits event "change" whenever a value is selected/changed.

Reference:  https://developer.chrome.com/blog/introducing-popover-api/

## Viewing Demos Locally

1. Install git
2. Fork/clone this repo
3. Install node.js
4. Open command window to the folder where you cloned this repo
5. `git submodule add https://github.com/bahrus/types.git types`
6. `git submodule update --init --recursive`
7. `npm install`
8. `npm run build`
9. `npm run serve`
10. Open http://localhost:8000/demo/ in a Chromium-based browser


## Using from ESM Module:

```JavaScript
import 'be-buttoned-up/be-buttoned-up.js';
```

## Using from CDN:

```html
<script type=module crossorigin=anonymous>
    import 'https://esm.run/be-buttoned-up';
</script>
```
