// Input and Form Events: start by creating some variables
const form = document.querySelector('form'); //if you have an application with various forms, you have to be more specific using the id and class
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select'); //for the change event

// Clear input: clears the input from JavaScript
taskInput.value = '';

form.addEventListener('submit', runEvent);

// Keydown
taskInput.addEventListener('keydown', runEvent);
// Keyup
taskInput.addEventListener('keyup', runEvent); //fires off wen the key is released
// Keypress
taskInput.addEventListener('keypress', runEvent);
// Focus: when you click inside of an input setting it to a focus mode
taskInput.addEventListener('focus', runEvent);
// Blur: opposite of focus
taskInput.addEventListener('blur', runEvent);
// Cut
taskInput.addEventListener('cut', runEvent);
// Paste
taskInput.addEventListener('paste', runEvent);
// Input
taskInput.addEventListener('input', runEvent);
// Change: to do this, disable the css styling, you need to add a lil bit of jquery
select.addEventListener('change', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value); // target is the element the event happens on, value is whatever is typed in

  // heading.innerText = e.target.value; //useful in data binding in angular.js

  // Get input value
  console.log(taskInput.value);

  e.preventDefault(); //usually when you use a submit, you are gonna want to use this cus by default when clicked on, it will flash in the console and redirect to the href
}