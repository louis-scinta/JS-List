// Declaring global variables
const submitButton = document.getElementById('enter');
const textInput = document.getElementById('userinput');
const list = document.querySelector('ul');
const listItem = document.getElementsByTagName('li')


// Declaring functions
const checkInputlength = () => textInput.value.length;

const createListElement = () =>{
	let newItem = document.createElement("li");
	let delButton = document.createElement('button');
	newItem.appendChild(document.createTextNode(textInput.value));
	list.appendChild(newItem);
	newItem.appendChild(delButton)
	delButton.innerHTML = "delete";
	textInput.value = "";
	
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
	let btn = document.querySelectorAll('li button');
	for( i=0; i<btn.length; i++){
	btn[i].addEventListener('click', clearElement)
	}
}

// Removes list item
function clearElement() {
	for (i=0; i<listItem.length; i++){
		this.parentNode.remove()
	}
}


// Adding event listeners to default text field and submit buttons
submitButton.addEventListener('click', onClick);
textInput.addEventListener('keypress', onKeyPress);


listItemListener();
deleteButtonListener();
