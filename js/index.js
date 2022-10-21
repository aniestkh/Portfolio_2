

// $(window).on('load', function(){
//     var count = 0;
//     function add() {
//         count++
//         $('.outercv .liquid .coffee').css({ height: count + '%' })
//         $('.outer .counter .count').css({ rotate: 5 * count + 'deg' })

//         if (count === 150) {
//             clearInterval(timer)
//             $('.outercv').delay(300).fadeOut(300)
//             $('html,body').scrollTop(0)
//         }
//     }
//     var timer = setInterval(add, 15)
// })


// 마우스휠 페이지 자동이동
// $('article').on('mousewheel', function (e, delta) {
//     if (delta > 0) {
//         var prevTop = $(this).prev().offset().top
//         $('html, body').stop().animate({
//             scrollTop: prevTop + 'px'
//         }, 500)
//     } else if (delta < 0) {
//         var nextTop = $(this).next().offset().top
//         $('html, body').stop().animate({
//             scrollTop: nextTop + 'px'
//         }, 500)
//     }
//     return false
// })


$('#header #nav .logo a').on('click', function () {
    var art1 = $('#article1').offset().top()
    var art2 = $('#article2').offset().top()
    var art3 = $('#article3').offset().top()

    console.log(art1)
    console.log(art2)
    console.log(art3)

    alert('art1')
})

// slide
$('.slide-group .btn .prev').on('click', function () {

})



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
    var phonww = $(window).width()
    var phonht = $(window).height()
    
    alert('넓이'+phonww+'높이'+phonht)
})
