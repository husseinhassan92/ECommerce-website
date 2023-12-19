
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


let accept_btn = document.getElementById("accept");
accept_btn.addEventListener('click', ()=>{
    const order_id = sessionStorage.getItem("showordercustid");
    const orders = JSON.parse(localStorage.getItem('orders'));
    console.log(orders);
    const order = orders.find(order => order.id == order_id);
    console.log(order);
    order.status = "Accepted";
    localStorage.setItem('orders', JSON.stringify(orders));
    console.log(order);
    location.reload();
    location.replace('admincust.html');
});



let reject_btn = document.getElementById("reject");
reject_btn.addEventListener('click', ()=>{
    const order_id = sessionStorage.getItem("showordercustid");
    const orders = JSON.parse(localStorage.getItem('orders'));
    console.log(orders);
    const order = orders.find(order => order.id == order_id);
    console.log(order);
    order.status = "Rejected";
    localStorage.setItem('orders', JSON.stringify(orders));
    console.log(order);
    location.reload();
    location.replace('admincust.html');
});
