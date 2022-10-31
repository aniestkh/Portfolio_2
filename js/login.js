// select박스 선택시 색입힘
$('select').on('focus', function () {
  $(this).css({ background: '#f7e6f7', fontWeight:'bold' })
})

// input박스 선택시 색입힘 및 사이즈업
$('#formlist .id input').on('focus', function () {
  $(this).css({ background: '#f5f5dc', transform: 'scale(1.1)' })
  $('#formlist .id label').css({color:'#777777'})
})
$('#formlist .id input').on('blur', function () {
  $(this).css({ background: '#fff', transform: 'scale(1)' })
  $('#formlist .id label').css({color:'#000'})
})

$('#formlist .passwd input').on('focus', function () {
    $(this).css({ background: '#f5f5dc', transform: 'scale(1.1)' })
    $('#formlist .passwd label').css({color:'#777777'})
  })
  $('#formlist .passwd input').on('blur', function () {
    $(this).css({ background: '#fff', transform: 'scale(1)' })
    $('#formlist .passwd label').css({color:'#000'})
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
  
})
