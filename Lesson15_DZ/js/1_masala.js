function fetchCountry(countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Davlat topilmadi: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => console.log("Data:", data))
        .catch((err) => console.log("Xatolik:", err.message))
        .finally(() => console.log("Jarayon yakunlandi"));
}

fetchCountry("China");
fetchCountry("Norway");
fetchCountry("USA");
