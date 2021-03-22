$(function(){

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
        // responsive: [
        //     {
        //       breakpoint: 1200,
        //       settings: {
        //         dots: false
        //       }
        //     },
        // ]
    });

    $('.menu__btn').on('click', function(){  // меню по клику
        $('.menu__list').toggleClass('menu__list--active');
    });

});

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
