$("document").ready(function() {			
		
		$('.Dwnsvg').click(function(){
			$('.right').animate({
				scrollTop: $('.container2').offset().top
			}, 1000);				   				   
		 }); 

		$('.Dwnsvg2').click(function(){		   
			$('.right').animate({
				scrollTop: $('.container3').offset().top
			}, 1000);	
		 });							   	 
			 
		$('.Dwnsvg3').click(function(){			   
		 	$('.right').animate({
		 		scrollTop: $('.container4').offset().top
		 	}, 1000);
		 });
		 
		/*$('.locFour').click(function(){
			$('html, body').animate({
				scrollTop: $('.scrollUp').offset().top
			}, 1000);				   
		 });*/	

		$('.scrollUp').click(function(){
			$('.right').animate({
				scrollTop: $('.container').offset().top
			}, 1000);				   
		 });		
});