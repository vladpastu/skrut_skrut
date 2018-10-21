var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }



$(document).ready(function() {
    
    $('.js--section-about-us').waypoint(function(direction) {
        
        if(direction == "down") {
           $('nav').addClass('sticky');
           } else {
               $('nav').removeClass('sticky');
           }
        
    }, {
        offset: '60px;'
    });
    
     $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      var offset = $('#navigation').height() == 0 ? 80 : $('#navigation').height();
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - offset
        }, 1000, function() {
              
        });
      }
    }
  });
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-md-reorder')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-reorder');
        } else {
            icon.addClass('ion-md-reorder');
            icon.removeClass('ion-md-close');
        }
    })
    
    /*$('.js--btn-switch-1').click(function() {
        var apart = $('.js--apart-1');
        
        if(apart.hasClass('apart-active')) {
            apart.addClass('apart-not-active');
            apart.removeClass('apart-active');
           } else {
            apart.addClass('apart-active');
            apart.removeClass('apart-not-active');
           }
    })*/
    
    $('.js--btn-switch-1').click(function() {
        var apart1 = $('.js--apart-1');
        var apart2 = $('.js--apart-2');
        
        apart2.addClass('apart-not-active');
        apart2.removeClass('apart-active');
        
        apart1.addClass('apart-active');
        apart1.removeClass('apart-not-active');
    })
    
    $('.js--btn-switch-2').click(function() {
        var apart1 = $('.js--apart-1');
        var apart2 = $('.js--apart-2');
        
        apart1.addClass('apart-not-active');
        apart1.removeClass('apart-active');
        
        apart2.addClass('apart-active');
        apart2.removeClass('apart-not-active');
    })
    
    var map = new GMaps({
      div: '.map',
      lat: 48.450147,
      lng: 24.55703,
      zoom: 17
    });
    
    map.addMarker({
      lat: 48.450152, 
      lng: 24.557227,
      title: 'Doopa',
      infoWindow: {
        content: '<p>My awesome marker</p>'
      }
    });
    
});
