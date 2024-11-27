const currentUrl = window.location.href;

const everything = currentUrl.split('?');

// Break form name value pairs into an array
let formData = everything[1].split('&');


function show(cup) {
    // console.log(cup);
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace("%40", "@").replace('+', ' ');
        }
    })
    return result;
}

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<p>Appointment for: ${show('first')} ${show('last')}}</p>
<p>Proxy ${show('ordinance')} on ${show('fecha')} in the ${show('location')} Temple</p>
<p>Your email:<a href='mailto: ${show('email')}'>${show('email')}</a></p>`
