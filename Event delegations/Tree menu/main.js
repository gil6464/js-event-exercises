document.addEventListener("DOMContentLoaded", () => {
     const div = document.querySelector("#cont");
     
     div.addEventListener("click", (event) => {
          if(event.target.tagName !== ("P")) return;
          let city = event.target.parentNode.querySelector("ul");

          city.hidden = !city.hidden;
     })
})