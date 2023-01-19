// jQuery에서 $표시 Vanilla JS => document.querySeletor() or getElementById와 동일

// #login-btn을 클릭 했을 때 실행할 함수
$('#login-btn').on('click', function(){
  // overlayf라는 클래스한테 open-modal이라는 클래스 추가
  // Vanilla JS => classList.add
  $('.overlay').addClass('open-modal');
});

$('#close-btn').on('click', function(){
  // overlayf라는 클래스한테 open-modal이라는 클래스 제거
  // Vanilla JS => classList.remove
  $('.overlay').removeClass('open-modal');
});


// 이벤트 객체 -> 전송 이벤트를 막는 기능 e.preventDefault()
$('#submit-btn').on('click', function (e) {
  // id-box, pw-box라는 id값을 가진 input창 value를 변수에 저장
  // Vanilla JS => document.getElementById('idBox').value;
  let idBox = $('#id-box').val();
  let pwBox = $('#pw-box').val();
  console.log(idBox, pwBox)

  if(idBox == '') {
    // 실행문1 : idBox안에 value가 빈값이라면 실행할 코드
    // alert('아이디를 입력하세요.');
    $('.id-alert').css('display', 'block');
    $('.id-alert').html('아이디를 입력하세요.');
    e.preventDefault();
  } else if (pwBox == '') {
    // 실행문2 : pwBox안에 value가 빈값이라면 실행할 코드
    // alert('비밀번호를 입력하세요.')
    $('.pw-alert').css('display', 'block');
    $('.pw-alert').html('비밀번호를 입력하세요.');
    e.preventDefault();
  } else if ( pwBox != '' && pwBox.length < 6 ) {
    // 실행문3 : pwBox안에 value가 빈값이 아니면서 길이가 6보다 작을 때 실행할 코드

    // pw-alert의 display를 none -> block으로 바꾼다
    $('.pw-alert').css('display', 'block');
    // pw-alert 태그 안에 텍스트를 '비밀번호를 6자 이상으로 설정하세요.'로 바꾼다
    $('.pw-alert').html('비밀번호를 6자 이상으로 설정하세요.');
    e.preventDefault();
  }
});