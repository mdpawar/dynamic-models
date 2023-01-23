// Examine the document
//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// // Get element by ID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// header.style.borderBottom = 'solid 3px #000';
// getElementsByClassname
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[2].style.backgroundColor = "green";
// for(i=0; i<items.length;i++){
//   items[i].style.fontWeight='bold';
// }
// getElementsByTagname
// var item1 = document.getElementsByTagName('h2');
// console.log(item1);
// item1[0].style.fontWeight = 'bold';
// item1[0].style.color='green';
// var li = document.getElementsByTagName('li');
// console.log(li);
// li[0].style.fontWeight = 'bold';
// li[0].style.color='green';
// for(i=0; i<li.length;i++){
//   li[i].style.fontWeight='bold';
//   li[i].style.backgroundColor='grey';
// }

// querySelector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #f4f4f4';

// var input = document.querySelector('input');
// input.value = 'Great World';

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = 'Log In';

// var item = document.querySelector('.list-group-item');
// console.log(item);
// item[1].style.backgroundColor = 'green';

// var thirdItem = querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'transparent';

// // querySElectorAll
// var title = document.querySelectorAll('.title');
// console.log(title);

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length;i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = 'ccc';
// }

// Traversing the DOM
var itemList = document.querySelector('#items');
console.log(itemList);

// // parenyNode and parentElements
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgoudColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgoudColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// // childNode 
//   console.log(itemList.childNodes);
//   console.log(itemList.children);

// // Firstchild
// console.log(itemList.firstChild);

// // firstElementChild
// console.log(itemList.firstElementChild);

// // lastChild
// console.log(itemList.lastChild);

// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// // previousSi;bling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// createElement

// create a div
var newDiv = document.createElement('div');
console.log(newDiv);

//create Class
newDiv.className = 'Hello';

// createID
newDiv.id = 'hello1';

// set atribute
newDiv.setAttribute('title','Hello Div');

//create text node
var newDivText = document.createTextNode('Hello World');

// add Text to DIv
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
var container1 = document.querySelector('div .container');
var h2 = document.querySelector('div h2');

container.insertBefore(newDiv, h1);
container1.insertBefore(newDiv, h2);
