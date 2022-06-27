// EVENT BUBBLING: The bubbling up of events through the DOM i.e transgressing upward the parent element

document.querySelector('.card-title').addEventListener('click', function () {
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', function () {
  console.log('card content');
});

document.querySelector('.card').addEventListener('click', function () {
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function () {
  console.log('col');
});

// EVENT DELGATION : can be used when you dynamically insert something thru JavaScript that wasn't initially there when the link loaded

// Also means putting the listener on a parent of what you are looking for and den putting a condition there to find a target using e.target and then doing a functionality there


const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  if (e.target.parentElement.className === 'delete-item secondary-content') {
    console.log('delete item');
  }

  if (e.target.className === 'fa fa-remove') {
    console.log('delete item');
  }

  //this is the best was cus it targets the classlist so className changes doesn't affect it
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove(); //used to remove each list
  }
}