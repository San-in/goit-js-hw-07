function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.body,
  btnChangeColor: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
};

const handlerClickBtnChangeColor = () => {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.color.textContent = randomColor;
};

refs.btnChangeColor.addEventListener('click',handlerClickBtnChangeColor);
