// Year for copyright year
const currentYear = document.getElementById('currentyear');
currentYear.textContent = new Date().getFullYear();

// Date/Time for last modification for website
const lastModified = document.getElementById('lastModified');
lastModified.textContent = (document.lastModified);

// Variables for menu button in mobile view
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animateme');

// Event listener for menu button
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const weatherIcon = document.getElementById("weather-icon");
const currentTemp = document.getElementById("current-temp");
const weatherConditions = document.getElementById("condition");
const highTemp = document.getElementById("high-temp");
const lowTemp = document.getElementById("low-temp");
const humidity = document.getElementById("humidity");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

const tomorrowDay = document.getElementById("tomorrow");
const twoDay = document.getElementById("two-day");

const todayForecast = document.getElementById("today-forecast");
const tomorrowForecast = document.getElementById("tomorrow-forecast");
const twoDayForecast = document.getElementById("two-day-forecast");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.23&lon=-122.64&appid=499d17cb2fcb9bce311b043aee09342e&units=imperial'
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.23&lon=-122.64&appid=499d17cb2fcb9bce311b043aee09342e&units=imperial'

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    let desc = data.weather[0].description;

    const sunTime = new Date(data.sys.sunrise * 1000);
    const setTime = new Date(data.sys.sunset * 1000);

    currentTemp.innerHTML = `${data.main.temp} F`;
    weatherConditions.innerHTML = `${desc.charAt(0).toUpperCase() + desc.slice(1)}`;
    highTemp.innerHTML = `High: ${data.main.temp_max} F`;
    lowTemp.innerHTML = `Low: ${data.main.temp_min} F`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    sunrise.innerHTML = `Sunrise: ${sunTime.toLocaleTimeString('default', {hour: '2-digit', minute:'2-digit'})}`;
    sunset.innerHTML = `Sunset: ${setTime.toLocaleTimeString('default', {hour: '2-digit', minute:'2-digit'})}`;

    todayForecast.innerHTML = `${Math.round(data.main.temp_max)} F`;
}

function displayForecast(data) {
    const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const date = new Date();
    const today = date.getDay();

    let tomorrow = today + 1;
    if (tomorrow > 6)
        tomorrow = tomorrow - 7;

    let tomorrowString = daysOfWeek[tomorrow];

    tomorrowDay.innerHTML = tomorrowString;
    tomorrowForecast.innerHTML = `${Math.round(data.list[7].main.temp_max)} F`;

    let two = today + 2;
    if (two > 6)
        two = two - 7;

    let twoDayString = daysOfWeek[two];

    twoDay.innerHTML = twoDayString;
    twoDayForecast.innerHTML = `${Math.round(data.list[15].main.temp_max)} F`;
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }

    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data2 = await response.json();
            displayForecast(data2)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

// JSON file
const businesses = "data/members.json";

async function getBusinessData(){
    document.getElementById("cards").innerHTML = "";
    const response = await fetch(businesses);
    const data = await response.json();
    const businessData = data.businesses;
    console.log(data);

    let eligibleBusinesses = [];

    let i = 0;
    while (i < 7) {
        if (businessData[i].membership >= 2) {
            eligibleBusinesses.push(businessData[i])
        }
        i++;
    }
    console.log(eligibleBusinesses);
    makeBusinessCards(eligibleBusinesses);

    // if () {

    // }

    // let i = 0;
    // while (i < 2) {

    //     let randomNum = 0;
    //     if (valuesInArray.includes(randomNum) == false) {
    //         randomNum = getRandomInt(1, businessData.length);
    //         valuesInArray.push[randomNum];
    //     }
    //     else {
    //         randomNum = getRandomInt(1, businessData.length);
    //         console.log("Repeat");
    //     }

    //     businessesToCard.push(businessData[randomNum - 1]);
    //     makeBusinessCards(businessesToCard);
    //     i++;
    // }
    // console.log(businessesToCard);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const makeBusinessCards = (businesses) => {
    businesses.forEach((business) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let link = document.createElement('p');

        let a = document.createElement('a');

        a.setAttribute('href', business.website);
        a.className = "website";

        let aText = document.createTextNode(business.website);
        a.appendChild(aText);

        link.appendChild(a);

        name.textContent = business.name;
        address.textContent = business.address;
        phone.textContent = business.phone;

        logo.setAttribute('src', business.image);
        logo.setAttribute('alt', `Logo for ${business.name}, Membership - ${business.membership}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', business.width)
        logo.setAttribute('height', business.height);

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(link);
        card.setAttribute('id', 'business-cards');

        document.querySelector("#cards").appendChild(card);
    })
}

const width = window.matchMedia("(max-width: 800px)")

function changeCardCount(width) {
    let cardCount = 0;
    if (width.matches) {
        cardCount = 3;
    }
    else {
        cardCount = 2;
    }
    return cardCount;
}

width.addEventListener("change", function() {
    changeCardCount(width)
});

getBusinessData();