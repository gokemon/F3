;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Main Menu Superfish
	var mainMenu = function() {

		$('#fh5co-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};


	// Offcanvas and cloning of the main menu
	var offcanvas = function() {

		var $clone = $('#fh5co-menu-wrap').clone();
		$clone.attr({
			'id' : 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class' : '',
			'id' : ''
		});

		$('#fh5co-page').prepend($clone);

		// click the burger
		$('.js-fh5co-nav-toggle').on('click', function(){

			if ( $('body').hasClass('fh5co-offcanvas') ) {
				$('body').removeClass('fh5co-offcanvas');
			} else {
				$('body').addClass('fh5co-offcanvas');
			}
			

		});

		$('#offcanvas-menu').css('height', $(window).height());

		$(window).resize(function(){
			var w = $(window);


			$('#offcanvas-menu').css('height', w.height());

			if ( w.width() > 769 ) {
				if ( $('body').hasClass('fh5co-offcanvas') ) {
					$('body').removeClass('fh5co-offcanvas');
				}
			}

		});	

	}

	

	// Click outside of the Mobile Menu
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('fh5co-offcanvas') ) {
				$('body').removeClass('fh5co-offcanvas');
			}
	    }
		});
	};


	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};
	
	var stickyBanner = function() {
		var $stickyElement = $('.sticky-banner');
		var sticky;
		if ($stickyElement.length) {
		  sticky = new Waypoint.Sticky({
		      element: $stickyElement[0],
		      offset: 0
		  })
		}
	}; 

	// Document on load.
	$(function(){
		mainMenu();
		parallax();
		offcanvas();
		mobileMenuOutsideClick();
		contentWayPoint();
		stickyBanner();
	});


}());


/* Programs */
/* Programs Humane */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc');
  var descWrapper = $('.desc-wrapper');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info').show();
  }
  
  // When clicking more/less button
  $('.more-info').click(function() {
    
    var fullHeight = $('.desc').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});

/* Programs Animal */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc1');
  var descWrapper = $('.desc-wrapper1');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info1').show();
  }
  
  // When clicking more/less button
  $('.more-info1').click(function() {
    
    var fullHeight = $('.desc1').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper1').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper1').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});

/* Online */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc2');
  var descWrapper = $('.desc-wrapper2');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info2').show();
  }
  
  // When clicking more/less button
  $('.more-info2').click(function() {
    
    var fullHeight = $('.desc2').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper2').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper2').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});


/* Programs Community Classes */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc3');
  var descWrapper = $('.desc-wrapper3');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info3').show();
  }
  
  // When clicking more/less button
  $('.more-info3').click(function() {
    
    var fullHeight = $('.desc3').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper3').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper3').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});

/* Programs Hearing Parents */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc4');
  var descWrapper = $('.desc-wrapper4');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info4').show();
  }
  
  // When clicking more/less button
  $('.more-info4').click(function() {
    
    var fullHeight = $('.desc4').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper4').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper4').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});

/* Hearing Volunteers */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc5');
  var descWrapper = $('.desc-wrapper5');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info5').show();
  }
  
  // When clicking more/less button
  $('.more-info5').click(function() {
    
    var fullHeight = $('.desc5').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper5').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper5').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});


/* Programs Gardens */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc6');
  var descWrapper = $('.desc-wrapper6');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info6').show();
  }
  
  // When clicking more/less button
  $('.more-info6').click(function() {
    
    var fullHeight = $('.desc6').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper6').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper6').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});

/* Programs Veterinary Clinic */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc7');
  var descWrapper = $('.desc-wrapper7');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info7').show();
  }
  
  // When clicking more/less button
  $('.more-info7').click(function() {
    
    var fullHeight = $('.desc7').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper7').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper7').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});

/* Deaf Art */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc8');
  var descWrapper = $('.desc-wrapper8');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info8').show();
  }
  
  // When clicking more/less button
  $('.more-info8').click(function() {
    
    var fullHeight = $('.desc8').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper8').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper8').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});


/* Lodge */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc9');
  var descWrapper = $('.desc-wrapper9');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info9').show();
  }
  
  // When clicking more/less button
  $('.more-info9').click(function() {
    
    var fullHeight = $('.desc9').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper9').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper9').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});


/* Bed and Breakfast */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc10');
  var descWrapper = $('.desc-wrapper10');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info10').show();
  }
  
  // When clicking more/less button
  $('.more-info10').click(function() {
    
    var fullHeight = $('.desc10').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper10').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper10').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});


/* Deaf-Owned Business Partnership */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc11');
  var descWrapper = $('.desc-wrapper11');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info11').show();
  }
  
  // When clicking more/less button
  $('.more-info11').click(function() {
    
    var fullHeight = $('.desc11').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper11').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper11').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});


/* Thrift/Furniture Restoration Store */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc12');
  var descWrapper = $('.desc-wrapper12');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info12').show();
  }
  
  // When clicking more/less button
  $('.more-info12').click(function() {
    
    var fullHeight = $('.desc12').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper12').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper12').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});


/* Vlogs */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc13');
  var descWrapper = $('.desc-wrapper13');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info13').show();
  }
  
  // When clicking more/less button
  $('.more-info13').click(function() {
    
    var fullHeight = $('.desc13').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper13').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper13').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});


/* Internship */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc14');
  var descWrapper = $('.desc-wrapper14');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info14').show();
  }
  
  // When clicking more/less button
  $('.more-info14').click(function() {
    
    var fullHeight = $('.desc14').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper14').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper14').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});


/* Research Site */

$(document).ready(function() {
  
  var descMinHeight = 200;
  var desc = $('.desc15');
  var descWrapper = $('.desc-wrapper15');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info15').show();
  }
  
  // When clicking more/less button
  $('.more-info15').click(function() {
    
    var fullHeight = $('.desc15').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper15').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper15').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});



