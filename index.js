const input = document.querySelector('.input-search');
const result = document.querySelector('#result');
let countries = [];


const getCountry = async () => {
    try{
        const response  = await fetch (`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        countries = data;
        
        
    } catch (error){
        
    }
}
getCountry();

const getClima = async () => {
    try {
        const response2 = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=80bda2b60cbfead6a8b0d60e91db8d0d`);
        const data = await response2.json();
    } catch (error) {
        console.log(error);
        
    }
}

input.addEventListener('input', e => {
    e.preventDefault()
   const filteredCountries = countries.filter(country => country.name.common.toLowerCase().startsWith(input.value.toLowerCase()));
  result.innerHTML = "";

  if (filteredCountries.length > 10) {
    result.innerHTML += '<span id="text">su busqueda tiene que ser mas especifica</span>';
  }

   if (filteredCountries.length >= 1 && filteredCountries.length < 10) {
    for (let p = 0; p < filteredCountries.length; p++) {
      result.innerHTML += `
        <div class='result2'>
            <img src='${filteredCountries[p].flags.svg}' class ='bandera'>
            <h2 class = 'titulo-2'>${filteredCountries[p].name.common}</h2>
        </div>
        `;
    }
  }

  if (filteredCountries.length ===1 && input.value !== "" ) {
   
    
      result.innerHTML = " ";
      result.innerHTML += `
      <div class='result'>
        <div class="container-result">
          <img src='${filteredCountries[0].flags.svg}' class ='bandera'>
          <h2 class = 'titulo-2'>${filteredCountries[0].name.common}</h2>
          <div class='info-p'>
              <p class='content-p'>Capital: ${filteredCountries[0].capital}</p>
              <p class='content-p'>Population: ${filteredCountries[0].population}</p>
              <p class='content-p'>Region: ${filteredCountries[0].region}</p>
            
              
          </div>
        </div>
      </div>
      `
  };
   
});




