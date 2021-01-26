document.addEventListener("DOMContentLoaded", start);

function start () {
     const button = document.querySelector("#button");
     let  text = document.querySelector("#text");
     
     button.addEventListener("click", () => {
      text.remove(); 
     });
};