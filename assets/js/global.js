$(function(){
	console.log('hello jquery is linked');
	$('.bell').on('click', function(){
		$('.alert').addClass('open');
	});
	$('.close').on('click', function (){
		$('.alert').removeClass('open');
	});
});