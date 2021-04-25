import React from "react";

const CardItem = ({ item, img }) => {
  return (
    <div className="card" style={{ width: "100%", height: "100%" }}>
      <img
        src={img}
        style={{ width: "100%", height: 230 }}
        className="card-img-top"
        alt={item.value}
      />
      <div className="card-body">
        <h5 className="card-title">ID: {item.id}</h5>
        <p className="card-text">{item.value}</p>
      </div>
    </div>
  );
};

export default CardItem;
