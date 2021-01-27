document.addEventListener("DOMContentLoaded", () => {
     const tree = document.querySelector(".tree");
     
     tree.addEventListener("click", (event) => {
          if(event.target.tagName !== ("LI")) return;
          let state = event.target.querySelector("UL");

          state.hidden = !state.hidden;
     });
});