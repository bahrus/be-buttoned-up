# be-buttoned-up

```html
<button popovertarget=menu be-buttoned-up>&#9776;</button>

<menu id=menu>
    <button name=doSomething>Do something</button>
</menu>
```

What this does:

1.  Listens for click events on buttons inside menu when it is opened.
2.  Sets the "value" property of the anchoring button element to the name of the button in the popup ("doSomething").
3.  The anchoring button emits event "change".