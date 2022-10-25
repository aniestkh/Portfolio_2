var pc = $(window).width()>1024
var tablet = $(window).width()>400 && $(window).width()<=1024
var phone = $(window).width()<400


$('.membership .magnifyinggl').on('click', function () {
    $('.navmenu .searchbx').toggle()
})

$('.magnifyinggl').on('click', function () {
    // if($('html').hasClass('pc')) {
    //     $('.searchbx').addClass('on')
    // } else {
    //     $('.searchbx').removeClass('on')
    // }
    if (!$('.navmenu .searchbx').hasClass('on')) {
        $('.navmenu .searchbx').addClass('on')
        $('.sns').removeClass('on')
        $('.navmenu .hide_mem').removeClass('on')
        memoff()
    } else {
        $('.navmenu .searchbx').removeClass('on')
    }
})

$('.sns_icon').on('click', function () {
    if (!$('.sns').hasClass('on')) {
        memon()
        $('.sns').addClass('on')
        $('.navmenu .hide_mem').removeClass('on')
        $('.navmenu .searchbx').removeClass('on')

    } else {
        memoff()
        $('.sns').removeClass('on')
    }
})

$('.close').on('click',function(){
    $('.membership, .searchbx, .membership .hide_mem').removeClass('on')
})

function monitorsize() {
    $(window).on('load', function () {
        var wid = $(this).width()
        if (wid >= 1024) {
            $('html').addClass('pc').removeClass('tablet mobile')
        } else if (wid >=400 && wid < 1024){
            $('html').addClass('phone').removeClass('pc tablet')
        }
    })
}
monitorsize()
$(window).on('resize', function () {
    monitorsize()
})



function memon(){
    $('.membership, .membership .close').addClass('on')
}
function memoff(){
    $('.membership, .membership .close').removeClass('on')
}


$('.menu_icon').on('click', function () {
    if (!$('.navmenu .hide_mem').hasClass('on')) {
        memon()
        $('.navmenu .hide_mem').addClass('on')
        $('.headmenu').addClass('on')
        $('.sns').removeClass('on')
        $('.navmenu .searchbx').removeClass('on')
    } else {
        memoff()
        $('.navmenu .hide_mem').removeClass('on')
        $('.headmenu').removeClass('on')
    }
    
})

