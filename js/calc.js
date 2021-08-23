/* start -------------------------------- Скрипты для секции .calculator-section -------------------------------- */
const rangeHeightWindows = document.querySelector('.calculator--windows .calculator__range-height');
const rangeWidthWindows = document.querySelector('.calculator--windows .calculator__range-width');
const inputHeightWindows = document.querySelector('.calculator--windows .calculator__input.input-height');
const inputWidthWindows = document.querySelector('.calculator--windows .calculator__input.input-width');

const rangeHeightBalconies = document.querySelector('.calculator--glazing-balconies .calculator__range-height');
const rangeWidthBalconies = document.querySelector('.calculator--glazing-balconies .calculator__range-width');
const inputHeightBalconies = document.querySelector('.calculator--glazing-balconies .calculator__input.input-height');
const inputWidthBalconies = document.querySelector('.calculator--glazing-balconies .calculator__input.input-width');

/* Универсальный скрипт на инициализацию ползунков слайдера для окон и балконов */
function initRange(range, input, startValue, min, max) {
    noUiSlider.create(range, {
        start: startValue,
        connect: 'lower',
        range: {
            'min': min,
            'max': max
        },
        step: 1,
        format: {
            to: function(value) {
                return parseInt(value);
            },
            from: function(value) {
                return parseInt(value);
            }
        }
    });

    range.noUiSlider.on('update', function (values, handle) {
        const value = values[handle];    
        input.value = value;
    });

    input.addEventListener('change', function () {
        range.noUiSlider.set(this.value);
    });
}

if (rangeHeightWindows, inputHeightWindows, rangeWidthWindows, inputWidthWindows) {
    initRange(rangeHeightWindows, inputHeightWindows, 110, 40, 220);
    initRange(rangeWidthWindows, inputWidthWindows, 40, 40, 130);      
}

if (rangeHeightBalconies, inputHeightBalconies, rangeWidthBalconies, inputWidthBalconies) {
    initRange(rangeHeightBalconies, inputHeightBalconies, 150, 50, 220);
    initRange(rangeWidthBalconies, inputWidthBalconies, 150, 150, 600);      
}

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
/* end -------------------------------- Скрипты для секции .calculator-section ---------------------------------- */