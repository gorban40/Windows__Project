function tabs () {
    function activatedTabs (tabs, contents, activeClass = 'active') {
        const trigers = document.querySelectorAll(tabs)

        trigers.forEach(tab => {
            const allContentsBlocks = document.querySelectorAll(contents);

            tab.addEventListener('click', (e) => {
                trigers.forEach(btn => {
                    btn.classList.remove(activeClass);
                    btn.firstElementChild.classList.remove(activeClass);
                })
                tab.classList.add(activeClass);
                tab.firstElementChild.classList.add(activeClass);
                // if (e.target.tagName === 'IMG') {
                //     trigers.forEach(btn => {
                //         btn.classList.remove('do_image_more')
                //     })
    

                // } else if (e.target.tagName === "SPAN") {

                // } 
                // else {
                //     trigers.forEach(btn => {
                //         btn.firstElementChild.classList.remove('after_click')
                //     })
                //     tab.firstElementChild.classList.add('after_click')
                // }

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
    activatedTabs('.decoration_item ', '.decoration__content', "after_click")
    activatedTabs('.balcon_icons_img', '.balcon__content', 'do_image_more')
    
}
export default tabs;