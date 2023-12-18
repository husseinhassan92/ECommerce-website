// class Category {
//     constructor(id, name){
//         this.id = id;
//         this.name = name;
//     }
// }

// class Product {
//     constructor(id, name, image, category, price, description, stockQuantity) {
//         this.id = id;
//         this.name = name;
//         this.image = image;
//         this.category = category
//         this.price = price;
//         this.description = description;
//         this.stockQuantity = stockQuantity;
//     }
// }

// //~ Create there objects from calss Categories
// const categories =[
//     new Category(1, 'Mobiles'),
//     new Category(2, 'Laptops'),
//     new Category(3, 'Cameras'),
    
// ]

// //~ Create three objects from calss Products
// const products = [
//     new Product(1, 'Galaxy-A33_5G', 'images/Galaxy-A33_5G.jpg', categories[0].name, 13000, 'Description one.......', 10),
//     new Product(2, 'iphone_13_pro_max', 'images/iphone_13_pro_max-01.jpeg', categories[0].name, 18000, 'Description two ........', 7),
//     new Product(2, 'DELL 5520-G15 Gaming Laptop', 'images/dell55.jpg', categories[1].name, 49000, 'Description three ........', 3),
// ];


// // console.log(categories[0].id)
// // console.log(products)
// // let x = JSON.stringify(products)
// // console.log(x)

// //# Convert products array to JSON and store LS
// localStorage.setItem('products', JSON.stringify(products));

// //# Retrieve products from LS and convert it to obj
// const storedProducts = JSON.parse(localStorage.getItem('products'));


// function displayProducts() {
//     const productContainer = document.getElementById('productsContainer');

//     storedProducts.forEach(product => {

//         //# Create elements for displaying product information
//         const productDiv = document.createElement('div');
//         productDiv.classList.add('product');

//         const productName = document.createElement('h2');
//         productName.textContent = product.name;

//         const productImage = document.createElement('img');
//         productImage.src = product.image;
//         productImage.alt = product.name;
//         productImage.classList.add("imgmodify")

//         const productCategory = document.createElement('p');
//         productCategory.textContent = `Category: ${product.category}`;

//         const productPrice = document.createElement('p');
//         productPrice.textContent = `Price: $${product.price}`;

//         const productDescription = document.createElement('p');
//         productDescription.textContent = `Description: ${product.description}`;

//         const productStock = document.createElement('p');
//         productStock.textContent = `Stock Quantity: ${product.stockQuantity}`;

//         const line = document.createElement("hr")

//         // Append elements to the product div
//         productDiv.appendChild(productName);
//         productDiv.appendChild(productImage);
//         productDiv.appendChild(productCategory);
//         productDiv.appendChild(productPrice);
//         productDiv.appendChild(productDescription);
//         productDiv.appendChild(productStock);
//         productDiv.appendChild(line);

//         // Append the product div to the Products container
//         productContainer.appendChild(productDiv);
//     });
// }

// displayProducts();
