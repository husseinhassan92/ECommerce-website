
let users = [];

let regform = document.getElementById("rform");

regform.addEventListener("submit", (e) => {
    e.preventDefault();

    let users = [];
    users = JSON.parse(localStorage.getItem("users") || "[]");
    console.log(users);
    let first_name = document.getElementById("First_name");
    let last_name = document.getElementById("last_name");
    let email = document.getElementById("Email");
    let password = document.getElementById("Password");

    let current_user = users.find((user) => user.email === email.value);
    console.log(current_user);

    if(current_user){
        alert("Email already exists!");
        console.log(current_user.first_name);
    } else{
        let user = {
            id : users.length + 1,
            first_name: first_name.value,
            last_name : last_name.value,
            email : email.value,
            password : password.value,
        }
        users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(user)
        console.log(users);
        localStorage.setItem("users",JSON.stringify(users));
        location.replace("login.html")
    }

    
});








