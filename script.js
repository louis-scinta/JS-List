// Declaring global variables
const submitButton = document.getElementById('enter');
const userInput = document.getElementById('userinput');
const list = document.querySelector('ul');
const listItem = document.getElementsByTagName('li')

// Declaring functions
const checkInputlength = () => return input.value.length;

const createListElement = () =>
	let li = document.createElement("li");
	let button = document.createElement('button');
	li.appendChild(document.createTextNode(input.value));
	list.appendChild(li);
	li.appendChild(button)
	button.innerHTML = "delete";
	input.value = "";
	listItemListener();
	deleteButtonListener();
}

// Adds item to list when user clicks submit button
const onClick = () => {
	if(checkInputlength() > 0){
		createListElement();
	}
}

// Adds item to list when user presses return key
const onKeyPress = () => {
	if(checkInputlength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

// Adds event listener to list  item to enable strikethrough
const listItemListener = () => {
	for( i=0; i<listItem.length; i++){
	listItem[i].addEventListener('click', changeClass)
	}
}

// Adds strikethrough text decoration to list item
const changeClass = () => {
	this.classList.toggle('done');
}

// Adds eventlistener to list item button to enable deletion
const deleteButtonListener = () => {
	let btnn = document.querySelectorAll('li button');
	for( i=0; i<btn.length; i++){
	btn[i].addEventListener('click', clearElement)
	}
}

// Removes list item
function clearElement() {
	for (i=0; i<li.length; i++){
		this.parentNode.remove()
	}
}

// Adding event listeners to default text field and submit buttons
submitButton.addEventListener('click', Onclick);
userInput.addEventListener('keypress', onKeyPress);


//listItemListener();
// deleteButtonListener();
