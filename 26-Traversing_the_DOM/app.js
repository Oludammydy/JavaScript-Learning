//Traversing means basically moving up and down within the DOM
let val;

const list = document.querySelector('ul.collection'); //constant 1
const listItem = document.querySelector('li.collection-item:first-child'); //setting anoda variable

val = listItem;
val = list;

// Get child nodes: it gives all diff types of element 
val = list.childNodes; //This prints out and counts all the line breaks indicating dem as text.

// Get children element nodes
val = list.children; // prints out and ignores the linebreaks. but calls it HTML instead of NODE

val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// The ffg tells us what type of node list is logged
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// // Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// // Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement; //prints same as parentNode
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);