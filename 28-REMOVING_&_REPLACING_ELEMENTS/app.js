// How to remove elements, how to work with classes, manipulating them, e.g changing a H5 to H2
// Topic: REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// New text node : creates the element
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading : the heading we want to replace
const oldHeading = document.getElementById('task-title');

//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

// REMOVE ELEMENT :Declaring your variable
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item :using the array no 0-.... either by remove or removeChild
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
// console.log(firstLi.children[0]);

let val;

// Classes
val = link.className;
val = link.classList; // Gives a DOMTokenList

val = link.classList[0]; //Assessing the DOMTokenList individual using the array

link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes : using method getAttribute
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');

val = link.hasAttribute('title'); //check if there is that particular attribute

link.removeAttribute('title'); // removes the title
val = link;

console.log(val);