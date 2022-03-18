document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.getElementById("button");
    let paragraphe = document.createElement("p");
    let body = document.querySelector("body");
  
    button.addEventListener("click", (event) => {
      fetch("expression.txt")
        .then((response) => response.text())
        .then((response) => {
          paragraphe.textContent = response;
          body.append(paragraphe);
        })
        .catch((error) => console.log(error));
    });
  });