const quizStep = document.querySelector('.quiz-step');
const quizBtn = document.querySelectorAll('.quiz-btn');
const calcBalconyQuiz = document.querySelector('.calc-balcony');

if (quizBtn) {
    quizBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const calcBalconyQuiz = document.querySelector('.calc-balcony.none');
            if (calcBalconyQuiz) {
                calcBalconyQuiz.classList.remove('none');
                calcBalconyQuiz.classList.add('quiz-open__modal');
            }
        });
    });
}

if (quizStep) {
	jQuery(document).ready(function($){ 

		// передвижение ползунка в мобильных устройствах	
		$( '.ui-slider-handle' ).draggable();
	
		let j=1, width = ($( window ).width()<768);
		for (let i=2;i<7;i++) {
			$('.quiz-step-' + i + ' .quiz-step-label-img').each(function(ii){
				$(this).attr('data-tooltip-content','#tooltip_content' + j);
				j++;
			});		
		}
		$('.tooltips').tooltipster({
						interactive: true,
						theme: 'tooltipster-shadow'
					});
		$('.tooltip_templates img').on('load', function(){
						$('.tooltips').tooltipster('reposition')
					})
		var pfx = ["webkit", "moz", "MS", "o", ""];
		
		function scroll_to_header() {
			$('.quiz-overlay').scrollTop( 0 );
		}
	  
		function PrefixedEvent(element, type, callback) {
		for (var p = 0; p < pfx.length; p++) {
			if (!pfx[p]) type = type.toLowerCase();
			element.addEventListener(pfx[p]+type, callback, false);
			}
		}
		
		function TransitionListener() {
			$(step+currstep).removeClass('quiz-show-step');
			$(step+(currstep+1)).addClass('quiz-show-step');
		}
		
		var form = $('#quiz_form'), img_to_set_1 = $('.quiz-step-1-big-img','.quiz-showroom'),main=$('.quiz-container'),bprev=$('.quiz-nav-prev', main), bnext=$('.quiz-nav-next', main), currstep = 1, step= '.quiz-step-', stepmark = $('.quiz-nav-step'), pb=$('.quiz-progress-bar',form),pbl = $('.quiz-progress-label',form), nav = $('.quiz-nav',form),start_btn,ovrl=$('.quiz-overlay'),i_check;
		start_btn = 'button.quiz-btn';
		start_btn = $(start_btn);
		PrefixedEvent(pbl.get(0), "TransitionEnd", TransitionListener);
		start_btn.on('click', quiz_open);
		
		setTimeout(() => {
				if (!cookies.pobl) {
					start_btn.trigger('click');
					cookies.pobl = true;
				}
				  
			}, 30000);
	
		ovrl.on('click', quiz_close);
		$('.btn-dialog__close').on('click', quiz_close);
	
		function quiz_open() {
			$('.quiz-step', form).removeClass('quiz-show-step');
			pbl.removeClass('quiz-full-p');
			$( "#amountx" ).val( $( "#slider-h" ).slider( "value" ));
			$( "#amounty" ).val( $( "#slider-vertical" ).slider( "value" ));
			$( "#amountyx" ).val( $( "#slider-hv" ).slider( "value" ));
			currstep = 1;
			stepmark.text('Шаг '+currstep+' из 6');
			bprev.prop('disabled', true);
			$('.quiz-step-1', form).addClass('quiz-show-step');
			nav.removeClass('quiz-hide');
			ovrl.addClass('quiz-open');

			if( $('.quiz-overlay').hasClass('quiz-open__inline') ){
				$('.quiz-overlay').removeClass('quiz-open__inline');
			}			
			
            $('body').addClass('scroll-hidden');
		}
		function quiz_close() {
			if(ovrl.hasClass('quiz-open')){
			$('.quiz-step-big-img').css('background-image', 'none');
			ovrl.removeClass('quiz-open');
			document.getElementById("quiz_form").reset();
			//////////////////////////////////////////////////////
			$('.quiz-step', form).removeClass('quiz-show-step');
			pbl.removeClass('quiz-full-p');
			$( "#amountx" ).val( $( "#slider-h" ).slider( "value" ));
			$( "#amounty" ).val( $( "#slider-vertical" ).slider( "value" ));
			$( "#amountyx" ).val( $( "#slider-hv" ).slider( "value" ));
			currstep = 1;
			stepmark.text('Шаг '+currstep+' из 6');
			bprev.prop('disabled', true);
			bnext.prop('disabled', false);
			$('.quiz-step-1', form).addClass('quiz-show-step');
			nav.removeClass('quiz-hide');
			//////////////////////////////////////////////////////

			if($('.calc-balcony.quiz-open__modal').length){
				$('.calc-balcony.quiz-open__modal').removeClass('quiz-open__modal');
				$('.calc-balcony').addClass('none');
			}
			
			if( $('.quiz-overlay').hasClass('quiz-open__inline') ){
				$('.quiz-overlay').removeClass('quiz-open__inline');
			}			
			
			$('body').removeAttr('class');
			}
		}
		$( "#slider-vertical" ).slider({
		  orientation: "vertical",
		  animate: "fast",
		  range: "min",
		  min: 90,
		  max: 320,
		  value: 140,
		  slide: function( event, ui ) {
			$( "#amounty" ).val( ui.value );
		  }
		});
		$( "#slider-h" ).slider({
		  animate: "fast",
		  range: "min",
		  min: 120,
		  max: 900,
		  value: 320,
		  slide: function( event, ui ) {
			$( "#amountx" ).val( ui.value );
		  }
		});
		$( "#slider-hv" ).slider({
		  animate: "fast",
		  range: "min",
		  min: 90,
		  max: 320,
		  value: 140,
		  slide: function( event, ui ) {
			$( "#amountyx" ).val( ui.value );
			$( "#amounty" ).val( ui.value );
		  }
		});
		$('label',form).on('click',function(e) {
		e.preventDefault();
		$(this).children('input[type=radio]').prop('checked', true).trigger('change');var chkbxs=$(this).children('input[type=checkbox]'); 
		chkbxs.prop('checked', !chkbxs.prop('checked')).trigger('change');
		});
		bnext.on('click', function() {
			bprev.prop('disabled', false);i_check=false;
			if(++currstep>6) {
			
				nav.addClass('quiz-hide');	
				setTimeout( function(){pbl.addClass('quiz-full-p');}, 100 );
			}
			$('label input',$(step+currstep)).each(function() {i_check = i_check || $(this).prop('checked');});
			if (i_check) bnext.prop('disabled', false);
			$(step+(currstep-1)).removeClass('quiz-show-step');
			$(step+currstep).addClass('quiz-show-step');
			stepmark.text('Шаг '+currstep+' из 6');
			scroll_to_header();
			/////////////////////////////////////////////////////////////////////////////
			if (!cookies.pobl) {
					cookies.pobl = true;
				}
			/////////////////////////////////////////////////////////////////////////////
			
		});
		$(main).on('click', function(e){e.stopPropagation()});
		bprev.on('click', function() {
			bnext.prop('disabled', false);
			if(--currstep<2) {
			bprev.prop('disabled', true); }
			$(step+(currstep+1)).removeClass('quiz-show-step');
			$(step+currstep).addClass('quiz-show-step');
			stepmark.text('Шаг '+currstep+' из 6');
			scroll_to_header();
		});
		form.on('change', 'input[name=quiz_step1]', function () {
			img_to_set_1.css('background-image', 'url(' + $(this).nextAll('.quiz-step-1-label-img').find('img').attr('src') + ')');
			bnext.prop('disabled', false);
		});
		form.on('change', 'label input:not([name=quiz_step1])', function () {
			i_check=false;
				
				if ($(this).attr('type') == 'radio') $('input[type=checkbox]',$(this).parent().siblings()).prop('checked', false);
				if ($(this).attr('type') == 'checkbox') $('input[type=radio]',$(this).parent().siblings()).prop('checked', false);
				
			$('label input',$(step+currstep)).each(function() {i_check = i_check || $(this).prop('checked');});
			if (i_check) {bnext.prop('disabled', false);
			$(this).parent().nextAll('.quiz-showroom').find('.quiz-step-big-img').css('background-image', 'url(' + $(this).nextAll('.quiz-step-label-img').find('img').attr('src') + ')');}
			else {bnext.prop('disabled', true);
			$(this).parent().nextAll('.quiz-showroom').find('.quiz-step-big-img').css('background-image', 'url()');}
		});
		form.on('submit', function (e) {
			e.preventDefault();
			var btn = $('.quiz-form-send');
			var sform = jQuery(this);	
			var data = sform.serialize();
			var err = false;
			
			$(form).find('input,textarea').each(function(){
				$(this).removeClass('error');
				if($(this).val() == '' && ($(this).attr('type') != 'email') && ($(this).attr('type') != 'file') && ($(this).attr('type') != 'hidden')){        
					$(this).addClass('error');
					setTimeout(function(){
					var elem = $('.error');
					$(elem).removeClass('error');
					$(elem).focus();
					},2000);
				err = true;
				return false;	
				}
				if($(this).val() == '' && ($(this).attr('type') == 'email')){
					var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
					var mail = $(this).val();
					if(reg.test(mail) == false)	{
					$(this).addClass('error');
					setTimeout(function(){
						var elem = $('.error');
						$(elem).removeClass('error');
						$(elem).focus();
						},2000);
					err = true;
					return false;
					}
				}
			});
			if (err == true) return false;	
				
			jQuery.ajax({
				type: 'POST',
				url: url + '/libs/pobl-modal/php/forms.php',
				data: data,
				beforeSend: function(data) { // сoбытиe дo oтпрaвки
								$(btn).prop('disabled', true);
				},
				error: function() {},
				success: function(data) {
							if(data == 'true') {
								//alert('Ваше сообщение отпрвлено!');
								$('#complete').parent().addClass('open');
								setTimeout( function(){
									$('#complete').addClass('open');
								}, 350);
								if( typeof metrika_func == 'function' ) {
									metrika_func();
								}
								if( typeof google_analytics == 'function' ) {
									google_analytics();
								}								
							}
							else {
								$('#repeat').parent().addClass('open');
								setTimeout( function(){
									$('#repeat').addClass('open');
								}, 350);							
							}						
				},
				complete: function(data) { // сoбытиe пoслe любoгo исхoдa
								$('.quiz-step', form).removeClass('quiz-show-step');	
								$('.quiz-step-1', form).addClass('quiz-show-step');							
								ovrl.removeClass('quiz-open');
								nav.removeClass('quiz-hide');
								currstep = 1;
								stepmark.text('Шаг '+currstep+' из 6');
								pbl.removeClass('quiz-full-p');
								bprev.prop('disabled', true);
								bnext.prop('disabled', false);
								nav.removeClass('quiz-hide');
				
								$(btn).prop('disabled', false);
								$(form)[0].reset(); // очищаем поля формы
				}									
			});
		});
			
	  });
} 


