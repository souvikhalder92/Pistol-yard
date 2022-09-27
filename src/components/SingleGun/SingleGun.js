import React, { useState } from 'react';
import Gun from '../Guns/Gun';
import Modal from '../Modal/Modal';
import './SingleGun.css'

const SingleGun = (props) => {
  const [modalData,setData] = useState({}); 
  const {gun,increaseCount} = props;
   //console.log(props);
   const {name,action,bullet,price,img,category} = gun;
    
    return (
        <div>
            <div className="card w-full h-full bg-gray-200 shadow-xl">
  <figure><img className='w-96 h-52 mt-5' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-primary">NEW</div>
    </h2>
    <p className='text-left'>{category}</p>
    <p className='text-left'><small>Price: ${price}</small></p>
    <div className="card-action text-left">
      <div className="badge badge-outline">{action}</div> 
      <div className="badge badge-outline ml-1">{bullet}</div>
      <div className='mt-4 text-center'>
      <button onClick={ () => increaseCount()} className="btn btn-sm btn-success">Add To Cart</button>
      <label onClick={() => setData(gun)} htmlFor="my-modal-3" className="btn modal-button btn-sm ml-1">Details</label>
      </div>
    </div>
    
  </div>
</div>
    {modalData && (<Modal data = {modalData} setData = {setData}></Modal>)}
        </div>
    );
};

export default SingleGun;