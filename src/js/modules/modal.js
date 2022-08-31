const modals = (state) => {

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();

        trigger.forEach(btn => {
            console.log()

            btn.addEventListener('click', (e) => {
                if (btn.getAttribute("data-disabled") === 'true') {
                    alert('chose form of window')
                } else {
                    if (e.target) {
                        e.preventDefault();
    
                        windows.forEach(item => {
                            item.style.display = 'none'
                        })
    
                        modal.style.display = 'block';
                        // document.body.style.overflow = 'hidden'
                        document.body.classList.add('modal-open');
                        document.body.style.marginRight = `${scroll}px`;

                    } 
                }

            });
        }) // - close modal when clikc button

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            // document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`;
        }); // - close modal when clikc cross

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                })

                modal.style.display = 'none';
                // document.body.style.overflow = '';
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
            }
        }) // - close modal when clikc space


    }

    function timeOutShowModal(modalSelector, time) {
        setTimeout(() => {
            document.querySelector(modalSelector).style.display = 'block';
            document.body.classList.add('modal-open');
        }, time)
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    bindModal('.popup_engineer_btn','.popup_engineer','.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    timeOutShowModal('.popup', 600000);
};

export default modals;