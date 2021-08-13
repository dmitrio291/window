document.addEventListener('DOMContentLoaded', () => {
    /* start Универсальня функция, которая показывает/скрывает аккордеон */
    const accordionToggle = (toggles) => {
        toggles.forEach(toggle => {
            toggle.addEventListener('click', e => {
                toggles.forEach(toggle => {
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
    /* end Универсальня функция, которая показывает/скрывает аккордеон */
    
    /* start Проверка подключен ли fancybox на странице */
    const dataFancybox = document.querySelector('[data-fancybox]');
    if (dataFancybox) $.fancybox.defaults.backFocus = false;
    /* end Проверка подключен ли fancybox на странице */

    /* start Модальные окна */
    const body = document.querySelector('body');

    const closestItemByClass = (item, className) => {
        let node = item;

        while (node) {
            if (node.classList.contains(className)) {
                return node;
            }

            node = node.parentElement;
        }

        return null;
    };

    const closestAttr = (item, attr) => {
        let node = item;

        while (node) {
            const attrValue = node.getAttribute(attr);
            if (attrValue) {
                return attrValue;
            }

            node = node.parentElement;
        }

        return null;
    };

    const showPopup = (target) => {
        target.classList.add('active');
    };

    const closePopup = (target) => {
        target.classList.remove('active');
    };

    body.addEventListener('click', (event) => {
        const target = event.target,
            popupClass = closestAttr(target, 'data-popup');

        if (popupClass === null) return;

        event.preventDefault();
        const popup = document.querySelector(`.${popupClass}`);

        if (popup) {
            showPopup(popup);
            body.classList.add('scroll-hidden');
        }
    });

    body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('popup__close') || target.classList.contains('popup__inner')) {
            const popup = closestItemByClass(target, 'popup');
            closePopup(popup);
            body.classList.remove('scroll-hidden');
        }
    });

    // const popupButtons = document.querySelectorAll('*[data-popup-btn]');
    // const popups = document.querySelectorAll('.popup');

    // if (popupButtons && popups) {
    //     popupButtons.forEach(button => {
    //         button.addEventListener('click', (event) => {
    //             event.preventDefault();

    //             let dataName = button.getAttribute('data-popup-btn'),
    //                 popup = document.querySelector(`[data-popup="${dataName}"]`),
    //                 close = popup.querySelectorAll('.popup__btn-close');
               
    //             popup.classList.add('active');
    //             document.body.style.overflow = 'hidden';

    //             close.forEach(close => {
    //                 close.addEventListener('click', () => {
    //                     popup.classList.remove('active');
    //                     document.body.style.overflow = '';
    //                 });
    //             });                
    //         });
    //     });

    //     popups.forEach(popup => {
    //         popup.addEventListener('click', event => {
    //             const target = event.target;
    //             if (target.classList.contains('popup__inner')) {
    //                 popup.classList.remove('active');
    //                 document.body.style.overflow = '';
    //             };
    //         });
    //     });
    // };
    /* end Модальные окна */

    /* start -------------------------------- Скрипты для секции .header -------------------------------------------- */
    const burgers = document.querySelectorAll('.burger');
    const headerPopup = document.querySelector('.header-popup');
    const headerPopupClose = document.querySelector('.header-popup__close');

    if (burgers && headerPopup && headerPopupClose) {
        burgers.forEach(burger => {
            burger.addEventListener('click', () => {
                headerPopup.style.display = 'block';
                headerPopupClose.addEventListener('click', () => headerPopup.style.display = 'none');
            });
        });
    }
    /* end -------------------------------- Скрипты для секции .header ---------------------------------------------- */

    /* start -------------------------------- Скрипты для секции .main-header --------------------------------------- */
    const mainHeaderToggles = document.querySelectorAll('.menu__button-toggle');
    const mainHeaderBurger = document.querySelector('.main-header-burger');
    const mainHeaderTop = document.querySelector('.main-header__top');
    const mainHeaderPopup = document.querySelector('.main-header-popup');
    
    if (mainHeaderToggles) accordionToggle(mainHeaderToggles);

    const openHeaderMobileMenu = (burger, box, popup) => {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            box.classList.toggle('active');
            popup.classList.toggle('active');
            document.body.classList.toggle('scroll-hidden');
        });
    };

    if (mainHeaderToggles && mainHeaderBurger && mainHeaderTop && mainHeaderPopup) {
        openHeaderMobileMenu(mainHeaderBurger, mainHeaderTop, mainHeaderPopup);
    };
    /* end -------------------------------- Скрипты для секции .main-header ----------------------------------------- */

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
    const discountsSlider = document.getElementById('discountsSlider');

    if (discountsSlider) {
        const discountsSwiper = new Swiper(discountsSlider, {
            slidesPerView: 1.25,
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
            preloadImages: false,
            lazy: {
                loadOnTransitionStart: false,
                loadPrevNext: false
            },
            watchSlidesProgress: true,
            watchSlidesVisisbility: true,
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

    /* start ---------------------------------- Скрипты для секции .examples-section---------------------------------- */
    const examplesSlider = document.querySelectorAll('.examples-slider');

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
    /* end ---------------------------------- Скрипты для секции .examples-section------------------------------------ */

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
    const accordionToggles = document.querySelectorAll('.accordion--main .accordion__toggle');
    
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

    /* start Страница Акции */
    /* start-------------------------------- Скрипты для секции .discounts--stocks ------------------------------------ */
    const discountsSliderStocks = document.getElementById('discountsSliderStocks');
    let sliderStocksSwiper;

    const mobileSliderStocks = () => {
        if (window.innerWidth <= 1023 && discountsSliderStocks.dataset.mobile === 'false') {
            sliderStocksSwiper = new Swiper(discountsSliderStocks, {
                slidesPerView: 1.25,
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
                        slidesPerView: 2.3
                    }
                }
            });

            discountsSliderStocks.dataset.mobile = 'true';
        }

        if (window.innerWidth > 1023) {
            discountsSliderStocks.dataset.mobile  = 'false';
            if (discountsSliderStocks.classList.contains('swiper-container-initialized')) {
                sliderStocksSwiper.destroy();
            }
        }
    }

    if (discountsSliderStocks) mobileSliderStocks();

    window.addEventListener('resize', () => {
        if (discountsSliderStocks) mobileSliderStocks();
    });
    /* end-------------------------------- Скрипты для секции .discounts--stocks -------------------------------------- */
    /* end Страница Акции */

    /* start Страница Окна в дом */
    /* start-------------------------------- Скрипты для секции .prices-windows-section ------------------------------- */
    const priceswindowsSlider = document.querySelector('.prices-windows-slider');
    let priceswindowsSwiper;

    const mobilePricesWindowsSlider = () => {
        if ((window.innerWidth > 767 && window.innerWidth < 1024) && priceswindowsSlider.dataset.mobile === 'false') {
            priceswindowsSwiper = new Swiper(priceswindowsSlider, {
                slidesPerView: 2,
                spaceBetween: 1,
                slideClass: 'prices-windows-slider__slide',
                wrapperClass: 'prices-windows-slider__wrap',
                pagination: {
                    el: '.prices-windows-slider__pagination',
                    type: 'bullets',
                    clickable: true
                },
                loop: true,
                navigation: {
                    nextEl: '.prices-windows-slider__next',
                    prevEl: '.prices-windows-slider__prev'
                }
            });

            priceswindowsSlider.dataset.mobile = 'true';
        }

        if (window.innerWidth < 768 || window.innerWidth > 1023) {
            priceswindowsSlider.dataset.mobile  = 'false';
            if (priceswindowsSlider.classList.contains('swiper-container-initialized')) {
                priceswindowsSwiper.destroy();
            }
        }
    }

    if (priceswindowsSlider) mobilePricesWindowsSlider();

    window.addEventListener('resize', () => {
        if (priceswindowsSlider) mobilePricesWindowsSlider();
    });
    /* end -------------------------------- Скрипты для секции .prices-windows-section --------------------------------- */

    /* start -------------------------------- Скрипты для секции .gazebos-section ------------------------------------- */
    const gazebosSlider = document.querySelector('.gazebos-slider');

    if (gazebosSlider) {
        const doorsHouseSwiper = new Swiper(gazebosSlider, {
            slidesPerView: 1,
            spaceBetween: 10,
            autoplay: true,
            slideClass: 'gazebos-slider__slide',
            wrapperClass: 'gazebos-slider__wrap',
            pagination: {
                el: '.gazebos-slider__pagination',
                type: 'bullets',
                clickable: true
            },
            loop: true,
            navigation: {
                nextEl: '.gazebos-slider__next',
                prevEl: '.gazebos-slider__prev'
            }
        });
    }
    /* end -------------------------------- Скрипты для секции .gazebos-section --------------------------------------- */

    /* end -------------------------------- Скрипты для секции .doors-house-section ---------------------------------- */

    /* start-------------------------------- Скрипты для секции .doors-house-section ---------------------------------- */
    const doorsHouseSlider = document.querySelectorAll('.doors-house-slider');

    const doorsHouseSliderInit = (slider) => {
        const doorsHouseSwiper = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 10,
            slideClass: 'doors-house-slider__slide',
            wrapperClass: 'doors-house-slider__wrap',
            pagination: {
                el: '.doors-house-slider__pagination',
                type: 'bullets',
                clickable: true
            },
            loop: true,
            navigation: {
                nextEl: '.doors-house-slider__next',
                prevEl: '.doors-house-slider__prev'
            }
        });
    };

    if (doorsHouseSlider) {
        doorsHouseSlider.forEach((slider) => doorsHouseSliderInit(slider));
    }
    /* end-------------------------------- Скрипты для секции .doors-house-section ------------------------------------ */

    /* start-------------------------------- Скрипты для секции .windows-house-section -------------------------------- */
    const windowsSliderHouse = document.querySelector('.windows-house-slider');
    let windowsHouseSwiper;

    const mobileSliderHouse = () => {
        if ((window.innerWidth > 767 && window.innerWidth < 1024) && windowsSliderHouse.dataset.mobile === 'false') {
            windowsHouseSwiper = new Swiper(windowsSliderHouse, {
                slidesPerView: 2,
                spaceBetween: 1,
                slideClass: 'windows-house-slider__slide',
                wrapperClass: 'windows-house-slider__wrap',
                pagination: {
                    el: '.windows-house-slider__pagination',
                    type: 'bullets',
                    clickable: true
                },
                loop: true,
                navigation: {
                    nextEl: '.windows-house-slider__next',
                    prevEl: '.windows-house-slider__prev'
                }
            });

            windowsSliderHouse.dataset.mobile = 'true';
        }

        if (window.innerWidth < 768 || window.innerWidth > 1023) {
            windowsSliderHouse.dataset.mobile  = 'false';
            if (windowsSliderHouse.classList.contains('swiper-container-initialized')) {
                windowsHouseSwiper.destroy();
            }
        }
    }

    if (windowsSliderHouse) mobileSliderHouse();

    window.addEventListener('resize', () => {
        if (windowsSliderHouse) mobileSliderHouse();
    });
    /* end-------------------------------- Скрипты для секции .windows-house-section ---------------------------------- */
    /* end Страница Окна в дом */

    /* start Страница Отделка балконов */
    /* start -------------------------------- Скрипты для секции .types-work-section ---------------------------------- */
    const typesWorkCards = document.querySelector('.types-work-cards');

    if (typesWorkCards) {
        typesWorkCards.addEventListener('click', (e) => {
            const target = e.target;
    
            if (target.classList.contains('types-work-cards__btn')) {
                target.closest('.types-work-cards__card').classList.add('flip');
            }
    
            if (target.classList.contains('types-work-cards__icon')) {
                target.closest('.types-work-cards__card').classList.remove('flip');
            }
        });
    }
    /* end -------------------------------- Скрипты для секции .types-work-section ------------------------------------ */

    /* start -------------------------------- Скрипты для секции .photos-section -------------------------------------- */
    const photosBtn = document.querySelector('.photos__btn');
    const photosItems = document.querySelectorAll('.photos__list li');

    if (photosBtn && photosItems) {
        if (window.innerWidth > 767 && window.innerWidth < 1024) {
            for (let i = 0; i < photosItems.length; i++) {
                if (photosItems[i].classList.contains('hidden--tablet')) {
                    photosItems[i].classList.remove('hidden');
                }
            }
        }
    
        if (window.innerWidth > 1023) {
            for (let i = 0; i < photosItems.length; i++) {
                if (photosItems[i].classList.contains('hidden--tablet')) {
                    photosItems[i].classList.remove('hidden');
                }
    
                if (photosItems[i].classList.contains('hidden--desktop')) {
                    photosItems[i].classList.remove('hidden');
                }
            }
        }
    
        photosBtn.addEventListener('click', function() {
            let showPerClick3 = 3;
            let showPerClick4 = 4;
            
            const hidden = this.parentNode.querySelectorAll('li.hidden');

            const showPhotos = (showPerClick) => {
                for (let i = 0; i < showPerClick; i++) {
                    if (!hidden[i]) return this.outerHTML = "";              
                    hidden[i].classList.remove('hidden');
                }

                const items = document.querySelectorAll('li.hidden').length;
                if (items === 0) return this.outerHTML = "";
            };
    
            if (window.innerWidth < 1024) {
                showPhotos(showPerClick3);
            } else {
                showPhotos(showPerClick4);
            }        
        });
    }
    /* end -------------------------------- Скрипты для секции .photos-section ----------------------------------------- */
    /* end Страница Отделка балконов */

    /* start Страница Остекление балконов */
    /* start ---------------------------------- Скрипты для секции .right-balcony-section ----------------------------- */
    const rightBalconySlider = document.querySelectorAll('.right-balcony-slider');
    const rightBalconyTabs = document.querySelectorAll('.right-balcony__tab-name');
    const rightBalconyContent1 = document.querySelector('.right-balcony__content.sliding');
    const rightBalconySliderBox1 = document.querySelector('.right-balcony__slider.sliding');
    const rightBalconyPrices1 = document.querySelector('.right-balcony__prices.sliding');
    const rightBalconyContent2 = document.querySelector('.right-balcony__content.swing');
    const rightBalconySliderBox2 = document.querySelector('.right-balcony__slider.swing');
    const rightBalconyPrices2 = document.querySelector('.right-balcony__prices.swing');
    const rightBalconyLink = document.querySelectorAll('.right-balcony__link-tab');

    const rightBalconySliderInit = (slider) => {
        const rightBalconySwiper = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: '.right-balcony-slider__pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.right-balcony-slider__next',
                prevEl: '.right-balcony-slider__prev'
            }
        });
    }

    const rightBalconyActiveTab = (tabLink) => {
        rightBalconyTabs.forEach(tab => {
            tab.classList.remove('active');
        });        

        rightBalconyTabs.forEach(tab => {
            const dataTab = tab.dataset.tab;
            if (tabLink === dataTab) {
                tab.classList.add('active');
            }
        });
    }

    if (rightBalconySlider) {
        rightBalconySlider.forEach(slider => rightBalconySliderInit(slider));
    }

    if (rightBalconyTabs) {
        rightBalconyTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                rightBalconyTabs.forEach(tab => {
                    tab.classList.remove('active');
                });
                this.classList.add('active');
                const dataTab = this.dataset.tab;
                if (dataTab === 'sliding') {        
                    rightBalconyContent1.classList.remove('hide');
                    rightBalconySliderBox1.classList.remove('hide');
                    rightBalconyPrices1.classList.remove('hide');            
                    rightBalconyContent2.classList.add('swing');
                    rightBalconySliderBox2.classList.add('swing');
                    rightBalconyPrices2.classList.add('swing');
                }
                if (dataTab === 'swing') {
                    rightBalconyContent2.classList.remove('swing');
                    rightBalconySliderBox2.classList.remove('swing');
                    rightBalconyPrices2.classList.remove('swing');
                    rightBalconyContent1.classList.add('hide');
                    rightBalconySliderBox1.classList.add('hide');
                    rightBalconyPrices1.classList.add('hide');
                }
            });
        });
    }

    if (rightBalconyLink) {
        rightBalconyLink.forEach(link => {
            link.addEventListener('click', function() {
                const dataTab = link.dataset.tab;
                if (dataTab === 'sliding') {
                    rightBalconyContent1.classList.remove('hide');
                    rightBalconySliderBox1.classList.remove('hide');
                    rightBalconyPrices1.classList.remove('hide');            
                    rightBalconyContent2.classList.add('swing');
                    rightBalconySliderBox2.classList.add('swing');
                    rightBalconyPrices2.classList.add('swing');
                    rightBalconyActiveTab(dataTab);
                } else {
                    rightBalconyContent2.classList.remove('swing');
                    rightBalconySliderBox2.classList.remove('swing');
                    rightBalconyPrices2.classList.remove('swing');
                    rightBalconyContent1.classList.add('hide');
                    rightBalconySliderBox1.classList.add('hide');
                    rightBalconyPrices1.classList.add('hide');
                    rightBalconyActiveTab(dataTab);
                }
            });
        });
    }
    /* end ---------------------------------- Скрипты для секции .right-balcony-section ------------------------------- */

    /* start ---------------------------------- Скрипты для секции .accordion-section ------------------------------- */
    const accordionToggles2 = document.querySelectorAll('.accordion--second .accordion__toggle');
    
    if (accordionToggles2 && window.innerWidth < 768) accordionToggle(accordionToggles2);
    /* end-------------------------------- Скрипты для секции .accordion-section ------------------------------------ */
    /* end Страница Остекление балконов */

    /* start Страница Рассрочка */
    /* start ---------------------------------- Скрипты для секции .installment-calculato --------------------------- */
    const sliderCalc = document.querySelectorAll('.slider-calc');

    if (sliderCalc.length) {
        jQuery( function($){
            // КАЛЬКУЛЯТОР РАССРОЧКИ
            if($('.slider-calc').length) {
                $(function() {
                var sum_min = '15 000',
                    sum_max = '500 000'
                    period_max = '12',
                    period_min = '3';
                    $( '#slider-range-min' ).slider({
                        range: 'min',
                        value: 0,
                        //min: 15000,
                        //max: 100000,
                        min: parseInt(sum_min.replace(/\s+/g, ''),10),
                        max: parseInt(sum_max.replace(/\s+/g, ''),10),				
                        slide: function( event, ui ) {
                            
                            ui.value;
                            var ui_val = ui.value;
                            month = $( '.summ-box__month-rs' ).text();
                            month = parseInt(month.replace(/\s+/g, ''),10); // строку в число
                            ui_val = ui_val.toLocaleString();
                            
                            let math_ceil = Math.ceil(ui.value / month);
                            math_ceil = math_ceil.toLocaleString();
                            
                            $( '.installment-calculator-slider_sum' ).html( ui_val );
                            $( '.installment-calculator-slider_month_pay' ).html( math_ceil );
                            
                            /* console.log(ui_val);
                            console.log(month);
                            console.log(math_ceil); */
                        }
                    });
                    $( '#slider-range-month' ).slider({
                        range: 'min',
                        //value: 6,
                        //min: 2,
                        //max: 12,
                        value: Math.ceil( parseInt(period_max.replace(/\s+/g, ''),10) / 2 ),
                        min: parseInt(period_min.replace(/\s+/g, ''),10),
                        max: parseInt(period_max.replace(/\s+/g, ''),10),				
                        slide: function( event, ui ) {
                            
                            ui.value;
                            var ui_val = ui.value,
                                sum_itog = $( '.installment-calculator-slider_sum.summ-box__summ-rs' ).text();
                                sum_itog = parseInt(sum_itog.replace(/\s+/g, ''),10); // строку в число
                                
                            ui_val = ui_val.toLocaleString();
                            
                            let math_ceil = Math.ceil(sum_itog / ui_val);
                            math_ceil = math_ceil.toLocaleString();
                            
                            $( '.summ-box__month-rs' ).html( ui_val );
                            $( '.installment-calculator-slider_month_pay' ).html( math_ceil );
        
                            /* console.log(sum_itog);
                            console.log(ui_val);
                            console.log(math_ceil); */				
                        }
                    });
                    $( '.summ-box__month-rs' ).html( Math.ceil( parseInt(period_max.replace(/\s+/g, ''),10) / 2 ) );
                });
            // передвижение ползунка в мобильных устройствах	
            $( '.ui-slider-handle' ).draggable(); 	
            }
        });
    }
    /* end ---------------------------------- Скрипты для секции .installment-calculato --------------------------- */
    /* end Страница Рассрочка */
});