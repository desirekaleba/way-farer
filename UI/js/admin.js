let accordionItems = document.querySelectorAll('.accordion-item');

Array.from(accordionItems).forEach(accordionItem => {

    // for (item of Array.from(accordionItem.children)) {
    //     let title = Array.from(item.classList).includes('accordion-title') ? item : '';
    //     if (title != '') {
    //         title.addEventListener('click', event => {
    //             console.log(title.textContent)
    //         });
    //     }
        
    // }
    for (let i = 0; i < Array.from(accordionItem.children).length; i++) {

        let title = Array.from(accordionItem.children[i].classList).includes('accordion-title') ? accordionItem.children[i] : '';
        if (title != '') {
            title.addEventListener('click', event => {
                title.classList.toggle('accordion-title-active');
                accordionItem.children[i+1].classList.toggle('active');
            });
        }
    }
});