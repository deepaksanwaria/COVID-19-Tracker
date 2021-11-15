//Fetching the data from the api
fetch('https://corona.lmao.ninja/v2/countries')
    .then(data => data.json())
    .then(coviddata => {
        //Fetching the active cases
        const confirmed = coviddata.find(coviddata => coviddata.country === 'India').cases;
        const confirmedelement = document.getElementById('confirmed');

        //Fetching the deceased cases
        const deceased = coviddata.find(coviddata => coviddata.country === 'India').deaths;
        const deathdelement = document.getElementById('death');

        //Fetching the recovered cases
        const recovered = coviddata.find(coviddata => coviddata.country === 'India').recovered;
        const dischargedelement = document.getElementById('discharged');

        // Fetching the active cases
        const active_case = coviddata.find(coviddata => coviddata.country === 'India').active;
        const activeelement = document.getElementById('active');

        //Fetching the last updated time
        const last_updated = coviddata.find(coviddata => coviddata.country === 'India').updated;
        const last_update = document.getElementById('last_update');

        // Setting the values to the elements
        confirmedelement.innerHTML = confirmed;
        deathdelement.innerHTML = deceased;
        dischargedelement.innerHTML = recovered;
        last_update.innerHTML = msToTime(last_updated);
        activeelement.innerHTML = active_case;

    })
    .catch(err => console.log(err)); //Catching the error and displaying it in the console.

// function to convert milliseconds to time in hours, minutes 
function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    // Adding 0 if the value is less than 10
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + " hours " + minutes + " minutes ago. "; //Returning the time in hours, minutes
}
