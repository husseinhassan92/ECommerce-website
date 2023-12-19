import { Cart , Order, WishList } from './main.js';

const customer = JSON.parse(localStorage.getItem('customers'))[0];
//console.log(customer);
const productslist = JSON.parse(localStorage.getItem('products'));
let items = [];
productslist.forEach(product =>{
    items.push(product.id)
}); 
const cart = new Cart(customer.id, items);
//console.log(cart);
const carts = []
carts.push(cart);
localStorage.setItem('carts', JSON.stringify(carts));



function displaycart() {
    const cartlist = document.getElementById("cartlist");
    const carts = JSON.parse(localStorage.getItem('carts') || '[]');
    const products = JSON.parse(localStorage.getItem('products'));
    const cart = carts[0].items;

    cart.forEach(element => {
        for (let i = 0; i < products.length; i++) {
            if (element === products[i].id) {
                let html = 
                            `<div>
                                <p>name: ${products[i].name}</p>
                                <p>category:${products[i].category}</p>
                                <p>price:${products[i].price}</p>
                                <p>description:${products[i].description}</p>
                                <label for="Quantity">Quantity:</label>
                                <input tabindex="2" type="number" id="${products[i].id}" name="Quantity" value = 1 min = 1 required>
                                <p>in stock: ${products[i].stockQuantity}</p>
                                <button type="button" id="${products[i].id}" class="add">Add to wish list</button>
                                <button type="button" id="${products[i].id}" class="remove">Remove</button>
                            </div>`
                cartlist.innerHTML += html;
                
            }
            
        }
        
    });
 
};

displaycart();

const orders = JSON.parse(localStorage.getItem('orders') || '[]');

let order_btn = document.getElementById("order");
order_btn.addEventListener('click', ()=>{
    let items = {};
    let products = document.querySelectorAll('input[type="number"]');
    for (let index = 0; index < products.length; index++) {
        items[products[index].id] = products[index].value
    }

    let order = new Order(customer.id, items);
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('carts');
    location.replace('ordercust.html');
});



function add_wishlist() {
    const carts = JSON.parse(localStorage.getItem('carts'));
    const cartlist = carts[0];
    const cart = cartlist.items;
    let Wishitems = [];
    let wishlists = JSON.parse(localStorage.getItem('wishlists') || '[]');
    let add_btns = document.querySelectorAll(".add") 
    for (let index = 0; index < add_btns.length; index++) {
        add_btns[index].onclick = function(){
            for (let i = 0; i < cart.length; i++) {
                if (add_btns[index].id === cart[i]) {
                    Wishitems.push(add_btns[index].id);
                    wishlists.shift()
                    let Wishlist = new WishList(customer.id, Wishitems);
                    wishlists.push(Wishlist);
                    localStorage.setItem('wishlists', JSON.stringify(wishlists));
                    cart.splice(i,1)
                    this.parentNode.remove();
         
                }
                
            }
            carts.push(cartlist);
            carts.shift();
            localStorage.setItem('carts', JSON.stringify(carts));
        };
    };

};

add_wishlist();


function remove_item() {
    const carts = JSON.parse(localStorage.getItem('carts'));
    const cartlist = carts[0];
    const cart = cartlist.items;
    let remove_btns = document.querySelectorAll(".remove") 
    for (let index = 0; index < remove_btns.length; index++) {
        remove_btns[index].onclick = function(){
            this.parentNode.remove();
            for (let i = 0; i < cart.length; i++) {
                if (remove_btns[index].id === cart[i]) {
                    cart.splice(i,1)
                    this.parentNode.remove();
                }
                
            }
            carts.push(cartlist);
            carts.shift();
            localStorage.setItem('carts', JSON.stringify(carts));
        };
    };

};

remove_item();






