import {Product} from './main.js';

const proform = document.getElementById('productform');

proform.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const category = document.getElementById('category').value;
  const price = document.getElementById('price').value;
  const description = document.getElementById('description').value;
  const stockQuantity = document.getElementById('stockQuantity').value;
  const productImage = document.querySelector('#image').value;
  console.log(productImage);


  const products = JSON.parse(localStorage.getItem('products') || '[]');
      const current_product= products.find((product) => product.name === name);
      if (current_product) {
        alert('Product already exists!');
      } else {
        const product = new Product(name, category, price, description, stockQuantity, productImage);
        console.log(product);
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        location.replace('productpanel.html');
    }
});


const categories =["Mobiles", "Laptops", "Cameras"];
// function to populate the select dropdown with options for categories

function createCategoryDropdown() {
    const categorySelect = document.getElementById("category");
    for (let i = 0; i < categories.length; i++) {
        const option = document.createElement("option");
        option.value = categories[i];
        option.text = categories[i];
        categorySelect.appendChild(option);
    }
}

createCategoryDropdown();