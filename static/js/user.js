
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
    constructor(first_name, last_name, email, password) {
        super(first_name, last_name, email, password);
        this.id = self.crypto.randomUUID();
        Customer.count++;
    }
}
