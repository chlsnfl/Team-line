$(function(){
    $('.gnb').hover(function(){
        $('.lnb').stop().slideToggle();
    });
});

/******************명진 ****************** */
$(function(){
    setInterval(mySlide, 3000);
    
        function mySlide(){
           $('.slidein').animate({
               'left': '-1300px'
           }, 500, function(){
              $('.slidein img:first-child')
              .clone()
              .appendTo('.slidein');
              $('.slidein img:first-child').remove();
              $('.slidein').css('left', 0);
           });
        }
    });
