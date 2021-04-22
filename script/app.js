const form = document.querySelector("form");
const updatecity = async (city) => {
  const citydetails = await getcity(city);
  const cityweather = await getweather(citydetails.Key);
  return { citydetails, cityweather };
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = form.city.value.trim();
  form.reset();
  updatecity(city)
    .then((data) => {
      //     console.log(data)
      updateui(data);
    })
    .catch((err) => console.log(err));
});
const card = document.querySelector(".card");
const updateui = (data) => {
  const { citydetails, cityweather } = data;
  // console.log(citydetails.EnglishName)
  // console.log(citydetails.AdministrativeArea.EnglishName)
  // console.log(citydetails.Country.EnglishName)
  // console.log(cityweather.IsDayTime)
  // console.log(cityweather.WeatherIcon)
  // console.log(cityweather.WeatherText)
  // console.log(cityweather.Temperature.Metric.Value)

  card.classList.remove("d-none");
  card.innerHTML = `
            <img src="img/${
              cityweather.IsDayTime ? "day.svg" : "night.svg"
            }" class="card-img-top" alt="..." />
            <div class="icon bg-light mx-auto">
              <img src="img/icons/${cityweather.WeatherIcon}.svg" alt=""/>
            </div>
            <div>
              <h4>${citydetails.EnglishName}</h4>
              <h5>${citydetails.AdministrativeArea.EnglishName}</h5>
              <h6>${citydetails.Country.EnglishName}</h6>
              <h6>${cityweather.WeatherText}</h6>
              <h6>${cityweather.Temperature.Metric.Value} &deg;C</h6>
            </div>
 
      
      `;
};
