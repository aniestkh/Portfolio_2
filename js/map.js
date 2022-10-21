
$('.close').on('click', function(){
    $('.membership').removeClass('on')
    $('.headmenu').removeClass('on')
})

$('.resize_pack').on('click', function(){
    $('.membership').addClass('on')
    $('.headmenu').addClass('on')
})