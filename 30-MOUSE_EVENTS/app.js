// Set a variable that grabs the class id-heading Tasks
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// Doubleclick
clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter: fires off when you hover into the card item
card.addEventListener('mouseenter', runEvent);
// Mouseleave: fires off when you hover out of the card item
card.addEventListener('mouseleave', runEvent);
// Mouseover
card.addEventListener('mouseover', runEvent);
// Mouseout
card.addEventListener('mouseout', runEvent);
// Mousemove: fires off when there is any movement within the element. 
// can be used for games, things that are really interactive
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // when building a game and you control your character with your mouse, this is very useful
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}