$(document).ready(function(){
	var page=1;
	$('#prev').hide();
	$('#2').hide();
	$('#3').hide();
	

	$('#next').click(function(){
		if(page==1){
			$('#prev').show();
		$('#1').hide();
		$('#2').show();
		page++;
	}else if(page==2){
		$('#prev').show();
		$('#next').hide();
		$('#1').hide();
		$('#2').hide();
		$('#3').show();
		page++;
	}
		
	});

	$('#prev').click(function(){
	if(page==3){
		$('#prev').show();
		$('#next').show();
		$('#1').hide();
		$('#2').show();
		$('#3').hide();
		page--;
	}else if(page==2){
		$('#prev').hide();
		$('#next').show();
		$('#3').hide();
		$('#2').hide();
		$('#1').show();
		page--;
	}
		
	});


	$('.portfolio').click(function(){
		if( $('.about').hasClass('active')){
			$('.about').removeClass('active');
		} 
		if($('.certificates').hasClass('active')) {
			$('.certificates').removeClass('active');
		}
		if($('.contact').hasClass('active')){
			$('.contact').removeClass('active');
		}
		$(this).addClass('active');
	});

	$('.about').click(function(){
		if( $('.portfolio').hasClass('active')){
			$('.portfolio').removeClass('active');
		} 
		if($('.certificates').hasClass('active')) {
			$('.certificates').removeClass('active');
		}
		if($('.contact').hasClass('active')){
			$('.contact').removeClass('active');
		}
		$(this).addClass('active');
	});

	$('.certificates').click(function(){
		if( $('.about').hasClass('active')){
			$('.about').removeClass('active');
		} 
		if($('.portfolio').hasClass('active')) {
			$('.portfolio').removeClass('active');
		}
		if($('.contact').hasClass('active')){
			$('.contact').removeClass('active');
		}
		$(this).addClass('active');
	});

	$('.contact').click(function(){
		if( $('.about').hasClass('active')){
			$('.about').removeClass('active');
		} 
		if($('.certificates').hasClass('active')) {
			$('.certificates').removeClass('active');
		}
		if($('.portfolio').hasClass('active')){
			$('.portfolio').removeClass('active');
		}
		$(this).addClass('active'); 
	});
});