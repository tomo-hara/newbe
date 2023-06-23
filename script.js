// 게시글 작성 폼 제출 시 처리
document.getElementById('message-form').addEventListener('submit', function (event) {
  event.preventDefault(); // 폼 제출 동작 중지

  // 입력값 가져오기
  var username = document.getElementById('username-input').value;
  var email = document.getElementById('email-input').value;
  var message = document.getElementById('message-input').value;
  var password = document.getElementById('password-input').value;

  // 게시글 생성
  var newMessage = {
    username: username,
    email: email,
    message: message,
    password: password
  };

  // 로컬 스토리지에 게시글 저장
  var messages = JSON.parse(localStorage.getItem('messages') || '[]');
  messages.push(newMessage);
  localStorage.setItem('messages', JSON.stringify(messages));

  // 페이지 이동
  window.location.href = 'index1.html';
});

function renderMessages() {
  var messageList = document.getElementById('message-list');
  messageList.innerHTML = '';

  // 로컬 스토리지에서 게시글 가져오기
  var messages = JSON.parse(localStorage.getItem('messages') || '[]');

  // 게시글 목록 렌더링
  messages.forEach(function (message, index) {
    var messageItem = document.createElement('div');
    messageItem.innerHTML =
      '<strong>' +
      message.username +
      '</strong> (' +
      message.email +
      '): ' +
      message.message;

    // Create a delete button for each message
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '삭제';
    deleteButton.addEventListener('click', function () {
      var passwordInput = prompt('비밀번호를 입력하세요:');
      if (passwordInput === message.password) {
        deleteMessage(index);
      } else {
        alert('비밀번호가 일치하지 않습니다.');
      }
    });

    messageItem.appendChild(deleteButton);
    messageList.appendChild(messageItem);
  });
}

// 메시지 삭제
function deleteMessage(index) {
  var messages = JSON.parse(localStorage.getItem('messages') || '[]');
  messages.splice(index, 1);
  localStorage.setItem('messages', JSON.stringify(messages));
  renderMessages();
}

// 초기 게시글 목록 렌더링
renderMessages();