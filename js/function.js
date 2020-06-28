jQuery(document).ready(function($) {
	const show_more = {
		fun: () => {
			$('.education-items .item').each(function(index, el) {
				if($(this).find('ul li').last().index() > 4){
					$(this).addClass('has-show-more');
					$(this).find('ul').nextAll('p').addClass('hide-p')
				}
			});

			$('.education-items .show-more a').click(function(event) {
				event.preventDefault();
				$(this).parents('.item').removeClass('has-show-more').addClass('active');
			});


		}
	}
	show_more.fun();
	const auncor = {
		fun: () => {
			jQuery('a.auncor').click(function(event){
				history.pushState({}, "", $(this).attr('href'));
				var target = $(this).attr('href').replace('/', '');
				var scroll_t = $(window).scrollTop();
				if(scroll_t<=60){
					$('html, body').stop(true, false).animate({scrollTop: $(target).offset().top - 0}, 900);
				}
				else{
					$('html, body').stop(true, false).animate({scrollTop: $(target).offset().top - 0}, 900);
				}
				return false;
			});
		}
	}
	auncor.fun();
	const moda_window = {
		fun: ()=>{
			$('body').on('click', 'a[data-modal]', function(event){
				event.preventDefault();
				$('.modal-window').fadeOut(400).removeClass('active');
				var data_modal = $(this).attr('data-modal');
				$('.modal-window[data-modal="' + data_modal +'"]').fadeIn(400).addClass('active');
				$('html, body').addClass('overflow-body')
				function_iframe();
				jQuery(window).resize(function() {
					clearTimeout(window.resizedFinished);
					window.resizedFinished = setTimeout(function(){
						function_iframe();
					}, 500);
				});
			});
			$('body').on('click', '.close-win', function(event){
				$('.modal-window').fadeOut(400);
				$('.modal-window').removeClass('active');
				$('.video-window').find('iframe').attr('src', ' ');
				$('html, body').removeClass('overflow-body');
			});
			jQuery('.modal-window').click( function(event){
				if(jQuery(event.target).closest(".window").length ) 
				return;
					$('.modal-window').fadeOut(400);
					$('.modal-window').removeClass('active');
					$('.video-window').find('iframe').attr('src', ' ');
					$('html, body').removeClass('overflow-body');
				event.stopPropagation();
			});
			/*video-items*/
		}
	} 
	moda_window.fun();
});