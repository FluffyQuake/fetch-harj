/* fetch('https://dummyjson/products').then(response => response.json()).then (({products}) => {
    
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
} */


// async function
// (async () => {
//     const response = await fetch('https://dummyjson/products')
//     const { products } = await response.json();
//     console.log(products)
// })();

// async function getProductsData() {
//     // teeb asünkroonseks funktsiooni getProductsData
//     const response = await fetch('https://dummyjson/products');
//     // paneme response ehk vastuse ootama fetchi
//     const { products } = await response.json();
//     // paneme productid ootama response .json faili
//     console.log(products);
//     // consol loogime produktid

//     return products;
//     // lõpetab funktsiooni täitmise
// }
// getProductsData();





// Gen - defineerin asünkroonse funktsiooni nimega getProductsData.
// Kaspar - Määratleb asünkroonse funktsiooni nimega getProductsData.
async function getProductsData() {
    // Gen - defineerin muutuja nimega response, ootan ära vastuse API päringule ning salvesta muutujasse response
    // Kaspar - Kasutab „https://dummyjson.com/products” lõpp-punktist andmete hankimiseks funktsiooni fetch() ja ootab vastust.
    const response = await fetch('https://dummyjson.com/products');
    // Gen - ootame kuni response muudetakse JSON formati ning võtame response sest 'key' nimega products ja salvestame samanimelisese muutujasse.
    // Kaspar - Ekstraktib tooteandmed JSON-vastusest.
    const { products } = await response.json();

    // Gen - Tagastab muutuja products
    // Kaspar - Tagastab ekstraktitud toodete andmed.
    return products;
}

// Gen - Käivitab funktsiooni getProductsData
// Kaspar - Kutsub välja funktsiooni getProductsData(), kuid ei salvesta ega kasuta tulemust.
getProductsData();

//Gen - Defineerin asünkroonse funktsiooni nimega getProductsCategories
//Kaspar - Määratleb asünkroonse funktsiooni nimega getProductCategories.
async function getProductCategories() {
    //Gen - Defineerin muutuja nimega response, ootan ära vastuse API päringule ning salvestan muutujasse response
    //Kaspar - Kasutab „https://dummyjson.com/products/categories” lõpp-punktist andmete hankimiseks funktsiooni fetch() ja ootab vastust.
    const response = await fetch('https://dummyjson.com/products/categories');
    //Gen - Ootame kuni response muudetakse JSON ning salvestame vastuse muutujasse data
    //Kaspar - Ekstraktib vastusest JSON-andmed.
    const data = await response.json();

    //Gen - Tagastab muutuja nimega data
    //Kaspar - Tagastab ekstraktitud JSON-andmed.
    return data;
}

//Gen - Defineerin sünkroonse funktsiooni nimega createCategoryButtons
//Kaspar - Määratleb asünkroonse funktsiooni nimega createCategoryButtons.
async function createCategoryButtons() {
    //Gen - Käivitan funktsiooni getProductCategories, mille vastuse ma ootan ära ning salvestan muutujasse nimega categories
    //Kaspar - Kutsub kategooriate loendi saamiseks välja funktsiooni getProductCategories() ja ootab tulemust.
    const categories = await getProductCategories();
    //Gen - Võtab HTML dokumendi elemendi klassiga .category-list ning salvestan muutjasse categoryList.
    //Kaspar - Valib DOM-i elemendi klassiga .category-list.
    const categoryList = document.querySelector('.category-list');
    //Gen - 
    //Kaspar - Itereerib/kordab läbi kategooriate massiivi iga kategooria.
    categories.forEach(category => {
        //
        //Kaspar - Loob uue nupuelemendi.
        const button = document.createElement('button');
        //
        //Kaspar - Lisab uuele nupuelemendile klassi kategooria nupu.
        button.classList.add('category-button');
        //
        //Ksapar - Määrab uue nupuelemendi tekstisisu praegusele kategooriale.
        button.innerText = category;
        //
        //Kapar - Lisab uue nupu elemendi valitud .category-list DOM-i elemendile.
        categoryList.append(button);
    });
}

//
//Kaspar - Määratleb asünkroonse funktsiooni nimega showProductList.
async function showProductList() {
    // 
    //Ksapar - Kutsub toodete loendi saamiseks funktsiooni getProductsData() ja ootab tulemust.
    //Näita tootelisti kategooria nuppude all.
    const products = await getProductsData();

    //
    //Kpsaar - Valib DOM-i elemendi klassiga .table-body.
    const productTablebodyElement = document.querySelector('.table-body');

    //
    //Ksapra - Itereerib läbi iga tootemassiivi tooteobjekti.

    products.forEach((product) => {

        //
        //Kspara - Logib praeguse tooteobjekti konsooli.
        console.log(product)
        //
        //KAPSar - Loob uue tr (tabelirida) elemendi.
        const tableRow = document.createElement('tr');

        //
        //Kspar - Määratleb HTML-koodi stringi, mida kasutatakse uue sisuna
        const content = `
            <tr>
                <td>${product.id}</td>
                <td>
                    <img src="${product.thumbnail}" alt="${product.title}" />
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
    })
}

showProductList();
createCategoryButtons();


/* Defines an asynchronous function named getProductsData.
Uses fetch() to get data from the 'https://dummyjson.com/products' endpoint, and waits for the response.

     Extracts the products data from the JSON response.
     Returns the extracted products data.
     Calls the getProductsData() function, but does not store or use the result.
     Defines an asynchronous function named getProductCategories.
     Uses fetch() to get data from the 'https://dummyjson.com/products/categories' endpoint, and waits for the response.
     Extracts the JSON data from the response.
     Returns the extracted JSON data.
     Defines an asynchronous function named createCategoryButtons.
     Calls the getProductCategories() function to get a list of categories, and waits for the result.
     Selects the DOM element with the class .category-list.
     Iterates through each category in the categories array.
     Creates a new button element.
     Adds the class category-button to the new button element.
     Sets the text content of the new button element to the current category.
     Appends the new button element to the selected .category-list DOM element.
     Defines an asynchronous function named showProductList.
     Calls the getProductsData() function to get a list of products, and waits for the result.
     Selects the DOM element with the class .table-body.
     Iterates through each product object in the products array.
     Logs the current product object to the console.
     Creates a new tr (table row) element.
     Defines a string of HTML code to be used as the contents of the new */