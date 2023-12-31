
export function userfun(email) {
    const emailformat = /^\w+[\w\._-]+@hmy+\.[a-z]/gm;
    console.log(email);
    if (emailformat.test(email)) {
        return "admin";
    } else {
        return "customer";
    }
}

class User {
  constructor(first_name, last_name, email, password) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
  }
}

export class Admin extends User {
    static count = 0;
    constructor(first_name, last_name, email, password) {
        super(first_name, last_name, email, password);
        this.id = self.crypto.randomUUID();
        Admin.count++;
    }
}

export class Customer extends User {
    static count = 0;
    constructor(first_name, last_name, email, phone, password) {
        super(first_name, last_name, email, password);
        this.phone = phone;
        this.id = self.crypto.randomUUID();
        Customer.count++;
    }
}


export class Product {
    static count = 0;
    constructor(name, category, price, description, stockQuantity, productImage) {
        this.id = self.crypto.randomUUID();
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
        this.stockQuantity = stockQuantity;
        this.productImage = productImage;
        Product.count++;
    }
}

export class Cart {
    static count = 0;
    constructor(user, items = []) {
        this.id = self.crypto.randomUUID();
        this.user = user;
        this.items = items;
        Order.count++;
    }
}

export class WishList {
    static count = 0;
    constructor(user, items = []) {
        this.id = self.crypto.randomUUID();
        this.user = user;
        this.items = items;
        Order.count++;
    }
}

export class Order {
    static count = 0;
    constructor(user, items = {}, status = "Pending") {
        this.id = self.crypto.randomUUID();
        this.date = new Date().toUTCString()
        this.user = user;
        this.items = items;
        this.status = status;
        Order.count++;
    }
}