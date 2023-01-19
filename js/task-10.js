function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  wrapForBoxes: document.getElementById('boxes'),
};
let amountOfBoxes = 0;
refs.wrapForBoxes.classList.add('boxes');


const handlerChangeAmountOfBoxes = (event) => 
  amountOfBoxes = (!event.currentTarget.value) ? 0 : Number(event.currentTarget.value);

const createBoxes = (amount) => {
  refs.wrapForBoxes.innerHTML = '';
  let boxSizes = 20;

  for(let i = 0; i < amount; i += 1) {
    const colorOfBox = getRandomHexColor();
    boxSizes += 10;
    refs.wrapForBoxes.innerHTML += `<div style="background-color:${colorOfBox}; width:${boxSizes}px;height:${boxSizes}px"></div>`;
  }
};

const handlerClickbtnCreate = () => {
  createBoxes(amountOfBoxes);
};

const handlerClickbtnDestroy = () => {
  refs.input.value = '';
  createBoxes(0);
};

refs.input.addEventListener('change', handlerChangeAmountOfBoxes );
refs.btnCreate.addEventListener('click',handlerClickbtnCreate);
refs.btnDestroy.addEventListener('click',handlerClickbtnDestroy);

