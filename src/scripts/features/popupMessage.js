export default () => {
    const inputEmail = document.querySelector('#email-input');
    const popUpMessage = document.querySelector('#pop-up-message');
    const sendEmailButton = document.querySelector('#send-email-button');

    inputEmail.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            sendEmailButton.click();
        }
    });

    sendEmailButton.addEventListener('click', () => {
        if (inputEmail.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/)) {
            popUpMessage.classList.remove('not-visible');
            inputEmail.classList.remove('wrong');
            inputEmail.value = '';
        }
        else {
            inputEmail.classList.add('wrong');
        }
    })

    popUpMessage.addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-close')) {
            popUpMessage.classList.add('not-visible');
        }
    })
}