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

    cellTitle.textContent = bulletinData[i].title;
    cellAuthor.textContent = bulletinData[i].author;
    cellContent.textContent = bulletinData[i].content;
  }
});