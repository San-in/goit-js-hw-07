const categoriesRef = document.getElementById('categories');
const collectionOfcategories = categoriesRef.children;


const showInfoOfCategories = () => {

  let output = `Number of categories: ${collectionOfcategories.length}
    `;

  for (let i = 0; i < collectionOfcategories.length; i += 1) {

  output += `
    Category: ${collectionOfcategories[i].firstElementChild.textContent}
    Elements: ${collectionOfcategories[i].lastElementChild.children.length}
    `;
  }
  return output;
};
console.log(showInfoOfCategories());
