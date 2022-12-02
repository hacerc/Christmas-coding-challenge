import React, { useState } from "react";

const Create = () => {
  const [flower, setFlower] = useState({});
  const addFlower=(event)=> {
    event.preventDefault()
    console.log(flower);
  }
  return (
    <form>
      <div className="form-group">
        <label>Flower Name</label>
        <input
          type={"text"}
          value={flower.name}
          onChange={(event) =>
            setFlower((prevFlower) => ({
              ...prevFlower,
              name: event.target.value,
            }))
          }
        />
      </div>
      <div className="form-group">
        <label>Delivery Address</label>
        <input
          type={"text"}
          value={flower.deliveryAddress}
          onChange={(event) =>
            setFlower((prevFlower) => ({
              ...prevFlower,
              deliveryAddress: event.target.value,
            }))
          }
        />
      </div>
      <div className="form-group">
        <label>Stock Status</label>
        <input type={"text"} value={flower.stockStatus}
          onChange={(event) =>
            setFlower((prevFlower) => ({
              ...prevFlower,
              stockStatus: event.target.value}))}/>
      </div>
      <div className="form-group">
        <button onClick={addFlower}>Add Flower</button>
      </div>
    </form>
  );
};
export default Create;