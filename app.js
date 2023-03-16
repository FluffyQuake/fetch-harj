fetch('https://dummyjson/products').then(response => response.json()).then (({products}) => {
    
    const harderWay = products.filter((product) => product.brand === 'Apple' )

    console.log(harderWay);
});

// Global scope
// Function scope


// JS built-in Objects
const stringObjects = new String('fool');
const numberObjects = new Number(69);
console.log(stringObjects);
console.log(numberObjects);

// Type casting
const isString = '674';
const isNumber = 23;

console.log(Number(isString) + isNumber);
console.log(typeof String(isNumber), String(isNumber));
console.log(Boolean(isNumber))

// Equality Comparison
console.log('==', isString == isNumber)
console.log('===', isString === isNumber)
console.log(Number(isString === isNumber))

// Indexed collections aka Array
const myArray = [1, 2, 3, 4, 5, 6, 7, 8]

// Looping arrays - for, forEach, do...while
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

myArray.forEach((number, index, arr) => {
    console.log(number, index, arr)
})


// let i = 0;

// do {
//     console.log('do...while', myArray[i])
//     i = i + 1
// } while (i < myArray.lenght)

for(const number in myArray) {
    console.log('for...in', number);
}


for(const number of myArray) {
    console.log('for...of', number);
}

// Conditional statements - if else
if (!true) {
    // kui on false, käivitub see koodiblokk
} else{
    // Kui on true, käivitub see koodiblokk
}

if (!true) {
    // Kui on true käivitub see koodblokk
} else if (true) {
    // Kui if on false ja else..if on õige
} else {
   throw new Error('Midagi läks valesti') // Kui ükski eelnev polnud tõene
}


// async function
// (async () => {
//     const response = await fetch('https://dummyjson/products')
//     const { products } = await response.json();
//     console.log(products)
// })();

async function getProductsData() {
    const response = await fetch('https://dummyjson/products');
    const { products } = await response.json();
    console.log(products);

    return products;
}
getProductsData();

async function getProductCategories() {
    const response = await fetch('https://dummyjson/products/categories');
    const data = await response.json();
    
    return data;
}
getProductCategories();


async function createCategoryButtons() {
    // Tee UI button elmente sama palju kui on kategooriaid 

    const categories = await getProductCategories();
    const categoryList = document.querySelector('.category-list');
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('category-button');
        button.innerText = category;
        categoryList.append(button);
    });
}

async function showProductList() {
    const products = await getProductsData();
    
    const productTablebodyElement = document.querySelector('.table-body');

    products.forEach(product => {
        const tableRow = document.createElement('tr');

        const content = `
        <tr>
            <td>${product.id}</td>
            <td>
                <img src ="${product.thumbnail}" alt="${product.title}"/>
            </td>
            <td>${product.title}</td>
            <td>${product.rating}</td>
            <td>${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.discountPercentage}</td>
        </tr>
        `
    tableRow.innerHTML = content;
    productTablebodyElement.append(tableRow);

    });
}


showProductList();
createCategoryButtons();