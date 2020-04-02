let textInput = document.getElementById('textInput');
textInput.value = 'Dnipro';
let btnGo = document.getElementById('btn-go');
let key = '10f317d1c63bc3173ffef2fe271220fc';
let weatherAPI;

function weatherInfo() {
	let cityName = textInput.value;
	weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;

	fetch(weatherAPI)
		.then(function(resp) { return resp.json() })
		.then(function(data) { showWeather(data) });
}

function showWeather(dat) {
	let celcius = Math.round(parseFloat(dat.main.temp)-273.15);
		
	document.getElementById('description').innerHTML = dat.weather[0].description[0].toUpperCase() + dat.weather[0].description.substring(1);
	document.getElementById('temp').innerHTML = celcius + '&deg;C';
	document.getElementById('location').innerHTML = `${dat.name}, ${dat.sys.country}`;
}

textInput.addEventListener('input', () => {      
    lastChar = textInput.value.slice(-1);
    let regExp = /[0-9#-,.-/:-?{-~!@"^_`\[\]]/;
    if(regExp.test(lastChar)) {
        textInput.value = textInput.value.slice(0, (textInput.value.length-1));
    }
})

btnGo.addEventListener('click', () => {
	weatherInfo();	
});
