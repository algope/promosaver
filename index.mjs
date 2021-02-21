import {
    readFileSync
} from 'fs';

import express from 'express';

import bodyParser from "body-parser";

import {
    process
} from './src/services/engine.mjs'

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const filePromos = readFileSync('./src/config/promotions.json');
const promos = JSON.parse(filePromos);

app.post('/qualifyForPromotions', function (req, res) {
    const basket = req.body.basket;
    const basketSubtotal = req.body.subtotal;
    let basketTotal = process(promos, basket, basketSubtotal);

    return res.send({
        "totalAfterPromotions": basketTotal
    });
});


app.listen(3000, () =>

    console.log('App listening on port 3000'),

);