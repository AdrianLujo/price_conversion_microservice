# Communication Contract

## About the Microservice

This microservice converts a US Dollar currency to other currencies to the nearest cent.

This microservice employs the [currency-api](https://github.com/fawazahmed0/currency-api). Conversion rates are updated once daily. 

Microservice is set up to run locally on `localhost:4000` or `127.0.0.1:4000`

## Setting Up the Microservice

1. Download Github repository to your local machine. 
2. Open a command prompt and navigate to the price_conv_ms folder.
3. run `npm install` command.
4. run `npm start` command.
5. Microservice will run `localhost` port `4000`

## Testing the Microservice

1. Download Github repository to your local machine. 
2. Open a command prompt and navigate to the test_price_conv_ms folder.
3. run `npm install` command.
4. run `npm start` command.
5. Test application will run `localhost` port `3000`
6. Ensuring that the microservice and the testing application are running in separate command prompts: Open a web browser and navigate to `localhost:3000`
7. Enter a value into the form and submit to have the microservice return an object with the submitted dollar value's equivalent in various supported currencies.

## REQUESTING and RECEIVING Data from Microservice

### REQUEST Data
A request can be made to the microservice by using a GET request with a query string
`http://localhost:4000?price=${value}`, where value is the dollar to convert to other currencies.
```js

const [serverResponse, setServerResponse] = useState("");
    const fetchPrices = async (event) => {
        event.preventDefault()
        const res = await axios.get(`http://localhost:4000?price=${value}`)
        setServerResponse(res.data)
    };
```

### RECEIVING Data

Data from the GET request is returned in an object `res.data` which is structed as key value pairs. Some examples of how to display this data:

```js
//returns the value 1
<p>{serverResponse["usd"]}</p>

//iterates through the object to display key valye pairs
{Object.entries(serverResponse).map(([key,value]) => (
                <div>
                    {`${value}   ${key} `}
                </div>
            ))
```

## UML Sequence Diagram

![Sequence diagram (1)](https://user-images.githubusercontent.com/84686636/199614471-18de0a68-1071-4b1a-88c1-2456eec8c19e.png)
