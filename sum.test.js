const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

import expect from "expect";
import { getProductsData } from "./app";

test('getting products data from json file', async() => {
    const response = await getProductsData();
    // return getProductsData().then(data => {
    
        expect(response).toBe(Array);
    })
// })