import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';
import Feature from '../Feature/Feature';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    })
    return (
        <div>
            <h2 className='text-center mt-5 text-4xl font-bold rounded md:w-2/4 w-3/4 mx-auto'>Our Offer Prices</h2>
            <div className='grid md:grid-cols-3 gap-5 m-5 md:mx-auto mt-5'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }
            </div> 
        </div>
    );
};

export default PriceList;