let list = document.querySelectorAll(".item");
let next = document.getElementById("next");
let prev = document.getElementsById("prev");

let count = list.length;
let active = 0;

console.log(list);

next.onclick = () => {
  let activeOld = document.querySelector(".active");
  activeOld.classList.remove("active");

  list[1].classList.add("active");
};

prev.onclick = () => {
  let activeOld = document.querySelector(".active");
  activeOld.classList.remove("active");
};
