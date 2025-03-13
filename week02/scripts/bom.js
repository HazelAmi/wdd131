const input = document.querySelector('#Favchap');
const button = document.querySelector('button');
const list = document.querySelector('________');

const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = '❌';

li.append(deleteButton);
li.append(li);

//a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function(){
   if(input.value.trim() !== '') {}
})