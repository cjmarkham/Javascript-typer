Javascript Typer
================

Example
==
Check out the example on [JSFiddle](http://jsfiddle.net/7tNBU/)

Prints out a string character by character to represent typing.

Usage
===
```
document.getElementById('#someElement').typeOut('Hello world', 100);
```

```
<div id="someElement">
  Hello World
</div>
document.getElementById('#someElement').typeOut(300);
```

Options
===
- String - The string to type out. If none is given, the current text content of the element will be used. (Optional)
- Speed - The speed at which to type (Optional)
