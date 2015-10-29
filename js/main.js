

$('.hero').first().addClass('shown');

var title = $('.hero').attr('alt');
$('h1').text(title);


$('.next,.prev').on('click',function(e){


$('.shown')
.next()
.addClass('shown')
.prev()
.removeClass('shown');

if ($('.shown').is(':last-child')){

	$('.shown').removeClass('shown')
			   .siblings(':first-child')
			   .addClass('shown');
};

var name = $('.shown').attr('alt');
$('.name').text(name);

});

//wolvorine is missed//