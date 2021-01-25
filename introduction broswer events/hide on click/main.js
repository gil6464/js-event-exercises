document.addEventListener("DOMContentLoaded", start);

function start () {
     const button = document.querySelector("#Button");
     let  text = document.querySelector("#Text");
     
     button.addEventListener("click", deleteText);

     function deleteText() {
          text.remove(); 
     }
}