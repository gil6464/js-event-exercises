document.addEventListener("DOMContentLoaded", start);

function start() {
     const first = document.querySelector("#first");
     const second = document.querySelector("#second");
     const third = document.querySelector("#third");

     first.insertAdjacentHTML("afterbegin", '<button class="delete-button">x</button>');
     second.insertAdjacentHTML("afterbegin", '<button class="delete-button">x</button>');
     third.insertAdjacentHTML("afterbegin", '<button class="delete-button">x</button>');

     first.addEventListener("click", deletePara);
     function deletePara() {
     }
     let deleteButton = document.querySelector("delete-button");

}