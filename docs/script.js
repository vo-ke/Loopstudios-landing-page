const  hamb = document.querySelector(".hamb"),
  mobilemenu = document.querySelector(".mobilemenu"),
  close = document.querySelector(".close");


hamb.addEventListener("click", addActive);

close.addEventListener("click", removeActive);



function addActive() {
    hamb.classList.add("active");
    mobilemenu.classList.add("active");
  }
  
  function removeActive() {
    hamb.classList.remove("active");
    mobilemenu.classList.remove("active");
  }