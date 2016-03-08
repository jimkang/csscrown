csscrown
======

👑

csscrown lets you apply a CSS class to one selected element and one element only. When you use it to select a different element, it will "unselect" the previous element by removing the css class.

Usage
-----

    var Crown = require('csscrown');
    var crown = Crown({
      crownClass: 'the-ruler-of-all-dom-elements'
    });

    d3.selectAll('.map-node').on('click', function selectNode(d) {
      crown(this); // `this` is a DOM element.
    });

In this example, when an element is clicked, csscrown will add the `the-ruler-of-all-dom-elements` class to the element and remove the `the-ruler-of-all-dom-elements` class from the previously selected element. The `the-ruler-of-all-dom-elements` class can be defined in CSS to distinguish it from the rest of the elements.

    .the-ruler-of-all-dom-elements {
      background-color: yellow;
    }

Installation
------------

    npm install csscrown

License
-------

The MIT License (MIT)

Copyright (c) 2016 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
