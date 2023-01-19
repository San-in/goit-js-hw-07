const refs = {
    fontSizeControl: document.getElementById('font-size-control'),
    text: document.getElementById('text'),
};

const handlerChangeTextSize = (event) => refs.text.style.fontSize = `${event.currentTarget.value}px`;

refs.fontSizeControl.addEventListener('input',handlerChangeTextSize);