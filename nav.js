jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;



	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.cd-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
		    		$('.cd-header').addClass('is-visible');
		    	} else {
		    		$('.cd-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.cd-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.cd-primary-nav-trigger').on('click', function(){

		$('.cd-menu-icon').toggleClass('is-clicked'); 
		$('.cd-header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.navigation-ul').removeClass('nav__on');
			$('.nav-follow').removeClass('nav__on');


			if (document.location.pathname === '/' || document.location.pathname.indexOf('index') >-1 ) {

				$("#video_html5_api").animate({volume: 1}, 2000);
			}


			//IF HOME
			/*$('.corner-logo').removeClass('cornerLogoActive');*/

			setTimeout(removeNavul, 300);

      function removeNavul() {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
        		
				
			});
		}
		} else {

			if (document.location.pathname === '/' || document.location.pathname.indexOf('index') >-1 ) {
				var vid = document.getElementById("video_html5_api");
				if (vid.volume != 0) {
        			$(vid).animate({volume: 0}, 2000);
        		}
        	}


			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
				$('.navigation-ul').addClass('nav__on');
				$('.nav-follow').addClass('nav__on');

				

				/*
				while (i <= 10) {
					b = i/10;
					vid.volume = b;
					console.log (vid.volume);
				    i--;
				}
				*/

			});	
		}


		


	});

	//open/close primary navigation
	$('.home-nav-wrap').on('click', function(){
		$('.cd-menu-icon').toggleClass('is-clicked'); 
		$('.cd-header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.navigation-ul').removeClass('nav__on');
			$('.nav-follow').removeClass('nav__on');

			$("#video_html5_api").animate({volume: 1}, 2000);


			//IF HOME
			/*$('.corner-logo').removeClass('cornerLogoActive');*/

			setTimeout(removeNavul, 300);

      function removeNavul() {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
				

				
			});
		}
		} else {

			var vid = document.getElementById("video_html5_api");
				if (vid.volume != 0) {
        			$(vid).animate({volume: 0}, 2000);
        		}

			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				
				$('body').addClass('overflow-hidden');
				$('.navigation-ul').addClass('nav__on');
				$('.nav-follow').addClass('nav__on');
				/*$('.corner-logo').addClass('cornerLogoActive');*/
			});	
		}
	});






	$('.navigation-li').on('click', function(){
		alert ("click");
		console.log("click");
		
	});


});