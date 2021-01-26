document.addEventListener("DOMContentLoaded", () =>{

     const button = document.querySelector("#one")
     document.addEventListener("mouseover",(event) => {
          let target = event.target;
          
          let tooltipHtml = target.dataset.tooltip;
          if (!tooltipHtml) return;
          console.log("gil");
          
          
          let tooltipElem = document.createElement('div');
           tooltipElem.className = 'tooltip';
           tooltipElem.innerHTML = tooltipHtml;
           document.body.append(tooltipElem)

           })
});