/* start ---------------------------------- Скрипты для блока .quiz-wrap ---------------------------------------- */
const quizStep = document.querySelector('.quiz-step');
const quizBtn = document.querySelectorAll('.quiz-btn');
const calcWindowsQuiz = document.querySelector('.calc-windows-quiz');

if (quizBtn) {
    quizBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const calcWindowsQuiz = document.querySelector('.calc-windows-quiz.none');
            if (calcWindowsQuiz) {
                calcWindowsQuiz.classList.remove('none');
                calcWindowsQuiz.classList.add('quiz-open__modal');
            }
        });
    });
}

if(quizStep) {
    jQuery(document).ready(function($){ 
        let j=1;
        for (let i=1;i<10;i++) {
            if (i==2) continue;
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
        });

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
        start_btn = '.quiz-btn';
        start_btn = $(start_btn);
        PrefixedEvent(pbl.get(0), "TransitionEnd", TransitionListener);
        start_btn.on('click', quiz_open);
        $('.open-calc').on('click', quiz_open);
        
        ovrl.on('click', quiz_close);
        $('.btn-dialog__close').on('click', quiz_close);
        
        function quiz_open() {
            $('.quiz-step', form).removeClass('quiz-show-step');
            pbl.removeClass('quiz-full-p');
            document.getElementById("quiz_form").reset();
            currstep = 1;
            stepmark.text('Шаг '+currstep+' из 8');
            bprev.prop('disabled', true);
            bnext.prop('disabled', false);
            $('.quiz-step-1', form).addClass('quiz-show-step');
            nav.removeClass('quiz-hide');
            ovrl.addClass('quiz-open');
            $('body').addClass('scroll-hidden');    
        }

        function quiz_close() {
            $('.quiz-step-big-img').css('background-image', 'none');
            ovrl.removeClass('quiz-open');
            document.getElementById("quiz_form").reset();

            $('.quiz-step', form).removeClass('quiz-show-step');
            pbl.removeClass('quiz-full-p');
            currstep = 1;
            stepmark.text('Шаг '+currstep+' из 8');
            bprev.prop('disabled', true);
            bnext.prop('disabled', false);
            $('.quiz-step-1', form).addClass('quiz-show-step');
            nav.removeClass('quiz-hide');
            if($('.calc-windows-quiz.quiz-open__modal').length){
				$('.calc-windows-quiz.quiz-open__modal').removeClass('quiz-open__modal');
				$('.calc-windows-quiz').addClass('none');
			}
			$('body').removeAttr('class');
        }

        $('label',form).on('click',function(e) {
            e.preventDefault();
            $(this).children('input[type=radio]').prop('checked', true).trigger('change');var chkbxs=$(this).children('input[type=checkbox]'); 
            chkbxs.prop('checked', !chkbxs.prop('checked')).trigger('change');
        });

        bnext.on('click', function() {
            bprev.prop('disabled', false);i_check=false;
            if(++currstep>8) {            
                nav.addClass('quiz-hide');
                setTimeout( function(){pbl.addClass('quiz-full-p');}, 100 );
            }

            $('label input',$(step+currstep)).each(function() {i_check = i_check || $(this).prop('checked');});

            if (i_check) bnext.prop('disabled', false);

            $(step+(currstep-1)).removeClass('quiz-show-step');

            $(step+currstep).addClass('quiz-show-step');

            stepmark.text('Шаг '+currstep+' из 8');            
        });

        $(main).on('click', function(e){e.stopPropagation()});

        bprev.on('click', function() {
            bnext.prop('disabled', false);
            if(--currstep<2) {
            bprev.prop('disabled', true); }
            $(step+(currstep+1)).removeClass('quiz-show-step');
            $(step+currstep).addClass('quiz-show-step');
            stepmark.text('Шаг '+currstep+' из 8');
        });
    
        form.on('change', 'label input', function () {
            i_check=false;
                
            if ($(this).attr('type') == 'radio') $('input[type=checkbox]',$(this).parent().siblings()).prop('checked', false);
            if ($(this).attr('type') == 'checkbox') $('input[type=radio]',$(this).parent().siblings()).prop('checked', false);
                
            $('label input',$(step+currstep)).each(function() {i_check = i_check || $(this).prop('checked');});
            if (i_check) {bnext.prop('disabled', false);
            $(this).parent().nextAll('.quiz-showroom').find('.quiz-step-big-img').css('background-image', 'url(' + $(this).nextAll('.quiz-step-label-img').find('img').attr('src') + ')');}
            else {bnext.prop('disabled', true);
            $(this).parent().nextAll('.quiz-showroom').find('.quiz-step-big-img').css('background-image', 'url()');}
        });            
    });
}
/* end ---------------------------------- Скрипты для блока .quiz-wrap ------------------------------------------ */