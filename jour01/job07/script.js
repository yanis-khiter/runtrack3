
// A REVOIR !!


function jourtravaille(date) {

    let date_entrer = new Date(date);
  
    let dateLocale = date_entrer.toLocaleString('fr-FR', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
  
    jourferier = [
      new Date("2020/01/01"),
      new Date("2020/04/13"),
      new Date("2020/05/01"),
      new Date("2020/05/08"),
      new Date("2020/05/21"),
      new Date("2020/06/01"),
      new Date("2020/07/14"),
      new Date("2020/08/15"),
      new Date("2020/11/01"),
      new Date("2020/11/11"),
      new Date("2020/12/25")
    ];

    for (jour of jourferier) {
      if (date_entrer.getTime() == jour.getTime()) {
        console.log("Le " + jour.getDate() + " " + jour.getMonth() + " " + jour.getFullYear() + " est un jour férié");
      }
    }
  
    if (date_entrer.getDay() == 0 || date_entrer.getDay == 6) {
      console.log("Non, " + date_entrer.getDate() + " " + date_entrer.getMonth() + " " + date_entrer.getFullYear() + " est un week-end ");
    } else {
      console.log("Oui, " + date_entrer.getDate() + " " + date_entrer.getMonth() + " " + date_entrer.getFullYear() + " est un jour travaillé ");
    }
  }
  
  jourtravaille("2020/01/01");