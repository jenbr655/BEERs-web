const API_ADRESS = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json';

export function getTemp() {
  return fetch(API_ADRESS)
    .then((response) => { //Lovar att vi kommer att få ut temperaturen
      return response.json(); //Får ut datan från api i json format returnerar för att jobba vidare på
    })
    .then((response) => { //responsen vi får in ar redan i json BEHÖVS EJ
      //console.dir(response);
      return response; //returnar slutliga responsen som är ett promise
    });
}

