const refs = {
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    value: document.getElementById('value'),
};

let counterValue = 0;

const handlerDecreaseValue = () => {
    counterValue -= 1;
    refs.value.textContent = counterValue;
};

const handlerIncreaseValue = () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
};

refs.decrementBtn.addEventListener('click', handlerDecreaseValue);
refs.incrementBtn.addEventListener('click',handlerIncreaseValue);

