// Get element by ID
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event 
itemList.addEventListener('click', removeItem);

// Filter Items
filter.addEventListener('keyup', filterItem);

// Add Item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // create new li event
  var li=document.createElement('li');
  // add class
  li.className ='list-group-item';
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // create del button
  var deleteBtn = document.createElement('button');
  // Add classes to delete
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append Text NOde
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);

// add edit button
  var editBtn = document.createElement('button');
  // add class to editbtn
  editBtn.className = 'btn btn-sm float-right edit';
  // Append text node to editbtn
  editBtn.appendChild(document.createTextNode('Edit'));
  // Append editbtn to li
  li.appendChild(editBtn);
  // Append li to list
  itemList.appendChild(li);
}
// removeItem
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li=e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filter 
function filterItem(e){
// Convert text to lower case
var text = e.target.value.toLowerCase();
// get Li's
var items = itemList.getElementsByTagName('li');
// Convert to an array
Array.from(items).forEach(function(item){
  var itemName = item.firstChild.textContent;
  var itemName1 = item.childNodes[1].textContent;
  if(itemName.toLowerCase().indexOf(text) != -1 || itemName1.toLowerCase().indexOf(text)!= -1){
    item.style.display = 'block';
  }else{
    item.style.display = 'none';
  }
})

}
