import React, { useState } from "react";
import mean from "./meandate";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

function Mean({ change, handleOrder }) {
  return (
    <div className="meandate">
      {mean.map((item) => (
        <MeanItem key={item.key} mean={item} change={change} handleOrder={handleOrder} />
      ))}
    </div>
  );
}

function MeanItem({ mean, change, handleOrder }) {
  const [value, setValue] = useState(1);

  const minus = () => {
    setValue((prevValue) => (prevValue > 1 ? prevValue - 1 : prevValue));
  };

  const add = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleOrderClick = () => {
    change(mean.price * value);
    handleOrder(mean, value);
  };

  return (
    <div key={mean.key} className="mn">
      <img src={mean.img} className="feedimg" alt={mean.name} />
      <div className="valuelattice">
        <div>
          <p>{mean.name}</p>
        </div>
        <div className="value">
          <button onClick={minus}>
            <FiMinus />
          </button>
          <p>{value}</p>
          <button onClick={add}>
            <IoMdAdd />
          </button>
        </div>
        <div>
          <p>金額: {mean.price}</p>
        </div>
        <div>
          <button className="valueok" onClick={handleOrderClick}>下單</button>
        </div>
      </div>
    </div>
  );
}

export default Mean;
