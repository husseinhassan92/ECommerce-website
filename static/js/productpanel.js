

const products = JSON.parse(localStorage.getItem('products') || '[]');


function showproducts() {
    const productContainer = document.getElementById('producttable');
    products.forEach(product => {
        let html = 
        `<tr>
            <td><input type="radio" id="${product.id}" name="product" value="${product.id}"></td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>${product.stockQuantity}</td>
        </tr>`
        productContainer.innerHTML += html
    });
    
}

showproducts();


let create_btn = document.getElementById("create");
create_btn.addEventListener('click', ()=>{
    location.replace('createproduct.html');
})


let update_btn = document.getElementById("update");
update_btn.addEventListener('click', ()=>{
    let products = document.querySelectorAll('input[type="radio"]');
    for (let index = 0; index < products.length; index++) {
        if(products[index].checked){
            sessionStorage.setItem("updateproductid", products[index].value)
        }
    }
    location.replace('updateproduct.html');
})


let delete_btn = document.getElementById("delete");
delete_btn.addEventListener('click', ()=>{
    let product_id;
    let products_list = document.querySelectorAll('input[type="radio"]');
    for (let index = 0; index < products_list.length; index++) {
        if(products_list[index].checked){
            product_id = products_list[index].value;
            console.log(product_id);
        };
    };
    let delproduct = products.find(product => product.id === product_id);
    console.log(products.indexOf(delproduct));
    products.splice(products.indexOf(delproduct), 1);
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();
});
