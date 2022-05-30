window.addEventListener('DOMContentLoaded', () => {

    const openBtn = document.querySelector('[data-open]'),
        modal = document.querySelector('.mobile_menu') ,
        closeBtn = document.querySelector('[data-close]'),
        menuItems = document.querySelectorAll ('.mobile_menu__link');


        function openModal () {
            modal.classList.add ('show');
            modal.classList.remove ('hide');

            // document.body.style.overflow = 'hidden';
        };

        function closeModal (){
            modal.classList.add ('hide');
            modal.classList.remove ('show');

            // document.body.style.overflow = '';
        };
        openBtn.addEventListener ('click', openModal);
        closeBtn.addEventListener ('click', closeModal);

        // чтобы закрывалось меню после нажатия на один из пунктов
        menuItems.forEach (item  => {
            item.addEventListener ('click', closeModal);
        });

});