# jquery-overlap

A jQuery plugin for detection of overlaps and selections by superposition.

## How to use

```JavaScript
$(selector).overlap({
    rect: {x:0, y:0, w:0, h:0}, // Area to select the elements.
    mark: ".class", // Class to add at elements overlapped.
    unmark: true, // Unmark if not overlapped (in new executions)
    filterMark: function(index) {return true}, // Filter elements to mark ($.filter)
    filterUnmark: function(index) {return true}, // Filter element to unmark ($.filter)
    callback: function($elements) {}, // Function to execute at end.
    w: function(element) {return element.outerWidth(true)}, // Function for get the width of the elements.
    h: function(element) {return element.outerHeight(true)}, // Function for get the height of the elements.
    bring: true // get the elements selected.
});
```

### Example

```Javascript
var divs_in_the_area = $("div").overlap({
    rect: {x: 120, y: 100, w: 500, h: 300}
});
```

## License

jquery-overlap is licensed under the MIT License (LICENSE).

Copyright (c) 2015 [Leandro Brunner](mailto:leandrobrunner@yahoo.com.ar)
