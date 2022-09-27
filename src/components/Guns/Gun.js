import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';
import './Gun.css'

const Gun = ({increaseCount}) => {
    const [gun,setGun] = useState([]);

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGun(data));

    },[])
    return (
        <div className='text-xl mt-4'>
            <h1>All Guns: {gun.length}</h1>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] mx-auto'>
            {
                gun.map((guns) => <SingleGun 
                    key = {guns.id}
                    gun = {guns}
                    increaseCount = {increaseCount}></SingleGun> 
                    )
            }
            </div>
        </div>
    );
};

export default Gun;