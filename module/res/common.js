document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')



$(function() {
	$('.close.ui.basic.button').click(function() {
		$('nav').toggle();
		$('.frame').toggleClass('closeNav');
	})



	var content = [
	{ title: '#1학기' },
	{ title: '#2018년' },
	{ title: '#2019년' },
	{ title: '#2학기' },
	{ title: '#데이터베이스' },
	{ title: '#프로젝트' },
	{ title: '#안드로이드' },
	{ title: '#Java' },
	{ title: '#Angola' }
	];

	$('.ui.search').search({
		source: content
	});
	$(".test").on("click",function(event){
		event.stopPropagation();
	});

	$('#target').accordion({
		exclusive: false
	});
	$('.ui.rating').rating();

	$('.icon.setting').click(function(event) {
		$('.ui.modal').modal('show');
	});

	$('.ui.dropdown').dropdown();
});