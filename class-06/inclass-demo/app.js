'use strict';

const API = 'http://localhost:3000';

$('form').on('submit', submitHandler);


function submitHandler(e) {
    e.preventDefault();

    let city = $('#query-search').val();

    requestLocation(city);
}



function requestLocation(location) {
    // make our asynchronous call to our server! (aka parallel universe)

    const ajaxSettings = {
        method: 'get',
        dataType: 'json',
        data: {city: location}
    }
    console.log(ajaxSettings);

    // request to http://localhost:3000/location
    $.ajax(`${API}/location`, ajaxSettings)
        .then(data => {
            console.log(data);
            renderLocation(data);
            requestRestaurants(location);

        })
}

function requestRestaurants(location) {
    // make our asynchronous call to our server!  (aka parallel universe)
    
    const ajaxSettings = {
        method: 'get',
        dataType: 'json',
        data: {city: location}
    }

    $.ajax(`${API}/restaurants`, ajaxSettings)
        .then(data => {
            console.log(data);
            data.forEach(restaurant => {
                renderRestaurant(restaurant);
            })
        })
};

function renderLocation(location){
    let $template = $('#geocoding-template').html();
    let html = Mustache.render($template, location);
    $('#geocode').append(html);
}

function renderRestaurant(location){
    let $template = $('#restaurant-template').html();
    let html = Mustache.render($template, location);
    $('#restaurant').append(html);
}