$('.menubox >li').on('click', function(){
    if($('.drink').hasClass('on')){
        $('.drink').removeClass('on')
        $('.textbox').removeClass('on')
    } else {
        $('.drink').addClass('on')
        $('.textbox').addClass('on')
    }
})

$('article').on('click', '.xmark', function(){
    $('.drink').removeClass('on')
    $('.textbox').removeClass('on')

})

$('#header').on('mouseleave', function(){
    $(this).addClass('on')
})
$('#header').on('mouseover', function(){
    $(this).removeClass('on')
})

$('.mainmenu').on('mouseover', function(){
    $('#header').addClass('on')
})

$('#header #nav .logo').on('click', function(){
    var wd=$(window).width()
    var ht=$(window).height()

    console.log(wd, ht)
})
