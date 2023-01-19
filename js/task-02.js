const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.getElementById('ingredients');

const createLiElement = (liContent) => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = liContent;
  return li;
};

const output = ingredients.map((ingredient) => createLiElement(ingredient));
ingredientsRef.append(...output);