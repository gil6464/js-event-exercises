document.addEventListener("DOMContentLoaded", open);

function open () {
     let div = document.querySelector("#my-day");
     let button = document.querySelector(".button");

     button.addEventListener("click", () => {
      div.classList.toggle('open');
     });
};

