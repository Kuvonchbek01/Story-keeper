// const title = document.querySelector("#title");
// const cards = document.querySelectorAll(".card");
// const form = document.querySelector("form");
// const input = document.querySelector("#input");

// cards.forEach((card) => {
//   card.style.background = card.textContent.toLowerCase();

//   card.addEventListener("click", (e) => {
//     if ((e.target = card)) {
//       document.querySelector("body").style.background = card.textContent;
//       title.textContent = card.textContent.toUpperCase();
//       card.classList.toggle("animation");
//     }
//   });
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (input.value) {
//     document.querySelector("body").style.background = input.value;
//     title.textContent = input.value;
//   }else{
//       alert('type a color name')
//   }

//   input.value = ''
// });

const title = document.querySelector("#title");
const textArea = document.querySelector("#text-area");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const titleKeeper = document.querySelector("#title-keeper");
const accordionBody = document.querySelector(".accordion-body");
const dateKeeper = document.querySelector("#date-keeper");
const timeKeeper = document.querySelector("#time-keeper");
const form = document.querySelector(".form");
const container = document.querySelector(".container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

    if(title.value && textArea.value && date.value && time.value){
        const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("p-2");
  card.setAttribute("style", "width: 20rem");
  card.innerHTML = `
    <h5 class="card-title mb-2" id="title-keeper">${title.value}</h5>
    <div class="accordion mb-3" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Full Story
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">${textArea.value}</div>
        </div>
      </div>
    </div>
    <p id="date-keeper">Date: ${date.value}</p>
    <p id="time-keeper">Time: ${time.value}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    `;
  container.appendChild(card);
    }



  clearValues()
});

function clearValues() {
  title.value = '';
  textArea.value = '';
  date.value = '';
  time.value = '';
}


