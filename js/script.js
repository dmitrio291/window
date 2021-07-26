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

    /* start ---------------------------------- Скрипты для секции .choose-own-color -------------------------------- */
    const colorsFrame = document.querySelectorAll('[data-frame="frame"]'),
        colorsAccessory = document.querySelectorAll('[data-accessory="accessory"]'),
        chooseOwnColorContainer = document.querySelector('.choose-own-color__container'),
        chooseOwnColorAccessoryBox = document.querySelector('.choose-own-color__accessory-box');

    /* Скрипт для блока choose-own-color добавялет или убирает класс active у кликнутого элемента, заменяет изображения двери и ручки */
    function activeChooseOwnColor(colors) {
        colors.forEach((color) => {
            color.addEventListener('click', function() {
                if (color.dataset.color === 'silve') {
                    chooseOwnColorAccessoryBox.style.backgroundImage = 'url("img/choose-own-bg7.png")';
                } else if (color.dataset.color === 'gold') {
                    chooseOwnColorAccessoryBox.style.backgroundImage = 'url("img/choose-own-bg8.png")';
                } else if (color.dataset.color === 'bronze') {
                    chooseOwnColorAccessoryBox.style.backgroundImage = 'url("img/choose-own-bg9.png")';
                } else if (color.dataset.color === 'titan') {
                    chooseOwnColorAccessoryBox.style.backgroundImage = 'url("img/choose-own-bg10.png")';
                } else if (color.dataset.color === 'white-gold') {
                    chooseOwnColorAccessoryBox.style.backgroundImage = 'url("img/choose-own-bg11.png")';
                } else if (color.dataset.color === 'copper') {
                    chooseOwnColorAccessoryBox.style.backgroundImage = 'url("img/choose-own-bg12.png")';
                }
                if (window.matchMedia("(max-width: 767px)").matches) {
                    if (color.dataset.color === 'cherry') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-1.png') no-repeat top 206px right -336px/520px";
                    } else if (color.dataset.color === 'oak') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-2.png') no-repeat top 206px right -336px/520px";
                    } else if (color.dataset.color === 'chestnut') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-3.png') no-repeat top 206px right -336px/520px";
                    } else if (color.dataset.color === 'pine') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-4.png') no-repeat top 206px right -336px/520px";
                    } else if (color.dataset.color === 'alder') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-5.png') no-repeat top 206px right -336px/520px";
                    } else if (color.dataset.color === 'maple') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-6.png') no-repeat top 206px right -336px/520px";
                    }
                }
                if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
                    if (color.dataset.color === 'cherry') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-1.png') no-repeat top 0 right -105px/329px";
                    } else if (color.dataset.color === 'oak') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-2.png') no-repeat top 0 right -105px/343px";
                    } else if (color.dataset.color === 'chestnut') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-3.png') no-repeat top 0 right -105px/356px";
                    } else if (color.dataset.color === 'pine') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-4.png') no-repeat top 0 right -105px/356px";
                    } else if (color.dataset.color === 'alder') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-5.png') no-repeat top 0 right -105px/356px";
                    } else if (color.dataset.color === 'maple') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-6.png') no-repeat top 0 right -105px/356px";
                    }
                }
                if (window.matchMedia("(min-width: 1024px)").matches) {
                    if (color.dataset.color === 'cherry') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-1.png') no-repeat top 0 right 0/322px";
                    } else if (color.dataset.color === 'oak') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-2.png') no-repeat top 0 right 0/331px";
                    }  else if (color.dataset.color === 'chestnut') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-3.png') no-repeat top 0 right 0/343px";
                    } else if (color.dataset.color === 'pine') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-4.png') no-repeat top 0 right 0/343px";
                    } else if (color.dataset.color === 'alder') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-5.png') no-repeat top 0 right 0/343px";
                    } else if (color.dataset.color === 'maple') {
                        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-6.png') no-repeat top 0 right 0/343px";
                    }                         
                }                
                colors.forEach((color) => {
                    color.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    };

    if (chooseOwnColorContainer) {
        chooseOwnColorContainer.classList.remove('active');
        chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-1.png') no-repeat top 206px right -336px/520px";
        
        if (window.matchMedia("(min-width: 768px)").matches) {
            chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-1.png') no-repeat top 0 right -105px/334px";                    
        }

        if (window.matchMedia("(min-width: 1024px)").matches) {
            chooseOwnColorContainer.style.background = "#F9F9F9 url('img/choose-own-bg-1.png') no-repeat top 0 right 0/322px";  
        }

        activeChooseOwnColor(colorsFrame);
        activeChooseOwnColor(colorsAccessory);
    }
    /* end ---------------------------------- Скрипты для секции .choose-own-color ---------------------------------- */

    /* start ---------------------------------- Скрипты для секции .sketches-section---------------------------------- */
    const sketchesInput = document.querySelector('.form-sketches__none');
    const sketchesText = document.querySelector('.form-sketches__upload-text');
    const sketchesIcon = document.querySelector('.form-sketches__icon');

    if (sketchesInput && sketchesText && sketchesIcon) {
        sketchesInput.addEventListener('change', () => {
            sketchesText.textContent = 'Эскиз загружен';
            sketchesText.style.color = '#F26422';
            sketchesIcon.style.backgroundImage = "url('../img/sketches-icon-3.svg')";
        });
    }
    /* end ---------------------------------- Скрипты для секции .sketches-section ---------------------------------- */

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