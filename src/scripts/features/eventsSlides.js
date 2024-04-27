export default () => {
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach((item) => {
      const header = item.querySelector('.accordion__item-header');
      const body = item.querySelector('.accordion__item-body-wrapper');
    
      header.addEventListener('click', () => {
        // Get the currently active accordion item body
        const activeBody = document.querySelector('.accordion__item-body-wrapper.active');
    
        // If there is an active accordion item body, animate it out
        if (activeBody) {
          activeBody.classList.remove('active');
          activeBody.classList.add('inactive');
        }
    
        // Animate the current accordion item body in
        body.classList.add('active');
        body.classList.remove('inactive');
      });
    });
}