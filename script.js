window.onload = function () {
    getCovidData()
}

function getCovidData() {
    fetch('https://data.covid19india.org/v4/min/data.min.json')
        .then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
            var test = data.KL.total.tested
            conform = data.KL.total.confirmed
            recover = data.KL.total.recovered
            dose1 = data.KL.total.vaccinated1
            dose2 = data.KL.total.vaccinated2

            var tes = data.KL.districts.Kozhikode.total.tested
            con = data.KL.districts.Kozhikode.total.confirmed
            rec = data.KL.districts.Kozhikode.total.recovered
            vac1 = data.KL.districts.Kozhikode.total.vaccinated1
            vac2 = data.KL.districts.Kozhikode.total.vaccinated2
            const ids = ["total", "confirmed", "recoverd", "first-dose", "second-dose", "overall", "confirm", "recover", "first-vaccine", "second-vaccine"]
            const values = [test, conform, recover, dose1, dose2, tes, con, rec, vac1, vac2]
            for (var i = 0; i < ids.length; i++) {
                document.getElementById(ids[i]).innerHTML = values[i].toLocaleString('en-IN')
            }
            var last = data.KL.meta.last_updated
            const date = document.getElementById('last-update').innerHTML = last.substr(0, 10)
        }).catch(error => {
            console.log(error)
        })
    setTimeout(getCovidData, 43200000)
}