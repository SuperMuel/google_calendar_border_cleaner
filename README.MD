![Before and After](images/before_after.jpeg)

### Introduction

On Google Calendar (Web), when you have multiple calendars enabled, and some events are colored differently from their default, a colored border appears on the left side of those events. This border matches the color of the calendar the event belongs to.

![Example of borders](images/border_example.png)

But let's face it, those borders aren’t pretty. That's why I created this Chrome extension to automatically remove them for a cleaner look.

### How does it work ?

The HTML code of the borders looks like this :

```html
<div
  aria-hidden="true"
  class="jSrjCf"
  style="background-color: rgb(11, 128, 67);"
></div>
```

This extension finds them and remove them automatically.
