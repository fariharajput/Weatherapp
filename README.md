# Weather-Teller
### A Weather Teller app that helps you to check the current weather condition of any city 
-------------------------------------------------
### Visit the app by clicking this [Weather Teller](https://farihaweatherapp.netlify.app/)
![](weather.jpg)


#### Just go to `app.js` and `forecast.js` to add more fucntionalites to the app and make it more wonderfull

#### Feel free to change or customize as much as you want

#### It sound awesome if you have a much better ideas to improve this

#### Do contribute and share your ideas with all other developers so that they can take advantage of your customization

Table of Content
================

* * * * *
-   [Getting started](#)
-   [How to get files](#)
-   [Code Details](#)
-   [How this app's code helps you](#)
-   [Deployment](#)


Getting Started
===============

* * * * *

These instructions will get you a copy of the project and running on
your local machine for development and testing purposes

First you will need to install [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download/) on your local machine/computer.

How to get files
================

* * * * *

When you have done with installation!

Go to your required directory, and open GIT command line by right clicking on the screen and select 'GIT BASH HERE'

then you get a command line interface

put command to clone the files on your local computer
```git
\$ git clone https://github.com/fahadhassan1213/ToDo-Tasks-app.git
```
**** 

Change and Customization
========================

* * * * *

We have two _JavaScript_ files one is `forecast.js` and other is `app.js`

In file `forecast.js` (as show below) we have the code about how we are getting the city and the weather detail of that city

```js
const key = 'CXhPk82ZAZgV0ngVUWdVBVGePc4qMGqf';

const getCity = async(city) =>{

    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(url+query);
    const data = await response.json();
    return data[0];

}


const getWeather = async(id) =>{

    const url = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`
    const response = await fetch(url+query);
    const data = await response.json();

    return data[0];
}

```
In `getCity()` and  `getWeather()` we have _url_ and _query_ and on the top we have an _API key_

these variables contain a URL ,query and a key, all these data is taken from [AccuWeather.com](https://www.accuweather.com/) which is an open weather app

AccuWeather provide API keys,URLs to get the weather data on the basis of your search (e.g: on city based etc). Please visit [Beginner Tutorial](https://youtu.be/SXsaB9TUfkk). Its a good beginner tutorial to get started with accuweather.

In the above code, after setting the Key ,URLs and query then we are calling the `fetch()` and passing a url with a query which make a complete web address resource to access the data. The Fetch API accesses resources across the network. You can make HTTP requests (using GET, POST and other methods), download, and upload files. `fetch()` starts a request and returns a promise. When the request completes, the promise is resolved with the Response object.  

`getCity()` and `getWeather` are asynchronous functions since they are marked with the async keyword. As `fetch()` return a promise so you have to wait for it be resolved that's why we have marked with a `await` keyword.

In the end we will get a response object in the JSON formate of city details form `getCity()` same is the case with `getWeather()` as they are return a _promises_ we will deal with these promises in the `app.js` file.


In `app.js` we have a _async_ function named `updateCity()` as shown below

```js
let updateCity = async (city) =>{

    const cityName = await getCity(city);
    const weatherDetail = await getWeather(cityName.Key);

    return{cityName,weatherDetail};
}

```
this fucntion is returning an object having city details and weather details
because _async_ function always return a _promise_ so in the code below

```js
getCityForm.addEventListener('submit',e =>{
    e.preventDefault();

    const city = getCityForm.city.value.trim();
    getCityForm.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => {
            console.log(alert('Please enter a valid city name'))
            console.log("could not fetch the data",err);
        })
})

```
we are getting the name of the city from user and passing the city name as an argument to `updateCity()` fucntion and as we know  _updateCity()_ function will return a _promise_ so we need to deal with that promise (_if the promise is resolved 'then' what? and if it is not resolved 'catch' the error_)

When the promise become resolved we have to update our user interface to show the details to the user.

In the `app.js` you can also change the weather or city details and can make the app more detailed and wonderfull.

How this app's code helps you
========================
In the `app.js` and `forecast.js` files you can get the javascript code 

Using the code you can be able to creat a basic Weather Teller app in which you can allow the user to enter the city name
and then the user will get the detail of the weather condition in that city.
You have to just check the working of code and apply this code in your project and make your projects more awesome

Deployment
========================
When you have done with the setup you should host your site online

You can use [NETLIFY](https://www.netlify.com/) for deployment of your

for more information please read [hosting on Netlify](https://create-react-app.dev/docs/deployment/#netlify)

