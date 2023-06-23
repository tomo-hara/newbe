const postForm = document.getElementById('post-form');
const postList = document.getElementById('post-list');

postForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('post-title').value;
  const content = document.getElementById('post-content').value;

  createPost(title, content);
  postForm.reset();
});

function createPost(title, content) {
  const postDiv = document.createElement('div');
  postDiv.classList.add('post');

  const titleElement = document.createElement('h2');
  titleElement.classList.add('post-title');
  titleElement.textContent = title;

  const contentElement = document.createElement('p');
  contentElement.classList.add('post-content');
  contentElement.textContent = content;

  postDiv.appendChild(titleElement);
  postDiv.appendChild(contentElement);

  postList.appendChild(postDiv);
}