$(document).ready(function(){
	$('button').on('click', function(){
		$('.quote').slideDown('slow');
		$('main').slideDown();
		$('section').slideDown();
		$('footer').slideDown();
		$(this).remove();
	});
});

