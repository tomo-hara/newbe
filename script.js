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
  window.location.href = 'board.html';
});