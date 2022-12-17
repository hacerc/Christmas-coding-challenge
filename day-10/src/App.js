import { useState } from "react";
import "./App.scss";
import Create from "./components/flowers/create/Create";
import Header from "./components/shared/header/Header";
import List from "./components/flowers/list/List";

function App() {
  const [flower, setFlower] = useState({
    name: "",
    deliveryAddress: "",
    stockStatus: "",
    image: "",
  });
  const [isValid, setIsValid] = useState({
    name: true,
    deliveryAddress: true,
    stockStatus: true,
    image: true,
  });
  const [flowerList, setFlowerList] = useState([
    {
      name: "orcid",
      deliveryAddress: "SW20 0BH",
      stockStatus: "100",
      image:
        "https://dailymedia.case.edu/wp-content/uploads/2019/02/15110655/GettyImages-927608138-759x500.jpg",
    },
    {
      name: "peony",
      deliveryAddress: "SW20 0BH",
      stockStatus: "98",
      image:
        "https://cdn.britannica.com/40/189540-050-1307654B/garden-peonies.jpg",
    }, {
      name: "succulent",
      deliveryAddress: "SW20 0BH",
      stockStatus: "97",
      image:
        "https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_webp/https://surrealsucculents.co.uk/wp-content/uploads/2022/09/Mystery-Bundle-Picture.jpg",
    }
  ]);
  const addFlower = (event) => {
    event.preventDefault();
    setIsValid({ ...flower });
    if (Object.values(flower).every((value) => value)) {
      setFlowerList(prevFlowerList =>[...prevFlowerList,flower]) 
    setFlower ({
      name: "",
      deliveryAddress: "",
      stockStatus: "",
      image: "",
    })
    }
  };
  return (
    <div className="app">
      <Header />
      <Create flower={flower} isValid={isValid} addFlower={addFlower} setFlower={setFlower}/>
      <List flowerList={flowerList} />
    </div>
  );
}

export default App;
