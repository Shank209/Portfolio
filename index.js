$('#nav span').hover(function() {
	$(this).stop().animate({'color':'black', 'font-size':'24px'}, 100);

	$('#nav').stop().animate({'margin-bottom':'34px'} , 100);
}, function(){
	$(this).stop().animate({'color':'#f2f2f2', 'font-size':'18px'}, 100);

	$('#nav').stop().animate({'margin-bottom':'40px'} , 100);
});

$('#aboutLink').click(function() {
	$('html, body').animate({'scrollTop':$('#about').offset().top} ,500);
});

$('#workLink').click(function() {
	$('html, body').animate({'scrollTop':$('#work').offset().top} ,500);
});

$('#contactLink').click(function() {
	$('html, body').animate({'scrollTop':$('#contact').offset().top} ,1500);
});