// 메뉴 리스트 등장
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

// 플로팅 이모티콘
$('.coffeetime').on('click', function(){
    if($(window).width()<=400){

        alert(`모바일 전용 쿠폰증정! 'coupon1234'`)
    }
})

// 메뉴 선택시 위로 튀어오름
$('.navmenu .headmenu>li').on('click', function(){
    if(!$(this).hasClass('pnt')){
        $(this).addClass('pnt').siblings().removeClass('pnt')
    } else {
        $(this).removeClass('pnt')
    }

})

// 고영희님은 사랑입니다
$('.mapping').on('click',function(){
    $('.godgoyang').css({display:'block'})
})
$('body, html').on('click', '.godgoyang', function(){
    $(this).css({display:'none'})
})

// outer
$(window).on('load', function(){
    var count = 0;


        function add() {
            count++
            $('.outer .count').text(count+'%')
            $('.outercv .liquid .coffee').css({height:count+'%'})
            
            if (count===100) {
                clearInterval(timer)
                $('.outercv').delay(300).hide(300)
                $('html,body').scrollTop(0)
                // $('#menu li').eq(0).addClass('on')
                // .siblings().removeClass('on')
            }
        }
    var timer = setInterval(add, 10)
})

$('.logo').on('click', function(){
    var phonww = $(window).width()
    var phonht = $(window).height()
    alert('넓이'+phonww+'높이'+phonht)

})