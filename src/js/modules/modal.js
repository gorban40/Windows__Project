const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        trigger.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                    modal.style.display = 'block';
                    // document.body.style.overflow = 'hidden'
                    document.body.classList.add('modal-open')
                } 
            });
        }) // - close modal when clikc button

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            // document.body.style.overflow = '';
            document.body.classList.remove('modal-open')
        }); // - close modal when clikc cross

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                // document.body.style.overflow = '';
                document.body.classList.remove('modal-open')
            }
        }) // - close modal when clikc space


    }

    function timeOutShowModal(modalSelector, time) {
        setTimeout(() => {
            document.querySelector(modalSelector).style.display = 'block';
            document.body.classList.add('modal-open');
        }, time)
    }

    bindModal('.popup_engineer_btn','.popup_engineer','.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');

    timeOutShowModal('.popup', 60000);
};

export default modals;