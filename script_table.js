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

  // Populate cells with data
  cellTitle.textContent = title;
  cellAuthor.textContent = author;
  cellContent.textContent = content;

  // Clear form inputs
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('content').value = '';
});
