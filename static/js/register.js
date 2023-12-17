import { userfun, Admin, Customer } from "./user.js";



let regform = document.getElementById("rform");

regform.addEventListener('submit', function(event) {

    event.preventDefault();
    let first_name = document.getElementById("First_name").value;
    let last_name = document.getElementById("last_name").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    let user = userfun(email);

    switch (user) {
        case "admin":
            let admins = JSON.parse(localStorage.getItem("admins") || "[]");
            let current_admin = admins.find((admin) => admin.email === email);
            if(current_admin){
                alert("Email already exists!");
            } else {
                let admin = new Admin(first_name, last_name, email, password);
                admins.push(admin)
                localStorage.setItem("admins",JSON.stringify(admins));
                location.replace("admin.html")
            };
            break;
        case "customer":
            let customers = JSON.parse(localStorage.getItem("customers") || "[]");
            let current_customer = customers.find((customer) => customer.email === email);
            if(current_customer){
                alert("Email already exists!");
            } else {
                let customer = new Customer(first_name, last_name, email, password);
                console.log(customer)
                customers.push(customer)
                localStorage.setItem("customers",JSON.stringify(customers));
                location.replace("customer.html")
            };
            break;
    
        default:
            break;
    }
});