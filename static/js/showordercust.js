
function displayorder() {
    const orderlist = document.getElementById("orderlist");
    const order_id = sessionStorage.getItem("showordercustid");
    const orders = JSON.parse(localStorage.getItem('orders'));
    const order = orders.find(order => order.id == order_id);
    const products = JSON.parse(localStorage.getItem('products'));
    console.log(order.items);

    for (const item in order.items) {
        for (let i = 0; i < products.length; i++) {
            if (item === products[i].id) {
                let html = 
                            `<div>
                                <p>name: ${products[i].name}</p>
                                <p>category:${products[i].category}</p>
                                <p>price:${products[i].price}</p>
                                <p>description:${products[i].description}</p>
                                <p>Quantity: ${order.items[item]}</p>
                            </div>`
                            orderlist.innerHTML += html;
                
            }
            
        }
    }
};

displayorder();


let proceed_btn = document.getElementById("proceed");
proceed_btn.addEventListener('click', ()=>{
    location.replace('ordercust.html');
});



let return_btn = document.getElementById("return");
return_btn.addEventListener('click', ()=>{
    const order_id = sessionStorage.getItem("showordercustid");
    const orders = JSON.parse(localStorage.getItem('orders'));
    console.log(orders);
    const order = orders.find(order => order.id == order_id);
    console.log(order);
    order.status = "Returned";
    order.items = {};
    localStorage.setItem('orders', JSON.stringify(orders));
    console.log(order);
    location.reload();
    location.replace('ordercust.html');
});
