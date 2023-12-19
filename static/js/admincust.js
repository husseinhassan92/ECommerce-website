const orders = JSON.parse(localStorage.getItem('orders') || '[]');


function showorders() {
    const orderContainer = document.getElementById('ordertable');
    orders.forEach(order => {
        let html = 
        `<tr>
            <td><input type="radio" id="${order.id}" name="product" value="${order.id}"></td>
            <td>${order.id}</td>
            <td>${order.date}</td>
            <td>${order.status}</td>
        </tr>`
        orderContainer.innerHTML += html
    });
    
}

showorders();


let show_btn = document.getElementById("show");
show_btn.addEventListener('click', ()=>{
    let orders = document.querySelectorAll('input[type="radio"]');
    for (let index = 0; index < orders.length; index++) {
        if(orders[index].checked){
            sessionStorage.setItem("showordercustid", orders[index].value)
        }
    }
    location.replace('showorderadmin.html');
});