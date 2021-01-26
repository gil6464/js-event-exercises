document.addEventListener("DOMContentLoaded", startMatch);

function startMatch() {
     
  const ball = document.querySelector("#ball");
  const field = document.querySelector("#background");
  field.addEventListener("click",(event)=> {

    // Get client field coordinates:
    let fieldCoords = event.currentTarget.getBoundingClientRect();

    // Sync the ball and the field to the top left:
    let ballTop = event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2 
    let ballLeft= event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
      
    // If the client clicked on spot so the ball is pass the border, it will be on the border:
    
    if (ballTop < 0) {
      ballTop = 0;
    }
    if (ballLeft < 0) {
      ballLeft = 0;
    }

    if (ballLeft + ball.clientWidth > field.clientWidth) {
      ballLeft = field.clientWidth - ball.clientWidth;
    }

    if (ballTop + ball.clientHeight > field.clientHeight) {
      ballTop = field.clientHeight - ball.clientHeight;
    }
    // set the ball position as needed
    ball.style.left = ballLeft + 'px';
    ball.style.top = ballTop + 'px';
  })
};


