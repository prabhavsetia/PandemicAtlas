function updateMap() {
    fetch("https://disease.sh/v3/covid-19/countries")
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                lat = country.countryInfo.lat;
                long = country.countryInfo.long;

                cases = country.cases;
                if (cases < 50000) {
                    color = "yellow"
                }
                else if (cases < 3000000 && cases > 50000) {
                    color = "orange"
                }
                else if (cases > 3000000) {
                    color = "red"
                }

                new mapboxgl.Marker({
                    color: color
                })
                    .setLngLat([long, lat])
                    .addTo(map);

            });
        })
}

updateMap();
