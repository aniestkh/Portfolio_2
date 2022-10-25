$(window).on('resize', function(){
    var ww = $(window).width()
    
    if( ww <= 400) {
        $('.headmenu >li').addClass('on')
    }
    
})

$(window).on('load', function(){
    var ww = $(window).width()
    if( ww <= 400) {
        $('.headmenu >li').addClass('on')
    }
})


$('.coffeetime').on('click', function(){
    // var phonww = $(window).width()
    // var phonht = $(window).height()
    // alert('넓이'+phonww+'높이'+phonht)

    if($(window).width()<=400){

        alert(`모바일 전용 쿠폰증정! 'coupon1234'`)
    }
})

$('.navmenu .headmenu>li').on('click', function(){

    if(!$(this).hasClass('pnt')){
        $(this).addClass('pnt').siblings().removeClass('pnt')
    } else {
        $(this).removeClass('pnt')
    }

})


// function memon(){
//     $('.membership, .membership .close').addClass('on')
// }
// function memoff(){
//     $('.membership, .membership .close').removeClass('on')
// }


// $('.menu_icon').on('click', function () {
//     if (!$('.navmenu .hide_mem').hasClass('on')) {
//         memon()
//         $('.navmenu .hide_mem').addClass('on')
//         $('.sns').removeClass('on')
//         $('.navmenu .searchbx').removeClass('on')
//     } else {
//         memoff()
//         $('.navmenu .hide_mem').removeClass('on')
//     }
    
// })


$('.logo').on('click', function(){
    var phonww = $(window).width()
    var phonht = $(window).height()
    alert('넓이'+phonww+'높이'+phonht)

})