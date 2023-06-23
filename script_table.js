document.getElementById('itemForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var content = document.getElementById('content').value;

  // Create new bulletin board row
  var table = document.getElementById('board');
  var newRow = table.insertRow(-1);

  // Insert cells into the new row
  var cellTitle = newRow.insertCell(0);
  var cellAuthor = newRow.insertCell(1);
  var cellContent = newRow.insertCell(2);
  var cellDelete = newRow.insertCell(3);

  // Populate cells with data
  cellTitle.textContent = title;
  cellAuthor.textContent = author;
  cellContent.textContent = content;
  
  // Create delete button
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    deleteBulletinItem(newRow);
  });

  // Append delete button to the delete cell
  cellDelete.appendChild(deleteButton);

  // Clear form inputs
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('content').value = '';

  // Save data to localStorage
  var bulletinData = JSON.parse(localStorage.getItem('bulletinData')) || [];
  bulletinData.push({ title: title, author: author, content: content });
  localStorage.setItem('bulletinData', JSON.stringify(bulletinData));
});

// Retrieve data from localStorage on page load
window.addEventListener('load', function() {
  var bulletinData = JSON.parse(localStorage.getItem('bulletinData')) || [];

  for (var i = 0; i < bulletinData.length; i++) {
    var table = document.getElementById('board');
    var newRow = table.insertRow(-1);
    var cellTitle = newRow.insertCell(0);
    var cellAuthor = newRow.insertCell(1);
    var cellContent = newRow.insertCell(2);
    var cellDelete = newRow.insertCell(3);

    cellTitle.textContent = bulletinData[i].title;
    cellAuthor.textContent = bulletinData[i].author;
    cellContent.textContent = bulletinData[i].content;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (function(row) {
      return function() {
        deleteBulletinItem(row);
      };
    })(newRow));

    cellDelete.appendChild(deleteButton);
  }
});

// Function to delete a bulletin item
function deleteBulletinItem(row) {
  var table = document.getElementById('board');
  var rowIndex = row.rowIndex;

  // Remove the row from the table
  table.deleteRow(rowIndex);

  // Remove the corresponding item from localStorage
  var bulletinData = JSON.parse(localStorage.getItem('bulletinData')) || [];
  bulletinData.splice(rowIndex - 1, 1);
  localStorage.setItem('bulletinData', JSON.stringify(bulletinData));
}