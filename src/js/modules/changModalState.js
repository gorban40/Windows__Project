import validateInputNumbers from "./validateInputNumbers";

const changModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    validateInputNumbers('#width');
    validateInputNumbers('#height');

    function bindActionToElems (e, elem, prop) {

        elem.forEach((item, i) => {
            item.addEventListener(e, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        console.log('span');
                        break
                    case 'INPUT': 
                        console.log()
                }
                console.log(state);
            })
        });

    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');


};

export default changModalState;