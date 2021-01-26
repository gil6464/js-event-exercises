document.addEventListener("DOMContentLoaded", () =>{

     const bigImage = document.getElementById("large-pic");

     document.addEventListener('click', (e) => {

     if (e.target.tagName === "p" || e.target.closest('p')) {
          e.preventDefault();

          const newMain = e.target.attributes.src.value;
          bigImage.attributes.src.value = newMain;  
     }
})
})