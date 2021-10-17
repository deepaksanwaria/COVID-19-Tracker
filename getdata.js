fetch('https://data.covid19india.org/v4/min/data.min.json')
    .then(data => data.json())
    .then(coviddata => {
        const confirmed = coviddata.JH.total.confirmed;
        const confirmedelement = document.getElementById('confirmed');

        const deceased = coviddata.JH.total.deceased;
        const deathdelement = document.getElementById('death');

        const recovered = coviddata.JH.total.recovered;
        const dischargedelement = document.getElementById('discharged');

        const active = document.getElementById('active');

        const last_updated = coviddata.JH.meta.last_updated;
        const last_update = document.getElementById('last_update');

        const active_case = confirmed - (deceased + recovered);

        confirmedelement.innerHTML = confirmed;
        deathdelement.innerHTML = deceased;
        dischargedelement.innerHTML = recovered;
        last_update.innerHTML = last_updated;
        active.innerHTML = active_case;
    })