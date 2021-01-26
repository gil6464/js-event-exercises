document.addEventListener("DOMContentLoaded", () => {
const list = document.querySelector("#list");

      list.addEventListener("click", (e) => {
       if (e.target.tagName != "LI") return; // if you not click on li, dont do anything

       if (e.ctrlKey || e.metaKey) { // if holding ctr/meta, will select multy, else, only one
        multiSelect(e.target);
        } else {
         oneSelect(e.target);
       };  
       function multiSelect(li) {
         li.classList.toggle('selected'); // for multi select, just add the selected.
       };
       function oneSelect(li) {
        let selected = list.querySelectorAll('.selected');

        for(let elem of selected) {
        elem.classList.remove('selected');
       };

       li.classList.add('selected'); // if only one is selected, remove all the others from been selected
      };
     });
});


