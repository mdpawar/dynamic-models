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
var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor = "green";
for(i=0; i<items.length;i++){
  items[i].style.fontWeight='bold';
}
// getElementsByTagname
// var item1 = document.getElementsByTagName('h2');
// console.log(item1);
// item1[0].style.fontWeight = 'bold';
// item1[0].style.color='green';
var li = document.getElementsByTagName('li');
console.log(li);
// li[0].style.fontWeight = 'bold';
li[0].style.color='green';
for(i=0; i<li.length;i++){
  li[i].style.fontWeight='bold';
  li[i].style.backgroundColor='grey';
}