$(function(){
$('.popular_inner').slick({
  autoplay: true,
  autoplaySpeed: 1000,
  arrows:false,
  dots:false,
    centerMode: false,
    centerPadding: '80px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1247,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2.5
        }
      },
      {
        breakpoint: 1125,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 907,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 860,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1.5
        }
      },
      {
        breakpoint: 677,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1.3
        }
      },
      {
        breakpoint: 592,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });
});


$(function() {
  var $slider = $('.popular_inner');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    // $progressBarLabel.text( calc + '% completed' );
  });
  
  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400
  });  
});


$(function(){
  $('.step_two_inner').slick({
    arrows:false,
    dots:true,
    centerMode: true,
    dotsClass:'header_dots',
  centerPadding: '160px',
  slidesToShow: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 1385,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '220px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1161,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 813,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1.8
      }
    },
    {
      breakpoint: 683,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1.4
      }
    },
    {
      breakpoint: 558,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
       
      
    });
    
  });


  