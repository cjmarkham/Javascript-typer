Javascript Typer
================

Prints out a string character by character to represent typing.

Usage
===
```
'Hello world'.typeOut('#someElement');
```

```
var str = 'This is a longer string';
str.typeOut('#anotherElement', 50);
```

```
$.get('text.txt', function (text) {
  text.typeOut('#someElement');
});
```

Options
===
- ElementId - The ID of the element the content should be written to. (Required)
- Speed - The speed at which to type (Optional)
