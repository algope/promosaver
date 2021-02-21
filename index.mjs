import {
    readFileSync
} from 'fs';

import express from 'express';

import {
    process
} from './src/services/engine.mjs'

const app = express();
 
const filePromos = readFileSync('./src/config/promotions.json');
const promos = JSON.parse(filePromos);




// console.log(">Welcome to the promotion engine.")
// console.log("  Currently active promotions: ")
// for (const promo of promos) {
//     console.log("   -" + promo.description)
// }

// let basketTotal = process(promos, scenarioD, subtotalD);

// console.log("BASKET TOTAL AFTER PROMOTION:-> " + basketTotal)

app.listen(3000, () =>

  console.log('App listening on port 3000'),
  
);