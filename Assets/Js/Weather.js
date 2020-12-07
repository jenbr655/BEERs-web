import { getTemp } from "./API.js";

const TABLE = document.querySelector("#tableWeather"); //Refererar till id:t table "hittar det jag vill skicka responsen till"

window.addEventListener("load", main);

function main() {
  getTemp().then(
    (
      response // "Lovar" att vi kommer att få tillgång till önskad data
    ) => {
      console.dir(response);
      console.dir(response.timeSeries[0].parameters[11].values[0]); //Visar vilket värde jag får
      const temperature = response.timeSeries[0].parameters[11].values[0];
      TABLE.innerHTML += `<h3> Just nu är temperaturen: ${temperature} °C </h3> `; //För att skicka den till HTML-filen //+= för att inte ta bort innerhtml som finns sedan tidigare //Dollar sign för att det är en javascript-variabel
    }
  );
}
