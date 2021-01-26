document.addEventListener("DOMContentLoaded", ()  =>{
     
     const div = document.querySelector("#container");

     div.addEventListener("click", (event) =>{
          let target = event.target;

          if(target.tagName !== `BUTTON`) return;
          removeMe(target);

          function removeMe(){
            let heading = event.target.closest(".heading")
            heading.remove();
          };

     })

});