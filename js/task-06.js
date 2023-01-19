const inputRef = document.getElementById('validation-input');

const isValid = () => 
event.currentTarget.value.length === Number(inputRef.getAttribute('data-length'));

const handlerCheckIsValidInput = (event) => {
    if (isValid()) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
}; 

inputRef.addEventListener('blur',handlerCheckIsValidInput);