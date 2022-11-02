import React, { useState } from 'react';
import axios from 'axios';

const PriceConv = () => {
    const [price, setPrice] = useState("");
    const [serverResponse, setServerResponse] = useState("");
    const fetchPrices = async (event) => {
        event.preventDefault()
        const res = await axios.get(`http://localhost:4000?price=${price}`)
        setServerResponse(res.data)
    };

    const onChange = (event) => {
        setPrice(event.target.value)
    };

    return (
        <div>
            <form onSubmit={fetchPrices}> 
                <input value={price} onChange={onChange}></input>
                <button type="submit">Submit</button>
            </form>
            <p>Requested Values</p>
                <div>
                    <p>{serverResponse["usd"]} US Dollar(s) is:</p>
                    <p>{serverResponse["cad"]} Canadian Dollar(s)</p>
                    <p>{serverResponse["eur"]} Euro(s)</p>
                </div>
            <p>Additional Values and Currencies</p>
            {Object.entries(serverResponse).map(([key,price]) => (
                <div>
                    {`${price}   ${key} `}
                </div>
            ))
            }
        </div>
    );
}

export default PriceConv;