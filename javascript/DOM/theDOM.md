#DOCUMENT OBJECT MODEL
#DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
Its a tree like representation of the contents of a webpage - a tree of nodes with different relationships depending on how they're arranged in the HTML document.

#Targeting Nodes with selectors
when working with the DOM, use selectors to target the nodes you want to work with.
You can use a combination of css style selectors and relationship properties to target the nodes you want to work with.

#EXAMPLE
```html
<div id="container">
    <div class="display"></div>
    <div class="controls"></div>
</div>
```

DISPLAY/CONTROLS is a child of the parent CONTAINER.
In the above example youcan use the following to target:
    div.display
    .display
    #container > .display
    div#container > div.display

you can also use  relational selectors with special properties owned by the nodes:
    firstElelementChild
    lastElementChild

#TARGETING EXAMPLE
###here we are identifying a certain node based on its relationships to the nodes around it.
```javascript
const container = document.querySelector('#container');
//selects the #container div node

console.dir(container.firstElementChild);
//selects the first child of the #container div node (#container => .display)

const controls = document.querySelector('.controls');
//selects the .controls div node

console.dir(controls.previousElementChild);
//selects the previous sibling of the .controls div node (.controls => .display)
```

#DOM METHODS
when your html code is parsed by a web browser, it is converted to the DOM. One major difference is that these nodes are now objects, that have many properties and methods attached to them.
we are going to use these properties and methods to manipulate our webpage with javascript.
we will start with query selectors that help us target nodes in the DOM.

#QUERY SELECTORS
-element.querySelcector(selector) returns a reference to the first match of selector
-element.querySelcectorAll(selectors) returns a static (not live) NodeList of all matches of the selectors
*the return value of selectorall looks like an array, behaves like an array but  its really a nodelist*
_when problem arise, one solution is to convert the nodelist to an array with **Array.from() **or the **spread operator**_

#ELEMENT CREATION
-document.createElement(tagName) creates a new element node with the given tag name
```javascript
const div = document.createElement('div');
```
this function does not put your element into the DOM it simple creates it in memory. It allows you to manipulate the element before placing it on the page.
You can then place the element into the DOM with one of the following methods.

##APPEND ELEMENTS
-parentNode.appendChild(childNode) appends a childNode as the last child of the parent element
-parentNode.insertBefore(newNode, referenceNode) inserts a newNode before a referenceNode as a child of the parent element

##REMOVE ELEMENTS
-parentNode.removeChild(child) removes a childNode from the DOM and returns a reference to the removed node