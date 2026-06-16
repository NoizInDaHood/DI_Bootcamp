// Exercise 2: Readonly Properties in a Class
// What You Will Learn:

// How to use the readonly modifier to make class properties immutable.
// How to prevent modifications to class properties after initialization.


// Instructions:
// Create a class Product with the following properties:

// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price. Attempt to modify the id property after creating a new instance of the class and observe the result.

class Product {
    readonly id: number;
    public name: string;
    public price: number;
    constructor(id:number, name:string, price:number) {
       this.id = id;
       this.name = name;
       this.price = price;
    }
   public getProductInfo(): string {
    return ` This is a ${this.name} and it cost $${this.price}`
   }
}

const product1 = new Product(1,"Laptop", 1200);

console.log(product1.getProductInfo());
