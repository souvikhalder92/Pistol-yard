import React from 'react';

const Modal = ({data,setData}) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative text-left">
    <label onClick={() => setData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <img className="w-80" src={data.img} alt="" />
    <h3 className="text-lg font-bold">{data.name}</h3>
    <p><small>Category: {data.category}</small></p>
    <p><small>Action: {data.action}, Bullet: {data.bullet}</small></p>
    <p><small>Price: {data.price}</small></p>
  </div>
</div>
        </div>
    );
};

export default Modal;