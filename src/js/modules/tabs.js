function tabs () {
    function activatedTabs (tabs, contents) {
        const trigers = document.querySelectorAll(tabs)

        trigers.forEach(tab => {
            const allContentsBlocks = document.querySelectorAll(contents);

            tab.addEventListener('click', (e) => {
                if (e.target.tagName === 'IMG') {
                    trigers.forEach(btn => {
                        btn.classList.remove('do_image_more')
                    })
    
                    tab.classList.add('do_image_more');
                } else {
                    trigers.forEach(btn => {
                        btn.firstElementChild.classList.remove('after_click')
                    })
                    tab.firstElementChild.classList.add('after_click')
                }

                allContentsBlocks.forEach(block => {
                    block.classList.remove('active')
                });

                let name = e.target.getAttribute("data-element");
                const content = document.querySelector(`.${name}`);
                content.classList.add('active')
            })
        })
    }

    activatedTabs('.glazing_block', '.glazing_content')
    activatedTabs('.decoration_item ', '.decoration__content')
    activatedTabs('.balcon_icons_img', '.balcon__content')
    
}
export default tabs;