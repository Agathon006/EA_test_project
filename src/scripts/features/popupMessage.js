export default () => {
    const inputEmail = document.querySelector('#email-input');
    const popUpMessage = document.querySelector('#pop-up-message');
    const sendEmailButton = document.querySelector('#send-email-button');
    const popupTitle = document.querySelector('#popup-title');
    const popupContent = document.querySelector('#popup-content');

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
            $.ajax({
                type: "POST",
                url: "/some-url",
                data: { email: inputEmail.value },
                success: function (response) {
                    // popupTitle.textContent = 'SUCCESS!';
                    // popupContent.textContent = 'You have successfully subscribed to the email newsletter';
                },
                error: function (error) {
                    // popupTitle.textContent = 'ERROR!';
                    // popupContent.textContent = 'Something go wrong...';
                }
            });
            if (Math.random() < 0.5) {
                popupTitle.textContent = 'SUCCESS!';
                popupContent.textContent = 'You have successfully subscribed to the email newsletter';
            } else {
                popupTitle.textContent = 'ERROR!';
                popupContent.textContent = 'Something go wrong...';
            }
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