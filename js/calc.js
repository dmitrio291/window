/* start -------------------------------- Скрипты для секции .calculator-section -------------------------------- */
// const rangeHeightWindows = document.querySelector('.calculator--windows .calculator__range-height');
// const rangeWidthWindows = document.querySelector('.calculator--windows .calculator__range-width');
// const inputHeightWindows = document.querySelector('.calculator--windows .calculator__input.input-height');
// const inputWidthWindows = document.querySelector('.calculator--windows .calculator__input.input-width');

// const rangeHeightBalconies = document.querySelector('.calculator--glazing-balconies .calculator__range-height');
// const rangeWidthBalconies = document.querySelector('.calculator--glazing-balconies .calculator__range-width');
// const inputHeightBalconies = document.querySelector('.calculator--glazing-balconies .calculator__input.input-height');
// const inputWidthBalconies = document.querySelector('.calculator--glazing-balconies .calculator__input.input-width');

/* Универсальный скрипт на инициализацию ползунков слайдера для окон и балконов */
// function initRange(range, input, startValue, min, max) {
//     noUiSlider.create(range, {
//         start: startValue,
//         connect: 'lower',
//         range: {
//             'min': min,
//             'max': max
//         },
//         step: 1,
//         format: {
//             to: function(value) {
//                 return parseInt(value);
//             },
//             from: function(value) {
//                 return parseInt(value);
//             }
//         }
//     });

//     range.noUiSlider.on('update', function (values, handle) {
//         const value = values[handle];    
//         input.value = value;
//     });

//     input.addEventListener('change', function () {
//         range.noUiSlider.set(this.value);
//     });
// }

// if (rangeHeightWindows, inputHeightWindows, rangeWidthWindows, inputWidthWindows) {
//     initRange(rangeHeightWindows, inputHeightWindows, 110, 40, 220);
//     initRange(rangeWidthWindows, inputWidthWindows, 40, 40, 130);      
// }

// if (rangeHeightBalconies, inputHeightBalconies, rangeWidthBalconies, inputWidthBalconies) {
//     initRange(rangeHeightBalconies, inputHeightBalconies, 150, 50, 220);
//     initRange(rangeWidthBalconies, inputWidthBalconies, 150, 150, 600);      
// }

const windowsTypes = document.querySelectorAll('.calculator--glazing-balconies .calculator__list > li');
const windowImg = document.querySelector('.calculator--glazing-balconies .calculator__img');

if (windowsTypes && windowImg) {
    windowsTypes.forEach(window => {
        window.addEventListener('click', function() {
            const dataWindow = window.dataset.window;
            const dataWindowImg = window.dataset.windowImg;
            windowsTypes.forEach(window => {
                window.classList.remove('active');
            });
            this.classList.add('active');
            windowImg.src = dataWindow;
            windowImg.removeAttribute('class');
            windowImg.classList.add('calculator__img');
            windowImg.classList.add(dataWindowImg);
        });
    });
}

/* Скрипт на открытие выпающего списка с вариантами выбора окон */
const calculatorImgTabs = document.querySelectorAll('.calculator--windows .calculator__img-tab');
const calculatorListImg = document.querySelectorAll('.calculator--windows .calculator__list-img > li');
const calculatorImg = document.querySelector('.calculator--windows .calculator__img');

if (calculatorImgTabs && calculatorListImg && calculatorImg) {
    calculatorImgTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const nextElementSibling = this.nextElementSibling;
            const listImgActive = document.querySelectorAll('.calculator__list-img.active');
            listImgActive.forEach(list => list !== nextElementSibling ? list.classList.remove('active') : null);
            nextElementSibling.classList.toggle('active');
        });
    });

    calculatorListImg.forEach(img => {
        img.addEventListener('click', function() {
            calculatorImgTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            calculatorListImg.forEach(img => {
                img.classList.remove('active');
            });
            this.classList.add('active');
            const item = img.innerHTML;
            const imgTab = img.parentElement.parentElement.querySelector('.calculator__img-tab');
            imgTab.classList.add('active');
            imgTab.innerHTML = item;
            img.parentElement.classList.remove('active');
            const dataWindow = img.dataset.window;
            const dataWindowImg = img.dataset.windowImg;    
            calculatorImg.src = dataWindow;
            calculatorImg.removeAttribute('class'); 
            calculatorImg.classList.add('calculator__img');
            calculatorImg.classList.add(dataWindowImg);
        });
    });
}

jQuery(function($){	
	if($('.calculator-section.windows').length) {	
		var o_calc={
			selected: 'm1_1',
            v: 110,
            h: 40,
            need_otliv: 0,
            need_montazh: 0,		
		};			
			
		var calc_settings = {gluh: 4455, pov: 6860, pov_otk: 7280, otliv: 600, montazh: 1800, sr:0.35, skidka: 0.1, vashaeconomiya: 0.4, stoim_dver: 6000};			
			
		function o_calculate (){			
			switch (o_calc.selected) {
				case 'm1_1' : {var itog = $('#input-width').val() * $('#input-height').val() * calc_settings.gluh / 10000; break;}
				case 'm1_2' : {var itog = $('#input-width').val() * $('#input-height').val() * calc_settings.pov / 10000; break;}
				case 'm1_3' : {var itog = $('#input-width').val() * $('#input-height').val() * calc_settings.pov_otk / 10000; break;}
				
				/*двустворчатое окно с одной поворотной створкой*/
				case 'm2_1' : { 
					var itog = $('#input-width').val() * $('#input-height').val()* 0.5 * calc_settings.gluh / 10000 + $('#input-width').val() * $('#input-height').val() * 0.5 * calc_settings.pov / 10000;
					break;
				}	
				/*двустворчатое окно с двумя поворотными створками*/
				case 'm2_2' : { 
					var itog = $('#input-width').val() * $('#input-height').val()* 0.5 * calc_settings.pov / 10000 + $('#input-width').val() * $('#input-height').val() * 0.5 * calc_settings.pov / 10000;				
					break;
				}
				/*двустворчатое окно с одной поворотной и одной поворотно-откидной створкой*/
				case 'm2_3' : { 
					var itog = $('#input-width').val() * $('#input-height').val()* 0.5 * calc_settings.pov / 10000 + $('#input-width').val() * $('#input-height').val() * 0.5 * calc_settings.pov_otk / 10000;	
					break;
				}	
				/*двустворчатое окно с одной поворотно-откидной створкой*/
				case 'm2_4' : { 
					var itog = $('#input-width').val() * $('#input-height').val()* 0.5 * calc_settings.gluh / 10000 + $('#input-width').val() * $('#input-height').val() * 0.5 * calc_settings.pov_otk / 10000;	
					break;
				}					
				
				case 'm3_1' : { 
					var itog = $('#input-width').val() * $('#input-height').val()* 0.333333 * calc_settings.gluh / 10000 + $('#input-width').val() * $('#input-height').val() * 0.333333 * calc_settings.pov / 10000 + $('#input-width').val() * $('#input-height').val() * 0.333333 * calc_settings.gluh / 10000;
					break;
				}	
				case 'm3_2' : { 
					var itog = $('#input-width').val() * $('#input-height').val()* 0.333333 * calc_settings.pov / 10000 + $('#input-width').val() * $('#input-height').val() * 0.333333 * calc_settings.gluh / 10000 + $('#input-width').val() * $('#input-height').val() * 0.333333 * calc_settings.pov / 10000;	
					break;
				}	
				case 'm3_3' : { 
					var itog = $('#input-width').val() * $('#input-height').val()* 0.333333 * calc_settings.pov_otk / 10000 + $('#input-width').val() * $('#input-height').val() * 0.333333 * calc_settings.gluh / 10000 + $('#input-width').val() * $('#input-height').val() * 0.333333 * calc_settings.pov / 10000;
					break;
				}	
				case 'm4_1' : { 
					var itog = $('#input-width').val() * $('#input-height').val() * calc_settings.stoim_dver / 10000;
					break;
				}	
				case 'm4_2' : {
					var itog = $('#input-width').val() * $('#input-height').val() * calc_settings.stoim_dver / 10000;
					break;
				}	
								
			}

			var skidka = itog*calc_settings.skidka;
			itog = itog - skidka;
			
			if (o_calc.need_otliv==1){
				itog = itog + calc_settings.otliv * $('#input-width').val() * 0.01;
			}
			
			if (o_calc.need_montazh==1){
				itog=itog + calc_settings.montazh * $('#input-width').val() * $('#input-height').val() * 0.0001;
			}
			
			var rassr=itog/8; // рассрочка 8 месяцев
			var econ=itog * calc_settings.vashaeconomiya;
			var sr=itog+econ;	
			
			itog = Math.floor(itog);

			$('.calculator__installment-price').html(itog.toLocaleString());
			$('.calculator__offer-price').html(rassr.toFixed() + ' <span>Р/мес</span>');
			$('.average-price span').html(sr.toFixed());
			$('.economy span').html(econ.toFixed());
			
		}
		
		function init_calc (minwidth, maxwidth){
			$( '#input-width' ).val(minwidth);
			$( '#range-width' ).slider({
				range: 'min',
				value: minwidth,
				max: maxwidth,
				min: minwidth,
				animate: true,
				slide: function( event, ui ) {
					$( '#input-width' ).val( ui.value );
						o_calc.h= ui.value;
						o_calculate();
					}
			});		
		}

		$(function(){
			o_calculate();
			
			$( '#range-height' ).slider({
				range: 'min',
				value: 110,
				max: 220,
				min: 40,
				animate: true,
				slide: function( event, ui ) {
					$( '#input-height' ).val( ui.value );
					o_calc.v= ui.value;
					o_calculate();
				}
			});	
			
			$( '#range-width' ).slider({
				range: 'min',
				value: 40,
				max: 130,
				min: 40,
				animate: true,
				slide: function( event, ui ) {
					$( '#input-width' ).val( ui.value );
						o_calc.h= ui.value;
						o_calculate();
					}
			});
			
			$( '#input-height' ).on('keyup',function(){
				var a=$( '#input-height' ).val();
				   
				if ( parseInt(a) <0 ||  a==''){
					$( '#input-height' ).val(0);
					$( '#range-height' ).slider( 'value', '0' );
					o_calc.v= 0;
				}else{
				if ( parseInt(a) >300){a=300};
					$( '#input-height' ).val( parseInt(a));
					$( '#range-height' ).slider( 'value', parseInt(a) );
					o_calc.v= parseInt(a);
				}
				o_calculate();  
			});
			
			$( '#input-width' ).on('keyup',function(){
				var a=$( '#input-width' ).val();

				if ( parseInt(a) <0 ||  a==''){
					$( '#input-width' ).val(0);
					$( '#range-width' ).slider( 'value', '0' );
					o_calc.v= 0;
				}else{
					if ( parseInt(a) >500){a=500};
					$( '#input-width' ).val( parseInt(a));
					$( '#range-width' ).slider( 'value', parseInt(a) );
					o_calc.h= parseInt(a);
				}
				o_calculate();
			});	
			
			$('.need_otliv').click(function(){
				if ($(this).is(':checked') ){
					o_calc.need_otliv=1;
				}else{
					o_calc.need_otliv=0;
				}
				o_calculate();
			});
			
			$('.need_montazh').click(function(){
				if ($(this).is(':checked') ){
					o_calc.need_montazh=1;
				}else{
					o_calc.need_montazh=0;
				}
				o_calculate();
			});

			$('.calculator__list-img li').on('click', function(){
				o_calc.selected = $(this).attr('id')
				o_calculate();
				console.log(o_calc.selected);
			});	

			$('.calculator__list-img li').on('click', function(){
				if( $(this).parent().parent().is('#m1') ){
					init_calc (40, 130);
					o_calculate();
				}
				if( $(this).parent().parent().is('#m2') ){
					init_calc (90, 260);
					o_calculate();					
				}
				if( $(this).parent().parent().is('#m3') ){
					init_calc (135, 300);
					o_calculate();					
				}
			});			
 
		});
		$( '.ui-slider-handle' ).draggable();		
	}

	if($('.calculator-section.balconies').length) {	

		var o_calc={
			selected: 'b1',
					v: 110,
					h: 150,
					need_otliv: 0,
					need_montazh: 0,
			
		};			
			
		var calc_settings = {gluh: 2640, pov: 3840, pov_otk: 4200, otliv: 400, montazh: 1200, sr:0.35, skidka: 0.1, vashaeconomiya: 0.3, stoim_balk: 5850 };
		
		function o_calculate (){

			var itog = $('#input-width').val() * $('#input-height').val() * calc_settings.stoim_balk  / 10000; 
			shirinafin= parseInt($('#input-width').val());

			var skidka = itog*calc_settings.skidka;
			itog = itog - skidka;	
				

			if (o_calc.need_otliv==1){
				itog = itog + calc_settings.otliv * shirinafin * 0.01;
			}
			
			if (o_calc.need_montazh==1){
				itog = itog + calc_settings.montazh * shirinafin * $('#input-height').val() * 0.0001;
			}
			
			var rassr=itog/8; // рассрочка 8 месяцев
			var econ=itog * calc_settings.vashaeconomiya;
			var sr=itog+econ;	
			
			itog = Math.floor(itog);

			$('.calculator__installment-price').html(itog.toLocaleString());
			$('.calculator__offer-price').html(rassr.toFixed() + ' <span>Р/мес</span>');
			$('.average-price span').html(sr.toFixed());
			$('.economy span').html(econ.toFixed() + ' Р');
			
		}	

		function init_calc (minwidth, maxwidth){
			$( '#input-width' ).val(minwidth);
			$( '#range-width' ).slider({
				range: 'min',
				value: minwidth,
				max: maxwidth,
				min: minwidth,
				animate: true,
				slide: function( event, ui ) {
					$( '#input-width' ).val( ui.value );
						o_calc.h= ui.value;
						o_calculate();
					}
			});		
		}

		$(function(){
			o_calculate();

			$( "#range-height" ).slider({
				range: 'min',
				value: 110,
				max: 220,
				min: 50,
				animate: true,
				slide: function( event, ui ) {
					$( "#input-height" ).val( ui.value );
						o_calc.v= ui.value;
						o_calculate();
					}
			});
		 
			$( '#input-height' ).on('keyup',function(){
				var a=$( '#input-height' ).val();
				   
				if ( parseInt(a) <0 ||  a==''){
					$( '#input-height' ).val(0);
					$( "#range-height" ).slider( 'value', '0' );
					o_calc.v= 0;
				}else{
					if ( parseInt(a) >300){a=300};
					$( '#input-height' ).val( parseInt(a));
					$( "#range-height" ).slider( 'value', parseInt(a) );
					o_calc.v= parseInt(a);
				}
				o_calculate();  
			});	
			
			$( '#range-width' ).slider({
				range: 'min',			
				value: 150,
				max: 600,
				min: 150,
				animate: true,
				slide: function( event, ui ) {
					$( '#input-width' ).val( ui.value );
					o_calc.h= ui.value;
					o_calculate();
				}
			});

			$( '#input-width' ).on('keyup',function(){
				var a=$( '#input-width' ).val();

				if ( parseInt(a) <0 ||  a==''){
					$( '#input-width' ).val(0);
					$( '#range-width' ).slider( 'value', '0' );
					o_calc.v= 0;
				}else{
					if ( parseInt(a) >750){a=750};
					$( '#input-width' ).val( parseInt(a));
					$( '#range-width' ).slider( 'value', parseInt(a) );
					o_calc.h= parseInt(a);

				}
				o_calculate();
			});		

			$('.need_otliv').click(function(){
				if ($(this).is(':checked') ){
					o_calc.need_otliv=1;
				}else{
					o_calc.need_otliv=0;
				}
				o_calculate();
			});
			
			$('.need_montazh').click(function(){
				if ($(this).is(':checked') ){
					o_calc.need_montazh=1;
				}else{
					o_calc.need_montazh=0;
				}
				o_calculate();
			});	

			$('.calculator__list li').on('click', function(){
				if( $(this).is('#b1') ){
					init_calc (150, 600);
					o_calculate();
				}
				if( $(this).is('#b2') ){
					init_calc (250, 840);
					o_calculate();
				}
				if( $(this).is('#b3') ){
					init_calc (350, 840);
					o_calculate();
				}				
			});			
			
		});	
		$( '.ui-slider-handle' ).draggable();
	}
	
});
/* end -------------------------------- Скрипты для секции .calculator-section ---------------------------------- */