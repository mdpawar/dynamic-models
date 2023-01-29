// Get element by ID
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event 
itemList.addEventListener('click', removeItem);

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
