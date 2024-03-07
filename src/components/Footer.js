import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button
        className="btn btn-danger col-2"
        onClick={() => {
          props.resetQuantity();
        }}
      >
        <b>Reset</b>
      </button>
      <div className="col-8 bg-dark text-white text-center">
        <h4>{props.totalAmount}</h4>
      </div>
      <button className="btn btn-primary col-2"><b>Pay Now</b></button>
    </div>
  );
}
