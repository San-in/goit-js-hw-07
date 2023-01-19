const refs = {
    loginForm : document.querySelector('.login-form'),
    formBtn : document.querySelector('.login-form > button'),
};

const handlerSubmitLoginForm = (event) => {
    const {email,password} = event.currentTarget.elements;
    event.preventDefault();

    if(!(email.value) || !(password.value)) {
        alert('Всі поля мають бути заповнені!');
        return;
    } else {
        const infoAboutUser = {
            [email.name]: email.value,
            [password.name]: password.value,
        };
        console.log(infoAboutUser);
        event.currentTarget.reset();
    }
};

refs.loginForm.addEventListener("submit",handlerSubmitLoginForm);