import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='border-2 p-5 bg-purple-100 border-purple-400 rounded'>
            <p className=''>
                <span className='text-6xl text-purple-600 font-bold'>${price.price}</span>
                <span className='font-semibold'>/month</span>
            </p>
            <p className='text-2xl font-semibold'>{price.name}</p>
            <div className='mt-5'>
                <p className='text-2xl'>Features</p>
                {
                    price.features.map((feature, i) => <Feature
                        key={i}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <div>
                <button className='bg-purple-600 w-full mt-5 p-2 text-white font-bold text-xl rounded'>Purchage</button>
            </div>
        </div>
    );
};

export default PriceCard;