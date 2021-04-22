const apikey = "E4gGAzkFmKZcdEbZA69t0wqAxycIazx3";

const getcity = async (city) => {
  const baseurl =
    "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${apikey}&q=${city}`;
  const response = await fetch(baseurl + query);
  const data = await response.json();
  return data[0];
};
// getcity("faisalabad")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const getweather = async (citykey) => {
  const baseurl = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${citykey}?apikey=${apikey}`;
  const response = await fetch(baseurl + query);
  const data = await response.json();
  return data[0];
};
// getweather(260626)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// getcity("islamabad")
//   .then((data) => {
//     return getweather(data.Key);
//   })

//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
