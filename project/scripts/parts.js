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

let date = new Date();
// document.getElementById('date-and-time').value = date.toDateString();
const dateAndTime = document.getElementById('submit');
dateAndTime.addEventListener('click', () => {
    document.getElementById('date-and-time').value = date.toLocaleString();
})