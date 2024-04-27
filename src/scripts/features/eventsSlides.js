export default () => {
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach((item) => {
        const header = item.querySelector('.accordion__item-header-wrapper');
        const body = item.querySelector('.accordion__item-body-wrapper');

        header.addEventListener('click', () => {
            const activeHeader = document.querySelector('.accordion__item-header-background.accordion__item-header-background--monocolor');
            const activeBody = document.querySelector('.accordion__item-body-wrapper.active');

            if (activeHeader) {
                activeHeader.classList.remove('accordion__item-header-background--monocolor');
            }

            header.children[0].children[0].classList.add('accordion__item-header-background--monocolor');

            if (activeBody) {
                activeBody.classList.remove('active');
                activeBody.classList.add('inactive');
            }

            body.classList.add('active');
            body.classList.remove('inactive');
        });
    });
}