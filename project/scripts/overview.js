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

// Parts info JSON file
const partInfo = "data/parts.json"

// Converting into array and making buttons out of the figures
async function getPartsInfo() {
    const response = await fetch(partInfo);
    const data = await response.json();
    // console.log(data.parts);

    document.getElementById('cpu').addEventListener('click', () => {
        displayPartsInfo(data.parts[0]);
    });

    document.getElementById('cooler').addEventListener('click', () => {
        displayPartsInfo(data.parts[1]);
    });

    document.getElementById('motherboard').addEventListener('click', () => {
        displayPartsInfo(data.parts[2]);
    });

    document.getElementById('ram').addEventListener('click', () => {
        displayPartsInfo(data.parts[3]);
    });

    document.getElementById('psu').addEventListener('click', () => {
        displayPartsInfo(data.parts[4]);
    });

    document.getElementById('ssd').addEventListener('click', () => {
        displayPartsInfo(data.parts[5]);
    });

    document.getElementById('case').addEventListener('click', () => {
        displayPartsInfo(data.parts[6]);
    });

    document.getElementById('gpu').addEventListener('click', () => {
        displayPartsInfo(data.parts[7]);
    });

    document.getElementById('expansionCard').addEventListener('click', () => {
        displayPartsInfo(data.parts[8]);
    });

    document.getElementById('fan').addEventListener('click', () => {
        displayPartsInfo(data.parts[9]);
    });
}

const dialog = document.querySelector('dialog');

let partsDetails = document.createElement('detail');
dialog.appendChild(partsDetails);


function displayPartsInfo(part) {
    partsDetails.innerHTML = '';
    partsDetails.innerHTML = `
    <button id='closeModal'>X</button>
    <h4>${part.name}</h4>
    <p><strong>${part.summary}</strong></p>
    <p>${part.longdesc}</p>`

    dialog.showModal();

    closeModal.addEventListener('click', () => {
        dialog.close();
    })
}

getPartsInfo();