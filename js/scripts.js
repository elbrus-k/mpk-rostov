$("document").ready(function() {
	
	// DROPDOWN MENU
	
	$("ul.nav li").hover(function(){
	
	    $(this).addClass("hover");
	    $('ul:first',this).css('visibility', 'visible');
	
	}, function(){
	
	    $(this).removeClass("hover");
	    $('ul:first',this).css('visibility', 'hidden');
	
	});

	// HOMEPAGE SLIDESHOW
	
	$(".featured").cycle({ 
		fx:      'scrollVert',
		timeout: 5000,
		speedIn:  1000, 
		speedOut: 100, 
		easeIn:  'bounceout', 
		easeOut: 'backin',
		next:	 '.featured-nav a.next',
		prev: 	 '.featured-nav a.prev'
	});
	
	// PROJECT SLIDESHOW
	
	$(function() {
		var contentWrapper = $('.project-wrap > .project');
		// only show the first item, hide the rest
		contentWrapper.hide().filter(':first').show();
		
		$('.project-nav li a').click(function () {
		
		    // check if this item doesn't have class "current"
		    // if it has class "current" it must not execute the script again
		    if (this.className.indexOf('current') == -1){
		    	contentWrapper.hide();
		    	contentWrapper.filter(this.hash).fadeIn(500);
		    	$('.project-nav li').removeClass('current');
		    	$('.project-nav li a').removeClass('current');
		    	$(this).addClass('current');
		    	$(this).parent().addClass('current');
		    }
		    return false;
		});
	});
	
	// CONTACT FORM
	
	$('#contactform').ajaxForm({
	   	target: '#error',
	   	beforeSubmit: function() {	
	   		$('#error span').remove();
			$('#error').append('<p class="loading">Sending your message...</p>');
		},
		success: function() {
			$('#error p.loading').fadeOut();
			$('#error').fadeIn('slow');
		}
	});	
	
});