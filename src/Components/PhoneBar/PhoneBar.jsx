import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => console.log(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadData = data.data.data;
                console.log(loadData);
                const phonesData = loadData.map(phone => {
                    const parse = phone.slug.split('-')
                    const price = parseInt(parse[1]);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo;
                })
                console.log(phonesData);
                setPhones(phonesData);
            })
    })
    return (
        <div>
            <h2 className='text-4xl font-bold m-5 text-center'>iPhone Price Chart</h2>
            <BarChart
                width={1200}
                height={600}
                data={phones}
            >
                <Bar fill="purple" dataKey="price" />
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="price"></YAxis>
                <Tooltip/>
            </BarChart>
        </div>
    );
};

export default PhoneBar;