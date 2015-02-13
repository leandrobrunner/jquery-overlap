# jquery-overlap

A jQuery plugin for detection of overlaps and selections by superposition.

## How to use

```JavaScript
$(selector).overlap({
    rect: {x:0, y:0, w:0, h:0}, // Area to select the elements.
    element: false, // Element of where get automatically "rect". ($("selector") or "selector").
    mark: ".class", // Class to add at elements overlapped.
    unmark: true, // Unmark if not overlapped (in new executions)
    filterMark: function(index) {return true}, // Filter elements to mark ($.filter)
    filterUnmark: function(index) {return true}, // Filter element to unmark ($.filter)
    callback: function($elements) {}, // Function to execute at end.
    w: function($element) {return $element.outerWidth(true)}, // Function for get the width of the elements.
    h: function($element) {return $element.outerHeight(true)}, // Function for get the height of the elements.
    position: function($element) {return $element.position()}, // Function for get the position of the elements.
    bring: true // get the element selected.
});
```

### Examples

```Javascript
var divs_in_the_area = $("div").overlap({
    rect: {x: 120, y: 100, w: 500, h: 300}
});
```

```Javascript
var divs_superposing_other_div = $("div").overlap({
    element: $("div.other_div") // If are multiple elements is selected the first.
});
```

```Javascript
var divs_superposing_other_div = $("div").overlap({
    element: $("div.other_div"), // If are multiple elements is selected the first.
    position: function($element) {return $element.offset()} // Get the position with "$.offset".
});
```

## License

jquery-overlap is licensed under the MIT License (LICENSE).

Copyright (c) 2015 [Leandro Brunner](mailto:leandrobrunner@yahoo.com.ar)
