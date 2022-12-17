import React from "react";

const Create = ({flower,isValid,addFlower,setFlower}) => {
  
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
        {!isValid.name&&(<p>Name can not be empty</p>)}
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
         {!isValid.deliveryAddress&&(<p>Adress can not be empty</p>)}
      </div>
      <div className="form-group">
        <label>Stock Status</label>
        <input
          type={"text"}
          value={flower.stockStatus}
          onChange={(event) =>
            setFlower((prevFlower) => ({
              ...prevFlower,
              stockStatus: event.target.value,
            }))
          }
        />
         {!isValid.stockStatus&&(<p>Stock can not be empty</p>)}
      </div>
      <div className="form-group">
        <label>Image</label>
        <input
          type={"text"}
          value={flower.image}
          onChange={(event) =>
            setFlower((prevFlower) => ({
              ...prevFlower,
              image: event.target.value,
            }))
          }
        />
         {!isValid.image&&(<p>Image can not be empty</p>)}
      </div>
      <div className="form-group">
        <button onClick={addFlower}>Add Flower</button>
      </div>
    </form>
  );
};
export default Create;
