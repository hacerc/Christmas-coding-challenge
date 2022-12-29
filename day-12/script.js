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

const picture = async () => {
  const selectedBox = document.querySelector(".selected-box");
  const results = await getAllComments();
  results.forEach((item) => {
    selectedBox.innerHTML += `<div class="box"><h2>${item.email}</h2></div>`;
    console.log(selectedBox.innerHTML);
    console.log(item);

  });
};
const getAllComments = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  console.log(data);
  return data;
};
picture();
