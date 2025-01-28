// 1. Given object
let menu = {
    width: 200,
    height: 300,
    title: "my menu"
};

// Function to double numeric values in the object
function doubleNumericValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2; // Double the value
        }
    }
}

// Call the function to double numeric values
doubleNumericValues(menu);
console.log("Updated menu:", menu); // Outputs: { width: 400, height: 600, title: "my menu" }

// 2. Array of products
let arr = [
    { id: 1, title: "bicycle", price: 45000, discount: 10 },
    { id: 2, title: "roller-skates", price: 15000, discount: 5 },
    { id: 3, title: "Kick scooter", price: 10000, discount: 30 },
    { id: 4, title: "skis", price: 25000, discount: 20 },
    { id: 5, title: "skate", price: 10000, discount: 0 }
];

// 2.1. Print only the titles of the products
console.log("Product Titles:");
for (let product of arr) {
    console.log(product.title);
}

// 2.2. Print each product in the format "<title> (<price>)"
console.log("\nProduct Titles with Prices:");
for (let product of arr) {
    console.log(`${product.title} (${product.price})`);
}

// 2.3. Print each product in the format "<title> (<price with discount>)"
console.log("\nProduct Titles with Discounted Prices:");
for (let product of arr) {
    let discountedPrice = product.price - (product.price * product.discount / 100);
    console.log(`${product.title} (${discountedPrice})`);
}