document.addEventListener('DOMContentLoaded', () => {
    /* start -------------------------------- Скрипты для секции .calculator-section -------------------------------- */
    const windowsTypes = document.querySelectorAll('.calculator__list li');
    const windowImg = document.querySelector('.calculator__img');

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
    /* end -------------------------------- Скрипты для секции .calculator-section ---------------------------------- */

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

    /* start ---------------------------------- Скрипты для секции .montage-section --------------------------------- */
    const montagePreview = document.querySelector('.montage__preview');

    const changePreviewMontage = (preview) => {
        if (window.innerWidth < 768) {
            preview.src = 'img/montage-small.jpg';
        }

        if (window.innerWidth > 767 && window.innerWidth < 1024) {
            preview.src = 'img/montage-middle.jpg';
        }

        if (window.innerWidth > 1023) {
            preview.src = 'img/montage-big.jpg';
        }
    };

    if (montagePreview) {
        changePreviewMontage(montagePreview);
    }

    window.addEventListener('resize', () => {
        if (montagePreview) {
            changePreviewMontage(montagePreview);
        } 
    });
    /* end ---------------------------------- Скрипты для секции .montage-section ----------------------------------- */
});