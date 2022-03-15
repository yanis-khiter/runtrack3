document.addEventListener("DOMContentLoaded", (e) => {
  
    let article = document.getElementById("citation").textContent;

    let button = document.getElementById("button");
  
    button.addEventListener("click",function citation(){

      console.log(article)
      
    })
  
  });