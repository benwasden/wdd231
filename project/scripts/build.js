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

const currentUrl = window.location.href;
const everything = currentUrl.split('?');

let formData = everything[1].split('&');

function show(info) {
    formData.forEach((element) => {
        if (element.startsWith(info)) {
            result = element.split('=')[1].replace("%40", "@").replace("%2B", "+").replaceAll("+", " ").replaceAll("%2F", "/").replace("%2C"," ").replaceAll("%3A",":");
        }
    });
    return result;
};

const formCount = document.getElementById('formCount');

// if (localStorage.getItem('numOfForms') == null) {
//     formCount.innerHTML = "Thanks for submitting a form! This is your first form with us."
//     localStorage.setItem('numOfForms', show('count'))
//     console.log(numOfForms)
// }
// else {
//     console.log(localStorage.getItem('numOfForms'));
//     const currentFormCount = Number(localStorage.getItem('numOfForms')) + Number(show('count'));
//     formCount.innerHTML = `Thanks for submitting the form! You've submitted ${currentFormCount} forms with us.`
//     localStorage.setItem('numOfForms', currentFormCount);
// }



const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<p><strong>Name:</strong> ${show('fname')} ${show('lname')}
<p><strong>Email:</strong> <a href='mailto: ${show('email')}'>${show('email')}</a></p>
<p><strong>Use case:</strong> ${show('usecase')}
<p><strong>Budget:</strong> $${show('budget')}
<p><strong>Date Submitted: </strong> ${show('fecha')}`


const builds = "data/builds.json";

async function getBuilds() {
    const response = await fetch(builds);
    const data = await response.json();
    
    const gaming = data.gaming;
    console.log(gaming);

    show(currentUrl);

}

getBuilds();