$(document).ready(function () {
    $('.menu-toggle').on('click',function(){
        $(this).toggleClass('active');
        $(this).siblings('.nav').toggleClass('active');
        $('.panel').toggleClass('open');
        $(this).siblings('.logo').toggleClass('active');
    })
    $('.nav-items').on('click',function(){
        $('.menu-toggle').removeClass('active')
        $('.nav').removeClass('active');
        $('.panel').removeClass('open');
        $('.logo').removeClass('active');
    })
    $('.nav-link').on('click',function(){
        $('.tr').addClass('animated')
        setTimeout(function(){
            $('.tr').removeClass('animated')
        },1000)
    })
    $('.nav-items').on('click',function(){
        $('.main').addClass('animated')
        setTimeout(function(){
            $('.main').removeClass('animated')
        },1600)
    })
    $('.btn--more').on('click',function(){
        $(this).siblings('.para').toggleClass('animated');

    });


    $(window).scroll(function() {    
        const scroll = $(window).scrollTop();

        const elemCourse = $('#elem-course').offset().top-500;
        const elemCourseHeight = $('#elem-course').height()+500;
        const MaxelemCourse = elemCourse + elemCourseHeight;
        console.log(MaxelemCourse)

        const midCourse = $('#mid-course').offset().top-600;
        const midCourseHeight = $('#mid-course').height()+600;
        const MaxmidCourse = midCourse + midCourseHeight;
        console.log(MaxmidCourse)

        if (scroll >= elemCourse && scroll <= MaxelemCourse){
            $('.slider-animation-1').addClass("animated");
        } else {
            $('.slider-animation-1').removeClass("animated");
        }

        if (scroll >= midCourse && scroll<= MaxmidCourse){
            $('.slider-animation-2').addClass("animated");
        } else {
            $('.slider-animation-2').removeClass("animated");
        }
    })


    ScrollReveal().reveal('.js-fadeInUp',{
        origin:'bottom',
        distance:'100px',
        delay:300,
        duration:500,
        easing:'ease-out',
        reset:false,
    });
    ScrollReveal().reveal('.js-fadeInBot',{
        origin:'top',
        distance:'100px',
        duration:500,
        easing:'ease-out',
        reset:false,
    });
    ScrollReveal().reveal('.js-fadeInRight',{
        origin:'left',
        distance:'100px',
        duration:500,
        easing:'ease-out',
        reset:false,
    });
    ScrollReveal().reveal('.js-fadeInLeft',{
        origin:'right',
        distance:'100px',
        duration:500,
        easing:'ease-out',
        reset:false,
    });
    ScrollReveal().reveal('.feature-box',{
        origin:'bottom',
        distance:'100px',
        delay:300,
        duration:500,
        reset:false,
        interval:300,
        easing:'ease-out',
    });
    ScrollReveal().reveal('.list-title',{
        origin:'right',
        distance:'100px',
        delay:300,
        duration:500,
        reset:false,
        interval:300,
        easing:'ease-out',
    });

})
