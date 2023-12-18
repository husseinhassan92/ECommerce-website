let logform = document.getElementById("lform");

logform.addEventListener("submit", (e) => {
    e.preventDefault();

    users = JSON.parse(localStorage.getItem("users") || "[]");
    console.log(users);

    let email = document.getElementById("Email");
    let password = document.getElementById("Password");

    let current_user = users.find((user) => user.email === email.value && user.password === password.value);
    console.log(current_user);

    if(current_user){
        location.replace("home.html")
    } else{
        alert("Invalid email or password");
        location.replace("register.html")
    } 
});