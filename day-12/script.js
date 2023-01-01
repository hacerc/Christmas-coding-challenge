const boxes = document.querySelectorAll(".box");
const pokeApi = "https://pokeapi.co/api/v2";
window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop);
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

const picture = (element) => {
  const selectedBox = document.querySelector(".selected-box");
  selectedBox.innerHTML += `<div class="box"><h2>${element.email}</h2></div>`;
};
const getAllComments = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  console.log(data);
  return data;
};
getAllComments().then(async(item)=>{
  await item.forEach((element)=>{
    console.log(element);
    picture(element)})
  
});
