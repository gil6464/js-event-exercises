document.addEventListener("DOMContentLoaded", () => {

 const link = document.querySelector(".link");

  link.addEventListener("click", (event) => {
       const clientChoice = confirm("Leave for Google?");
       if (!clientChoice) 
           event.preventDefault();
  });
});