import {Product} from './main.js';

const product_id = sessionStorage.getItem("updateproductid");

const products = JSON.parse(localStorage.getItem('products'));

const product = products.find(product => product.id == product_id);

console.log(product);

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

document.getElementById("name").value = product.name;
document.getElementById("category").value = product.category;
document.getElementById("price").value = product.price;
document.getElementById("description").value = product.description;
document.getElementById("stockQuantity").value = product.stockQuantity;


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
      const current_product= products.find((product) => product.id == product_id);
      if (current_product) {
        //current_product = product_id
        current_product.name = name;
        current_product.category = category;
        current_product.price = price;
        current_product.description = description;
        current_product.stockQuantity = stockQuantity;
        current_product.productImage = productImage;
        console.log(current_product);
        //products.push(current_product);
        localStorage.setItem('products', JSON.stringify(products));
        location.replace('productpanel.html');
    }
});


