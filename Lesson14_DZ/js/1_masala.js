// class Product {
//     static productCount = 0;
//     constructor(id, name, price) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         Product.productCount++;
//     }
//     totalPrice() {
//         return this.price;
//     }
// }
// class CareProduct extends Product {
//     constructor(id, name, price, warrantyPeriod) {
//         super(id, name, price);
//         this.warrantyPeriod = warrantyPeriod;
//     }
//     totalPrice() {
//         let discout = 0;
//         if (this.warrantyPeriod <= 5 && this.warrantyPeriod > 0) {
//             discout = (6 - this.warrantyPeriod) * 0.1;
//         }
//         return this.price * (1 - discout);
//     }
// }

// let p1 = new Product(1, "Laptop", 1000);
// let p2 = new Product(2, "Phone", 800);
// let p3 = new Product(3, "Printer", 500);
// let c1 = new CareProduct(4, "TV", 1500, 3);
// let c2 = new CareProduct(5, "Washing Machine", 2000, 1);
// let c3 = new CareProduct(6, "Mouse", 800, 9);

// console.log("Mahsulotlar soni:", Product.productCount);
// console.log(`${p1.name} narxi: ${p1.totalPrice()}`);
// console.log(`${c1.name} narxi (kafolat bilan): ${c1.totalPrice()}`);
// console.log(`${c2.name} narxi (kafolat bilan): ${c2.totalPrice()}`);
// console.log(`${c3.name} narxi (kafolat bilan): ${c3.totalPrice()}`);

//###################################################################

// class Pointor {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     static distance(p1, p2) {
//         return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
//     }
// }

// let p1 = new Pointor(5, 5);
// let p2 = new Pointor(9, 8);
// console.log(Pointor.distance(p1, p2));

//###################################################

// class Universitet {
//     constructor(name, departments) {
//         this.name = name;
//         this.departments = [];
//     }
//     addDepartment(dept) {
//         if (!this.departments.includes(dept)) {
//             this.departments.push(dept);
//         }
//     }
//     removeDepartment(dept) {
//         this.departments = this.departments.filter((d) => d !== dept);
//     }
//     showDepartments() {
//         console.log(
//             `${this.name} universiteti bo'limlari: `,
//             this.departments.join(",")
//         );
//     }
// }

// let myUniversity = new Universitet("O‘zbekiston Milliy Universiteti");

// myUniversity.addDepartment("Axborot texnologiyalari");
// myUniversity.addDepartment("Iqtisodiyot");
// myUniversity.addDepartment("Biologiya");
// myUniversity.addDepartment("Fizika");
// myUniversity.addDepartment("Kimyo");

// myUniversity.removeDepartment("Biologiya");
// myUniversity.removeDepartment("Kimyo");

// myUniversity.showDepartments();

//#############################################################################

//Qoshimcha

// class BankAccount {
//     constructor(owner) {
//         this.owner = owner;
//         this.balance = 0;
//     }
//     deposit(amount) {
//         if (amount > 0) {
//             this.balance += amount;
//         }
//     }
//     withdraw(amount) {
//         if (amount && amount <= this.balance) {
//             this.balance -= amount;
//         }
//     }
//     getBalance() {
//         return this.balance;
//     }
// }

// const myAccount = new BankAccount("Temur");
// myAccount.deposit(500);
// myAccount.withdraw(200);
// console.log(myAccount.getBalance());
