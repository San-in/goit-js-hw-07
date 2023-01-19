const refs = {
    nameInput: document.getElementById('name-input'),
    nameOutput: document.getElementById('name-output'),
};

const handlerAddContentToOutput = (event) => 
refs.nameOutput.textContent = (event.currentTarget.value || "Anonymous");

refs.nameInput.addEventListener('input',handlerAddContentToOutput);