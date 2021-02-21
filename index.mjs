import {
    readFileSync
} from 'fs';
import {
    process
} from './src/services/engine.mjs'

let filePromos = readFileSync('./src/config/promotions.json');
let promos = JSON.parse(filePromos);

let scenarioA = ["A", "B", "C"];
let subtotalA = 100;

let scenarioB = ["A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "C"]
let subtotalB = 420

let scenarioC = ["A", "A", "A", "B", "B", "B", "B", "B", "C", "D"]
let subtotalC = 335

console.log(">Welcome to the promotion engine.")
console.log("  Currently active promotions: ")
for (const promo of promos) {
    console.log("   -" + promo.description)
}

let applicablePromotion = process(promos, scenarioC);
let priceWithPromotion = subtotalC - applicablePromotion;

console.log("The applicable promotion is " + applicablePromotion)
console.log("BASKET TOTAL AFTER PROMOTION:-> " + priceWithPromotion)