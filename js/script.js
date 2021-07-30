document.addEventListener('DOMContentLoaded', () => {
    // Универсальня функция, которая показывает/скрывает аккордеон
    const accordionToggle = (toggles) => {
        toggles.forEach(toggle => {
            toggle.addEventListener('click', e => {
                accordionToggles.forEach(toggle => {
                    if (toggle !== event.target && toggle.classList.contains('active')) {
                        toggle.classList.remove(('active'));
                        toggle.nextElementSibling.classList.remove('active');
                    }
                });

                toggle.classList.toggle(('active'));
                toggle.nextElementSibling.classList.toggle('active');
            });
        });
    };

    /* start -------------------------------- Скрипты для секции .header -------------------------------------------- */
    const burgers = document.querySelectorAll('.burger');
    const headerPopup = document.querySelector('.header-popup');
    const headerPopupClose = headerPopup.querySelector('.header-popup__close');

    burgers.forEach(burger => {
        burger.addEventListener('click', () => {
            headerPopup.style.display = 'block';
            headerPopupClose.addEventListener('click', () => headerPopup.style.display = 'none');
        });
    });
    /* end -------------------------------- Скрипты для секции .header ---------------------------------------------- */

    /* start -------------------------------- Скрипты для кнопки вверх .scroll-top ---------------------------------- */
    const ScrollTopBtn = document.querySelector('.scroll-top');

    if (ScrollTopBtn) {
        ScrollTopBtn.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });

        window.addEventListener('scroll', () => {
            const topOffset = window.pageYOffset;
            (topOffset >= 500) ? ScrollTopBtn.classList.add('active') : ScrollTopBtn.classList.remove('active');
        });
    }
    /* end -------------------------------- Скрипты для кнопки вверх .scroll-top ------------------------------------ */

    /* start -------------------------------- Скрипты для секции .calculator-section -------------------------------- */
    const rangeHeight = document.querySelector('.calculator__range-height');
    const rangeWidth = document.querySelector('.calculator__range-width');
    const inputHeight = document.querySelector('.calculator__input.input-height');
    const inputWidth = document.querySelector('.calculator__input.input-width');

    function initRange(range, input) {
        noUiSlider.create(range, {
            start: 1500,
            connect: 'lower',
            range: {
                'min': 0,
                'max': 4300
            },
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

    if (rangeHeight, inputHeight, rangeWidth, inputWidth) {
        initRange(rangeHeight, inputHeight);
        initRange(rangeWidth, inputWidth);      
    }
    /* end -------------------------------- Скрипты для секции .calculator-section ---------------------------------- */

    /* start ---------------------------------- Скрипты для секции .windows-factory-section ------------------------- */
    const windowsFactorySlider = document.querySelector('.windows-factory__slider');

    if (windowsFactorySlider) {
        if (window.innerWidth <= 1023 && windowsFactorySlider.dataset.mobile === 'false') {
            const windowsFactorySwiper = new Swiper(windowsFactorySlider, {
                slidesPerView: 1,
                slideClass: 'windows-factory__slide',
                wrapperClass: 'windows-factory__wrap',
                pagination: {
                    el: '.windows-factory__pagination',
                    type: 'bullets',
                    clickable: true
                },
                loop: true,
                navigation: {
                    nextEl: '.windows-factory__next',
                    prevEl: '.windows-factory__prev'
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2
                    }
                }
            });

            windowsFactorySlider.dataset.mobile = 'true';
        }

        if (window.innerWidth > 1023) {
            windowsFactorySlider.dataset.mobile  = 'false';
        }
    }
    /* end ---------------------------------- Скрипты для секции .windows-factory-section --------------------------- */

    /* start ---------------------------------- Скрипты для секции .discounts-section ------------------------------- */
    const discountsSlider = document.querySelector('.discounts-slider');

    if (discountsSlider) {
        const discountsSwiper = new Swiper(discountsSlider, {
            slidesPerView: 1.25,
            autoHeight: true,
            spaceBetween: 1,
            slideClass: 'discounts-slider__slide',
            wrapperClass: 'discounts-slider__wrap',
            pagination: {
                el: '.discounts-slider__pagination',
                type: 'bullets',
                clickable: true
            },
            loop: true,
            navigation: {
                nextEl: '.discounts-slider__next',
                prevEl: '.discounts-slider__prev'
            },
            breakpoints: {
                768: {
                    slidesPerView: 2.6
                },
                1024: {
                    slidesPerView: 3.4
                }
            }
        });
    }
    /* end ---------------------------------- Скрипты для секции .discounts-section --------------------------------- */

    /* start ---------------------------------- Скрипты для секции .brands-section ---------------------------------- */
    const brandsSlider = document.querySelector('.brands-slider');

    if (brandsSlider) {
        const brandsSwiper = new Swiper(brandsSlider, {
            slidesPerView: 1,
            autoHeight: true,
            spaceBetween: 1,
            slideClass: 'brands-slider__slide',
            wrapperClass: 'brands-slider__wrap',
            spaceBetween: 40,
            autoHeight: true,            
            pagination: {
                el: '.brands-pagination',
                type: 'bullets',
                clickable: true,
                renderBullet: function (index, className) {
                    let productname = document.querySelectorAll('.brands-slider__slide')[index+1].dataset.brand;
                    return `<span class="${className}">${(productname)}</span>`;
                }
            },
            loop: true,
            navigation: {
                nextEl: '.brands-nav__next',
                prevEl: '.brands-nav__prev'
            }
        });
    }
    /* end ---------------------------------- Скрипты для секции .brands-section ------------------------------------ */

    /* start ---------------------------------- Скрипты для секции .profile-section --------------------------------- */
    const profileBox = document.querySelector('.profile__box');
    const profileBtn = document.querySelector('.profile__btn');
    const profileBtnText = document.querySelector('.profile__btn .text');

    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            profileBox.classList.toggle('active');
            profileBtn.classList.toggle('active');
    
            if (profileBtn.dataset.options === 'hidden') {
                profileBtnText.textContent = 'Свернуть';
                profileBtn.dataset.options = 'visible';
            } else if (profileBtn.dataset.options === 'visible') {
                profileBtnText.textContent = 'Подробнее';
                profileBtn.dataset.options = 'hidden';
            }
        });
    }
    /* end ---------------------------------- Скрипты для секции .profile-section ----------------------------------- */

    /* start ---------------------------------- Скрипты для секции .sketches-section---------------------------------- */
    const sketchesInput = document.querySelector('.form-sketches--1 .form-sketches__none');
    const sketchesText = document.querySelector('.form-sketches--1 .form-sketches__upload-text');
    const sketchesIcon = document.querySelector('.form-sketches--1 .form-sketches__icon');

    if (sketchesInput && sketchesText && sketchesIcon) {
        sketchesInput.addEventListener('change', () => {
            sketchesText.textContent = 'Эскиз загружен';
            sketchesText.style.color = '#F26422';
            sketchesIcon.style.backgroundImage = "url('../img/sketches-icon-3.svg')";
        });
    }
    /* end ---------------------------------- Скрипты для секции .sketches-section ---------------------------------- */

    /* start ---------------------------------- Скрипты для секции .examples-section---------------------------------- */
    const examplesSlider = document.querySelectorAll('.examples-slider');
    const dataFancybox = document.querySelector('[data-fancybox]');

    const examplesSliderInit = (slider) => {
        const examplesSwiper = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 10,
            slideClass: 'examples-slider__slide',
            wrapperClass: 'examples-slider__wrap',
            pagination: {
                el: '.examples-slider__pagination',
                type: 'bullets',
                clickable: true
            },
            loop: true,
            navigation: {
                nextEl: '.examples-slider__next',
                prevEl: '.examples-slider__prev'
            }
        });
    };

    if (examplesSlider) {
        examplesSlider.forEach((slider) => examplesSliderInit(slider));
    }
    
    if (dataFancybox) $.fancybox.defaults.backFocus = false;
    /* end ---------------------------------- Скрипты для секции .examples-section------------------------------------ */

    /* start ---------------------------------- Скрипты для секции .sketches-section 2-ой вариант ------------------- */
    const sketchesInput2 = document.querySelector('.form-sketches--2 .form-sketches__none');
    const sketchesText2 = document.querySelector('.form-sketches--2 .form-sketches__upload-text');
    const sketchesIcon2 = document.querySelector('.form-sketches--2 .form-sketches__icon');

    if (sketchesInput2 && sketchesText2 && sketchesIcon2) {
        sketchesInput2.addEventListener('change', () => {
            sketchesText2.textContent = 'Эскиз загружен';
            sketchesText2.style.color = '#F26422';
            sketchesIcon2.style.backgroundImage = "url('../img/sketches-icon-3.svg')";
        });
    }
    /* end ---------------------------------- Скрипты для секции .sketches-section 2-ой вариант -------------------- */

    /* start ---------------------------------- Скрипты для секции .additionally-slider-section ---------------------- */
    const additionallySlider = document.querySelector('.additionally-slider');

    if (additionallySlider) {
        const discountsSwiper = new Swiper(additionallySlider, {
            slidesPerView: 1.2,
            autoHeight: true,
            spaceBetween: 1,
            autoplay: true,
            slideClass: 'additionally-slider__slide',
            wrapperClass: 'additionally-slider__wrap',
            pagination: {
                el: '.additionally-slider__pagination',
                type: 'bullets',
                clickable: true
            },
            loop: true,
            navigation: {
                nextEl: '.additionally-slider__next',
                prevEl: '.additionally-slider__prev'
            },
            breakpoints: {
                768: {
                    slidesPerView: 2.4
                },
                1024: {
                    slidesPerView: 3
                }
            }
        });
    }
    /* end ---------------------------------- Скрипты для секции .additionally-slider-section ------------------------ */

    /* start ---------------------------------- Скрипты для секции .windows-slider-section -------------------------- */
    const windowsSlider = document.querySelector('.windows-slider');

    if (windowsSlider) {
        if (window.innerWidth <= 1023 && windowsSlider.dataset.mobile === 'false') {
            const windowsSwiper = new Swiper(windowsSlider, {
                slidesPerView: 1.15,
                slideClass: 'windows-slider__slide',
                wrapperClass: 'windows-slider__wrap',
                pagination: {
                    el: '.windows-slider__pagination',
                    type: 'bullets',
                    clickable: true
                },
                loop: true,
                navigation: {
                    nextEl: '.windows-slider__next',
                    prevEl: '.windows-slider__prev'
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2.3
                    }
                }
            });

            windowsSlider.dataset.mobile = 'true';
        }

        if (window.innerWidth > 1023) {
            windowsSlider.dataset.mobile  = 'false';
        }
    }
    /* end ---------------------------------- Скрипты для секции .windows-slider-section ---------------------------- */

    /* start ---------------------------------- Скрипты для секции .reviews-section --------------------------------- */
    const reviewsSlider = document.querySelector('.reviews-slider');
    if (reviewsSlider) {
        const reviewsSwiper = new Swiper(reviewsSlider, {
            slidesPerView: 1.20,
            spaceBetween: 10,
            autoplay: true,
            loop: true,
            slideClass: 'reviews-slider__slide',
            wrapperClass: 'reviews-slider__wrap',
            pagination: {
                el: '.reviews-slider__pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.reviews-slider__next',
                prevEl: '.reviews-slider__prev'
            },
            breakpoints: {
                768: {
                    slidesPerView: 2.4,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });
    }
    /* end ---------------------------------- Скрипты для секции .reviews-section ----------------------------------- */

    /* start ---------------------------------- Скрипты для секции .profitable-windows-section ---------------------- */
    const profitableMoreBtn = document.querySelector('.profitable-windows__more-btn');

    if (profitableMoreBtn) {
        profitableMoreBtn.addEventListener('click', function() {
            let showPerClick = 3;
    
            const hidden = this.parentNode.querySelectorAll('li.hidden');
            for (let i = 0; i < showPerClick; i++) {
                if (!hidden[i]) return this.outerHTML = "";
                hidden[i].classList.remove('hidden');
            }
        });
    }
    /* end ---------------------------------- Скрипты для секции .profitable-windows-section ------------------------ */

    /* start ---------------------------------- Скрипты для секции .certificates-section ---------------------------- */
    const certificatesSlider = document.querySelector('.certificates-slider');

    if (certificatesSlider) {
        const certificatesSwiper = new Swiper(certificatesSlider, {
            slidesPerView: 1.3,
            slideClass: 'certificates-slider__slide',
            wrapperClass: 'certificates-slider__wrap',
            spaceBetween: 20,
            autoplay: true,
            pagination: {
                el: '.certificates-slider__pagination',
                type: 'bullets',
                clickable: true
            },
            loop: true,
            navigation: {
                nextEl: '.certificates-slider__next',
                prevEl: '.certificates-slider__prev'
            },
            breakpoints: {
                768: {
                    slidesPerView: 1.37
                },
                1024: {
                    slidesPerView: 1.7
                }
            }
        });
    }
    /* end ---------------------------------- Скрипты для секции .certificates-section ------------------------------ */

    /* start ---------------------------------- Скрипты для секции .accordion-section ------------------------------- */
    const accordionToggles = document.querySelectorAll('.accordion__toggle');
    
    if (accordionToggles) accordionToggle(accordionToggles);
    /* end-------------------------------- Скрипты для секции .accordion-section ------------------------------------ */

    /* start Страница Контакты */
    /* start-------------------------------- Скрипты для секции .schedule-section ------------------------------------ */
    const scheduleTabs = document.querySelectorAll('.schedule__tab');
    const scheduleContacts = document.querySelector('.work-schedule__contacts');
    const scheduleMap = document.querySelector('.schedule__map iframe');

    if (scheduleTabs && scheduleContacts && scheduleMap) {
        scheduleTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                scheduleTabs.forEach(tab => {
                    tab.classList.remove('active');
                });
                this.classList.add('active');
                const dataAddr = this.dataset.addr;
                const dataMap = this.dataset.map;

                scheduleContacts.textContent = dataAddr;
                scheduleMap.src = dataMap;
            });
        });
    }
    /* end-------------------------------- Скрипты для секции .schedule-section ------------------------------------- */
    /* end Страница Контакты */
});