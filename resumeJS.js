$(document).ready(function(){
	$('button').on('click', function(){
		$('.quote').slideDown();
		$('main').slideDown();
		$('section').slideDown();
		$(this).remove();
	});
});

