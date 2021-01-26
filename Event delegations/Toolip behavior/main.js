document.addEventListener("DOMContentLoaded", () => {

     document.addEventListener("mouseover",(event) => {
      let target = event.target;
          
      let tooltipHtml = target.dataset.tooltip;
        if (!tooltipHtml) return;
          
      let tooltipElem = document.createElement('div');
       tooltipElem.className = 'tooltip';
       tooltipElem.innerHTML = tooltipHtml;
       document.body.append(tooltipElem);
          
      document.addEventListener("mouseover", ()=> { // makes the data window disapear when mouse is not over
        if (tooltipElem) {
         tooltipElem.remove();
        }
      });

      let coordinates = target.getBoundingClientRect();
      let left = coordinates.left + (target.offsetWidth - tooltipElem.offsetWidth);
       if (left < 0) left = 0; 
               
      let top = coordinates.top - tooltipElem.offsetHeight - 5;
       if (top < 0) { 
          top = coordinates.top + target.offsetHeight + 5;
      } // adjust the shadow to apear near the buttom as requsted
       tooltipElem.style.left = left + 'px';
       tooltipElem.style.top = top + 'px';
     });
});