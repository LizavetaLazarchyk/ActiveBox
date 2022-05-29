window.addEventListener('DOMContentLoaded', () => {

    const openBtn = document.querySelector('[data-open]'),
        modal = document.querySelector('.mobile_menu') ,
        closeBtn = document.querySelector('[data-close]'),
        backgroundElements = document.querySelectorAll ('[data-background]'),
        menuItems = document.querySelectorAll ('.mobile_menu__link');


        function openModal () {
            modal.classList.add ('show');
            modal.classList.remove ('hide');

            document.body.style.overflow = 'hidden';

            backgroundElements.forEach ( item => {
                item.classList.add ('hide');
                item.classList.remove ('show');
        });
        };
        function closeModal (){
            modal.classList.add ('hide');
            modal.classList.remove ('show');

            document.body.style.overflow = '';

            backgroundElements.forEach ( item  => {
                item.classList.add ('show');
                item.classList.remove ('hide');
        });
        };
        openBtn.addEventListener ('click', openModal);
        closeBtn.addEventListener ('click', closeModal);

        // чтобы закрывалось меню после нажатия на один из пунктов
        menuItems.forEach (item  => {
            item.addEventListener ('click', closeModal);
        });

});