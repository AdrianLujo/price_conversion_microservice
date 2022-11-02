const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const axios = require("axios");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const axiosPriceGet = axios.create({
    baseURL: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies'
});

const priceConv = (price, usd) => {
    const result = new Object()
    Object.entries(usd).forEach(([key, value]) => {
        const newPrice = Math.round((value*price) * 100)/100
        console.log(value)
        result[key] = newPrice;
    })
    return result;
};

app.get('/', async(req, res) => {
    const {price} = req.query;
    console.log(price)
    const response = await axiosPriceGet.get('/usd.min.json');
    const {usd} = response.data;
    console.log(typeof usd);
    const result = priceConv(price, usd);
    res.status(200).json(result);
    
    });

app.listen(4000, () => {
    console.log('Listening at port 4000')
});