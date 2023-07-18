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