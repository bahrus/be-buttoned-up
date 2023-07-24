# be-buttoned-up

```html
<button popovertarget=menu be-buttoned-up>&#9776;</button>

<menu id=menu>
    <button value=doSomething>Do something</button>
</menu>
```

What this does:

1.  Listens for click events on buttons inside menu when it is opened.
2.  Sets the "value" property of the anchoring button element to the value of the button in the popup ("doSomething").
3.  Closes the popup when such a button is clicked.
3.  The anchoring button emits event "change" whenever a value is selected/changed.

Reference:  https://developer.chrome.com/blog/introducing-popover-api/

## Running locally

1.  Do a git clone or a git fork of repository https://github.com/bahrus/be-committed
2.  Install node.js
3.  Run "npm install" from location of folder created in step 1.
4.  Run npm run serve.  Open browser to http://localhost:3030/demo/

## Using from ESM Module:

```JavaScript
import 'be-committed/be-buttoned-up.js';
```

## Using from CDN:

```html
<script type=module crossorigin=anonymous>
    import 'https://esm.run/be-buttoned-up';
</script>
```