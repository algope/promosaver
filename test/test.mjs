import {
    expect
} from 'chai';
import {
    readFileSync
} from 'fs';

import {
    process
} from '../src/services/engine.mjs'


const filePromotions = readFileSync('./src/config/promotions.json');
const promotions = JSON.parse(filePromotions);


describe("Correct promotion calculation test", () => {

    it("should return 100 for scenario A", () => {
        let basket = ["A", "B", "C"];
        let subtotal = 100;
        let result = process(promotions, basket, subtotal)
        expect(result).to.equal(100)
    })

    it("should return 370 for scenario B", () => {
        let basket = ["A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "C"]
        let subtotal = 420;
        let result = process(promotions, basket, subtotal)
        expect(result).to.equal(370)
    })

    it("should return 285 for scenario C", () => {
        let basket = ["A", "A", "A", "B", "B", "B", "B", "B", "C", "D"]
        let subtotal = 335;
        let result = process(promotions, basket, subtotal)
        expect(result).to.equal(285)
    })

    it("should return 110 for scenario D", () => {
        let basket = ["C", "D", "D", "C", "A"]
        let subtotal = 120;
        let result = process(promotions, basket, subtotal)
        expect(result).to.equal(110)
    })
})