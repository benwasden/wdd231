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


// Adding a submission count feature for the submitted form. Need to use event listener
// to not count refreshing the form page as a submission.
const submittedForms = document.getElementById('submission-count')

document.getElementById('submit').addEventListener('click', () => {
    if (localStorage.getItem('numOfForms') == null) {
        submittedForms.value = 1;
        localStorage.setItem('numOfForms', submittedForms.value);
    }
    else {
        submittedForms.value = Number(localStorage.getItem('numOfForms')) + 1;
        localStorage.setItem('numOfForms', submittedForms.value);
    }
})
