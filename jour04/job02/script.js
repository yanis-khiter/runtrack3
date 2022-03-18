document.addEventListener("DOMContentLoaded", (event) => {
    let obj =
      ' {"name": "La Plateforme_","address": "8 rued\'hozier","city": "Marseille","nb_staff": "11","creation":"2019" }';
  
    jsonValueKey(obj, "address");
  
    function jsonValueKey(obj, key) {
      let json = JSON.parse(obj);
      console.log(json[key]);
    }
  
    
    jsonValueKey();
  
    function jsonValueKey() {
      fetch("bdd.json")
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });
    }
  });