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
                const tabName = this.dataset.tab;
                if (tabName === 'tab-2') {
                    scheduleMap.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A3ad4a51068ad1ee5ce25ede9c6549d2e7fb173a35e1eb54dfa3567bc46f1afaf&amp;source=constructor';
                    scheduleContacts.textContent = 'г. Тольятти, ул Горького 92, 3 этаж, офис 204';      
                } else {
                    scheduleMap.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ae84eb459019bbc70962b3d3e47a966dfe5256a511fd5f2efa6fe33f3d3753080&amp;source=constructor';
                    scheduleContacts.textContent = 'г. Тольятти, ул Заставная 54, 2 этаж, офис 207';      
                }
            });
        });
    }
    /* end-------------------------------- Скрипты для секции .schedule-section ------------------------------------- */
});