(function($, document, window){

	$(document).ready(function(){
		$(".slider").flexslider({
			animation: "fade",
			controlNav: true,
			directionNav: false,
			manualControls: ".flex-control-nav li"
		});

		$(".menu-toggle").click(function(){
			$(".main-navigation .menu").slideToggle();
		});

		$("[data-bg-color]").each(function(){
			var color = $(this).data("bg-color");
			$(this).css("background-color",color);
		});
		$("[data-background]").each(function(){
			var bg = $(this).data("background");
			$(this).css("background-image","url("+bg+")");
		});

		var $container = $('.filterable-items');

		$container.imagesLoaded(function(){
		    $container.isotope({
		        filter: '*',
		        layoutMode: 'fitRows',
		        animationOptions: {
		            duration: 750,
		            easing: 'linear',
		            queue: false
		        }
		    });

		});
	    $('.filterable-nav a').click(function(e){
	    	e.preventDefault();
	        $('.filterable-nav .current').removeClass('current');
	        $(this).addClass('current');

	        var selector = $(this).attr('data-filter');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	    $('.mobile-filter').change(function(){

	        var selector = $(this).val();
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });


		new WOW().init();
	});

	$(window).ready(function(){

	});

})(jQuery, document, window);