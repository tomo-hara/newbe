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

  //EventListener
  cellTitle.addEventListener('mouseenter', function() {
    cellTitle.style.color = 'blue';
    cellTitle.style.fontWeight = 'bold';
    cellTitle.style.cursor = 'pointer';
  });

  cellTitle.addEventListener('mouseleave', function() {
    cellTitle.style.color = '';
    cellTitle.style.fontWeight = '';
  });
  cellTitle.addEventListener('click', function() {
    // Open a new page to display the full content
    var newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" type="text/css" href="style.css">
      </head>
      <body>
        <p>Date: ${getCurrentDate()}</p>
        <h1>${title}</h1>
        <p>Author: ${author}</p>
        
        <p>${content}</p>
      </body>
      </html>
    `);
    newWindow.document.close();
  });

  // Clear form inputs
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('content').value = '';
});
