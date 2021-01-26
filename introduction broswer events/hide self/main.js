document.addEventListener("DOMContentLoaded", start);

function start() {
     const button = document.querySelector("#button");
     
     button.addEventListener("click", () => {
       button.remove()
     });
};