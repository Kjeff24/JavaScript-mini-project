const reviews = [
  {
    id: 1,
    name: "Jeff Bezos",
    job: "Business Owner/ Engineer",
    img: "1.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fuga illo obcaecati, cumque dolores reiciendis harum quod qui excepturi voluptatum eos iusto architecto aliquid dicta ea sapiente quis repellendus provident",
  },
  {
    id: 2,
    name: "Miriam Stephen",
    job: "FRONTEND DEVELOPER",
    img: "2.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fuga illo obcaecati, cumque dolores reiciendis harum quod qui excepturi voluptatum eos iusto architecto aliquid dicta ea sapiente quis repellendus provident",
  },
  {
    id: 3,
    name: "James Benjamin",
    job: "UI/UX DESIGNER",
    img: "3.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fuga illo obcaecati, cumque dolores reiciendis harum quod qui excepturi voluptatum eos iusto architecto aliquid dicta ea sapiente quis repellendus provident",
  },
  {
    id: 4,
    name: "Grace Evans",
    job: "PRODUCT MANAGER",
    img: "4.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fuga illo obcaecati, cumque dolores reiciendis harum quod qui excepturi voluptatum eos iusto architecto aliquid dicta ea sapiente quis repellendus provident",
  },
];

const img = document.querySelector(".person-img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".info");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const btns = document.querySelectorAll(".btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showReview(currentItem);
});

function showReview(person) {
  const item = reviews[currentItem];
  author.textContent = item.name;
  job.textContent = item.job;
  img.src = item.img;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function() {
  currentItem++;
  if(currentItem > reviews.length-1){
    currentItem = 0
  }
  showReview(currentItem)
})

prevBtn.addEventListener("click", function() {
  currentItem--;
  if(currentItem < 0){
    currentItem = 3
  }
  showReview(currentItem)
  
})
