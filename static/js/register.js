import { userfun, Admin, Customer } from './main.js';

const regform = document.getElementById('rform');

regform.addEventListener('submit', (event) => {
  event.preventDefault();
  const first_name = document.getElementById('First_name').value;
  const last_name = document.getElementById('last_name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('Email').value;
  const password = document.getElementById('Password').value;
  const user = userfun(email);

  switch (user) {
    case 'admin':
      const admins = JSON.parse(localStorage.getItem('admins') || '[]');
      const current_admin = admins.find((admin) => admin.email === email);
      if (current_admin) {
        alert('Email already exists!');
      } else {
        const admin = new Admin(first_name, last_name, email, password);
        admins.push(admin);
        localStorage.setItem('admins', JSON.stringify(admins));
        location.replace('admin.html');
      }
      break;
    case 'customer':
      const customers = JSON.parse(localStorage.getItem('customers') || '[]');
      const current_customer = customers.find((customer) => customer.email === email);
      if (current_customer) {
        alert('Email already exists!');
      } else {
        const customer = new Customer(first_name, last_name, email, phone, password);
        console.log(customer);
        customers.push(customer);
        localStorage.setItem('customers', JSON.stringify(customers));
        location.replace('customer.html');
      }
      break;

    default:
      break;
  }
});
