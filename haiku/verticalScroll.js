$("document").ready(function() {			
		
		$('.scroll2').click(function(){
			$('html, body').animate({
				scrollTop: $('.container2').offset().top
			}, 1000);				   				   
		 }); 

		$('.scroll3').click(function(){		   
			$('html, body').animate({
				scrollTop: $('.container3').offset().top
			}, 1000);	
		 });							   	 
			 
		$('.scroll4').click(function(){			   
		 	$('html, body').animate({
		 		scrollTop: $('.container4').offset().top
		 	}, 1000);
		 });
	
		/*$('.locFour').click(function(){
			$('html, body').animate({
				scrollTop: $('.scrollUp').offset().top
			}, 1000);				   
		 });*/	

		$('.scroll5').click(function(){
			$('html, body').animate({
				scrollTop: $('.container1').offset().top
			}, 1000);				   
		 });		
});
