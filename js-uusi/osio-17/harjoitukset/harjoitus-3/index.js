class Product {
    #id;
    static num = 0;

    constructor(name, price) {
        this.#id = Product.getId();
        this.name = name;
        this.price = price;
    }
    
    static getId() {
        return Product.num++;
    }

    get id() {
        return this.#id;
    }

    get description() {
        return `Product: ${this.name}, price: ${this.price}`;
    }
}

class ShoppingCart {    
    #products;

    constructor(discountStrategy) {
        this.#products = [];
        this.discountStrategy = discountStrategy;
    }

    add(product) {
        this.#products.push(product);
    }

    remove(id) {
        this.#products = this.#products.filter(p => p.id !== id);
    }

    clear() {
        this.#products = [];
    }

    get products() {
        return this.#products.map(p => `${p.name} (id: ${p.id}, price: ${p.price} €)`).join("\n");
    }

    get total() {
        const total = this.#products.reduce((sum, product) => sum + product.price, 0);

        if (!this.discountStrategy) {
            return total;
        }
        
        if (this.discountStrategy.limit3 && total >= this.discountStrategy.limit3) {
            return total * (1 - this.discountStrategy.discount3 / 100);
        }

        if (this.discountStrategy.limit2 && total >= this.discountStrategy.limit2) {
            return total * (1 - this.discountStrategy.discount2 / 100);
        }

        if (this.discountStrategy.limit1 && total >= this.discountStrategy.limit1) {
            return total * (1 - this.discountStrategy.discount1 / 100);
        }

        return total;
    }
}

class DiscountStrategy {
    constructor(limit1, discount1, limit2, discount2, limit3, discount3) {
        if (limit1 && discount1 && discount1 > 0) {
            this.limit1 = limit1;
            this.discount1 = discount1;
        }

        if (limit2 && discount2 && discount2 > 0) {
            this.limit2 = limit2;
            this.discount2 = discount2;
        }

        if (limit3 && discount3 && discount3 > 0) {
            this.limit3 = limit3;
            this.discount3 = discount3;
        }
    }
}

const product1 = new Product("Omena", 2.5);
const product2 = new Product("Banaani", 1.9);
const product3 = new Product("Kurkku", 1.6);

const discountStrategy = new DiscountStrategy(9, 5);
const cart = new ShoppingCart(discountStrategy);

cart.add(product1);
cart.add(product2);
cart.add(product3);
console.log(cart.products);
console.log(`Yhteensä: ${cart.total} €`);

cart.remove(1);
console.log(cart.products);
console.log(`Yhteensä: ${cart.total} €`);

cart.add(product1);
cart.add(product2);
cart.add(product3);
console.log(cart.products);
console.log(`Yhteensä: ${cart.total} €`);

cart.clear();
console.log(cart.products);
console.log(`Yhteensä: ${cart.total} €`);