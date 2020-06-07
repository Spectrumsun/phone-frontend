import React from "react";

const CardLoaderPlaceHolder = (i) => (
  <div className="card" key={i}>
    <p className="card_phone_condition loading"></p>
    <figure className="card-image loading" />
    <p className="card-title loading"></p>
    <p className="card-title loading"></p>
    <p className="card-title loading"></p>
    <p className="card-title loading"></p>
    <a href="/#" className="button"></a>
  </div>
);

export default CardLoaderPlaceHolder;
