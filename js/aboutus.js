$('.next').on('click', function(){
  $('.slide-container li').css({transform: 'translateX(-170%)'})
})

$('.prev').on('click', function(){
  $('.slide-container li').css({transform: 'translateX(170%)'})
})