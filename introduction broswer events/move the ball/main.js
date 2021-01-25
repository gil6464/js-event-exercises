document.addEventListener("DOMContentLoaded", startMatch);


function startMatch() {
     
  const ball = document.querySelector("#ball");
  const field = document.querySelector("#background");

  field.addEventListener("click", getClickPosition, false);
 
  function getClickPosition(e) {
      let parentPosition = getPosition(e.currentTarget);
      let xPosition = e.clientX - parentPosition.x - (ball.clientWidth / 2);
      let yPosition = e.clientY - parentPosition.y - (ball.clientHeight / 2);
       
      ball.style.left = xPosition + "px";
      ball.style.top = yPosition + "px";
  }
   
  function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
   
    while (el) {
      if (el.tagName == "BODY") {
        let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        let yScroll = el.scrollTop || document.documentElement.scrollTop;
   
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }
   
      el = el.offsetParent;
    }
    return {
     x : xPos, 
     y : yPos}
  }
}