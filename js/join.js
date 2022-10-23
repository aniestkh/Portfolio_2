// 아코디언 ui(위젯)
function accordion() {
  $('#accordion').accordion();
}
accordion()

// select박스 선택시 색입힘
$('select').on('focus', function () {
  $(this).css({ background: '#f7e6f7', fontWeight:'bold' })
})

// input박스 선택시 색입힘 및 사이즈업
$('input').on('focus', function () {
  $(this).css({ background: '#f5f5dc', transform: 'scale(1.2)' })
})
$('input').on('blur', function () {
  $(this).css({ background: 'initial', transform: 'scale(1)' })
})

// 아이디 중복확인
$('.id .check').on('click', function(){
  var dup = [candy, chocolate, snack]
  var idlist = $('.id #idbox').val()

  if(idlist == dup){
    alert('사용중인 아이디 입니다.')
    $('.id #idbox').focus()
  }

})

// 생일
function year(){
  for(i=0; i<=20; i++) {
    if(i>=10){
      $('.year').append('<option value=20'+i+'년>20'+i+'년</option>')
    } else {
      $('.year').append('<option value=200'+i+'년>200'+i+'년</option>')
    }
  }
}
year()

// 생년월일_월
function month(){
  for(i=1; i<=12; i++) {
    $('.month').append('<option value='+i+'월>'+i+'월</option>')
  }
}
month()

// 생년월일_일
function day(){
  for(i=1; i<=31; i++) {
    $('.day').append('<option value='+i+'일>'+i+'일</option>')
  }
}
day()

// 이메일
$('#emailselect').on('change', function () {
  let opt = $(this).find('option:selected').val()

  if (opt !== 'yet' && opt !== 'self') {
    $('#elist').val(opt).attr({
      disabled: true
    })
  } else if (opt === 'self') {
    $('#elist').val('').attr({
      disabled: false
    }).focus()
  } else {
    $('#elist').val('').attr({
      disabled: true
    })
  }
})

// 제출 전 오류 경고
$('#formlist').on('submit', function () {
  let idd = $('.id #idbox').val()
  if (!idd) {
    alert('아이디를 입력하세요!')
    $('.id #idbox').focus()
    return false
  }

  let pwbox = $('.passwd #passbox').val()
  console.log(pwbox)
  if (!pwbox) {
    alert('비밀번호를 입력하세요!')
    $('.passwd #passbox').focus()
    return false
  }

  let pwcheck = $('.passcheck #pwcheck').val()
  if (pwcheck !== pwbox) {
    alert('동일한 비밀번호를 입력해주세요!')
    $('.passcheck #pwcheck').focus()
    return false
  }

  let pwques = $('.passques #pwques').val()
  if (!pwques) {
    alert('비밀번호를 잊어버렸을 시 질문사항을 입력해주세요!')
    $('.passques #pwques').focus()
    return false
  }

  let addr = $('.address #addbox').val()

  if (!addr) {
    alert('주소를 입력하세요!')
    $('.address #addbox').focus()
    return false
  }

  
  
})
  // else if ( !pwboxCheck.test(pwbox) ) {
  //     alert('비밀번호 규칙에 맞지 않습니다.')
  //     $('.joinBox #pwbox').focus().css({
  //         borderColor:'#f00'
  //     }).val('')
  //     return false
  // }

  // let pwboxok = $('.joinBox #pwboxok').val()
  // if (pwbox!==pwboxok) {
  //     alert('비밀번호를 정확히 입력하세요.')
  //     $('.joinBox #pwbox').focus().css({
  //         borderColor:'#f00'
  //     }).val('')
  //     $('.joinBox #pwboxok').val('')
  //     return false
  // }
