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

    /* start ---------------------------------- Скрипты для секции .accordion-section ------------------------------- */
    const accordionToggles = document.querySelectorAll('.accordion__toggle');
    
    if (accordionToggles) accordionToggle(accordionToggles);
    /* end-------------------------------- Скрипты для секции .accordion-section ------------------------------------ */

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
});