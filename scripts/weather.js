const currentTemp = document.querySelector("#current-temp");
const image = document.querySelector("#weather-icon");
const figureCap = document.querySelector("figcaption");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=499d17cb2fcb9bce311b043aee09342e&units=imperial'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp} F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    image.setAttribute('src', iconsrc);
    image.setAttribute('alt', data.weather[0].description);
    figureCap.textContent = `${desc}`;
}

apiFetch();
