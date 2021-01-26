document.addEventListener("DOMContentLoaded", start);

function start() {
     let paragraph = document.querySelectorAll(".para");
   
    for (let para of paragraph) {
      para.insertAdjacentHTML("afterbegin",'<button class="delete-button">x</button>');
    
      para.firstChild.addEventListener("click", () => {
       para.remove();
      });
    };
};