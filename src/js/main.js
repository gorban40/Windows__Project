import './slider'
import modals from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changModalState from './modules/changModalState'
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {};
    let deadline = '2022-09-01';

    changModalState(modalState);

    modals(modalState);
    tabs();
    forms(modalState);
    timer('.container1', deadline);
    images();
})