import './slider'
import modals from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changModalState from './modules/changModalState'

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {};
    changModalState(modalState);

    modals();
    tabs();
    forms();
})