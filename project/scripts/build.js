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

if (show('count') == 1) {
    formCount.innerHTML = "Thanks for submitting a form! This is your first build with us."
}
else {
    formCount.innerHTML = `Thanks for submitting! You've submitted ${show('count')} forms before.`
}

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<p><strong>Name:</strong> ${show('fname')} ${show('lname')}
<p><strong>Email:</strong> <a href='mailto: ${show('email')}'>${show('email')}</a></p>
<p><strong>Use case:</strong> ${capitalizeWords(show('usecase'))}
<p><strong>Budget:</strong> $${show('budget')}
<p><strong>Date Submitted: </strong> ${show('fecha')}`


const builds = "data/builds.json";

async function getBuilds() {
    const response = await fetch(builds);
    const data = await response.json();
    
    if (show('usecase') == 'gaming') {
        const gaming = data.gaming;

        if (show('budget') == '600') {
            showBuildParts(gaming[0].six);
        }
        else if (show('budget') == '1200') {
            showBuildParts(gaming[0].twelve);
        }
        else if (show('budget') == '2000') {
            showBuildParts(gaming[0].twenty);
        }
    }

    else if (show('usecase') == 'rendering') {
        const rendering = data.rendering;

        if (show('budget') == '600') {
            showBuildParts(rendering[0].six);
        }
        else if (show('budget') == '1200') {
            showBuildParts(rendering[0].twelve);
        }
        else if (show('budget') == '2000') {
            showBuildParts(rendering[0].twenty);
        }
    }

    else if (show('usecase') == 'development') {
        const development = data.development;

        if (show('budget') == '600') {
            showBuildParts(development[0].six);
        }
        else if (show('budget') == '1200') {
            showBuildParts(development[0].twelve);
        }
        else if (show('budget') == '2000') {
            showBuildParts(development[0].twenty);
        }
    }

}

const partsList = document.getElementById('buildParts');
function showBuildParts(usecase) {
    partsList.innerHTML = `
    <p><strong>CPU:</strong> ${usecase[0].cpu}
    <p><strong>CPU Cooler:</strong> ${usecase[0].cooler}
    <p><strong>Motherboard:</strong> ${usecase[0].mobo}
    <p><strong>RAM:</strong> ${usecase[0].ram}
    <p><strong>Graphics Card:</strong> ${usecase[0].gpu}
    <p><strong>Case:</strong> ${usecase[0].case}
    <p><strong>Power Supply</strong> ${usecase[0].psu}`;
}

function capitalizeWords(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(' ');
}

getBuilds();