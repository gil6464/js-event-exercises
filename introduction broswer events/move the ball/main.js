document.addEventListener("DOMContentLoaded", startMatch);
console.log("gil");

function startMatch() {
     console.log("tomer");
  const ball = document.querySelector("#ball");
  const field = document.querySelector("#background");

  field.addEventListener("click", clickPosition, false);

  function clickPosition(e) {
     let xPosition = e.clientX - (ball.offsetWidth / 2 );
     let yPosition = e.clientY - (ball.offsetHeight / 2 );

     let translate3dValue = "translate3d(" + xPosition + "px," +
     yPosition + "px, 0)";

     ball.style.transform = translate3dValue;
  }
   function getPosition(element) {
        let xPosition = 0;
        let yPosition = 0;

        while(element){
          xPosition += (element.offsefLeft - 
          element.scrollLeft + element.clientLeft);
          yPosition += (element.offsetTop - 
          element.scrollTop + element.clientTop);
        }
        return {
             x : xPosition,
             y: yPosition
        };
     }  

}
