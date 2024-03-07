import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-3">
        <h4>
          {props.product.name}
        </h4>
      </div>
      <div className="col-2">
          <h4><span className="badge bg-secondary col-8">₹ {props.product.price}</span></h4>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>
      <button className="col-2 btn btn-danger" onClick={()=>{
        props.removeItem(props.index)
      }}>
            Remove
      </button>
    </div>
  );
}
