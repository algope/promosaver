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

    it("should return 0 for scenario A", () => {
        let basket = ["A", "B", "C"];
        let result = process(promotions, basket)
        expect(result).to.equal(0)
    })

    it("should return 50 for scenario B", () => {
        let basket = ["A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "C"]
        let result = process(promotions, basket)
        expect(result).to.equal(50)
    })

    it("should return 50 for scenario C", () => {
        let basket = ["A", "A", "A", "B", "B", "B", "B", "B", "C", "D"]
        let result = process(promotions, basket)
        expect(result).to.equal(50)
    })
})