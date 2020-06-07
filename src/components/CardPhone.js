import React from "react";


  const CardPhone = (phone) => (
    <div key={phone._id} className="card">
      <p className="card_phone_condition ">{phone.condition}</p>
      <img src={phone.image} className="" alt="phone" />
      <p className="card_phone_name ">{phone.phone_name}</p>
      <div className="card_phone_details ">
        <p className="card_phone_others ">{phone.lock_status}</p>
        <span>|</span>
        <p className="card_phone_others ">{phone.storage}</p>
      </div>
      <p className="card_phone_others ">Unit Per Price</p>
      <p className="card_phone_others price ">${phone.price}</p>
      <a href="/#" className="button">
        Buy
      </a>
    </div>
  );


  export default CardPhone;