function drinkon() {
  $('.drinking').addClass('on')
  $('.recieptbx').addClass('on')
}
function drinkoff() {
  $('.drinking').removeClass('on')
  $('.recieptbx').removeClass('on')
}
$('article').on('click', '.menu .xmark', function () {
  $('.postit').removeClass('on')
  $('.innerpost, .innerpost span').removeClass('on')
  $('.innerpost').removeClass('click')
  $('.menulist .menu').removeClass('on')
  $('.menu .menubx').removeClass('on')
})

$('article').on('click', function () {
  $('#header').addClass('hide')
  $('#header .hiding').addClass('on')
})

$('#header .hiding').on('mouseover', function () {
  $('#header').removeClass('hide')
  $(this).removeClass('on')
})

$('.menu >ul').on('mouseover', function () {
  $(this).find('.menubx').addClass('slide')
})
$('.menu >ul').on('mouseleave', function () {
  $(this).find('.menubx').removeClass('slide')
})

$('.menu .list >li').on('click', function () {
  var menuno = $(this).index()
  console.log(menuno)
  $(this).css({ transform: 'scale(1.5)' })

  drinkon()

})

$('.innerpost').on('click', function () {
  var lino = $(this).index()
  var eqno = $(this).eq(lino)
  var idbox = $(this).attr('id')

  if ($('.postit').hasClass('on')) {
    $(this).addClass('click').siblings().removeClass('click')
    drinkoff()

  } else {
    $('.postit').addClass('on')
    $('.innerpost, .innerpost span').addClass('on')
    $(this).addClass('click').siblings().removeClass('click')
    $('.menulist .menu').addClass('on')
  }
  usedata(idbox)


})

var data = ''
$.ajax({
  type: 'Get',
  url: './data/coffee.xml',
  dataType: 'xml',
  success: function (getdata) {
    console.log(getdata)
    data = getdata
    // usedata('coffeelist') //클릭이벤트 발생시 usedata 호출
  },
  error: function (xhp) {
    alert(xhp.status + ' 에러발생')
  }
})

function usedata(cname) {
  $('.list').remove()
  var newCont = `<ul class="list">`
  $(data).find('#' + cname).find('drink').each(function () {
    let name = $(this).find('name').text()
    let price = $(this).find('price').text()
    let photo = $(this).find('photo').text()
    newCont += `<li><a href="#none">`
    newCont += `<img src="${photo}" alt="">`
    newCont += `<h2>${name}</h2>`
    newCont += `<p class="price">${price}</p>`
    newCont += `</a></li>`
  })
  newCont += `</ul>`
  $('.menu').append(newCont)
}


$('.close').on('click', function(){
  $('.membership').removeClass('on')
  $('.headmenu').removeClass('on')
})

if($(window).width()<=400){
  $('.menulist .xmark').on('click', function(){
    $('.menulist .menu').removeClass('on')
  })
}
