window.addEventListener('DOMContentLoaded', () => {

    const openElements = document.querySelectorAll('[data-open]'),
        closeBtn = document.querySelector('.header__menu__close'),
        openBtn = document.querySelector ('.header__menu__open'),
        menuItems = document.querySelectorAll ('.navigation__link');


        function openModal () {
            openElements.forEach ( item => {
                item.classList.add ('open');
            });
        };

        function closeModal () {
            openElements.forEach (item => {
                item.classList.remove ('open');
            });
        };

        openBtn.addEventListener ('click', openModal);
        closeBtn.addEventListener ('click', closeModal);

        // чтобы закрывалось меню после нажатия на один из пунктов
        menuItems.forEach (item => {
            item.addEventListener ('click', closeModal);
        });

});