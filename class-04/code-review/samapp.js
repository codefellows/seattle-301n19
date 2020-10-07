'use strict';

// Read the data

// Iterate

// Tailor JSON data via constructor

// Render with Mustache

let peopleArray = [];

function People(peeps) {
  this.name = peeps.FullName;
  this.age = peeps.age;
  this.employed = peeps.works;
  peopleArray.push(this);
}

function renderPerson(obj) {

  let templateObj = {
    FullName: obj.FullName,
    age: obj.age,
    works: obj.works
  };
};




People.readJson = () => {
  console.log('hello world');
  let $template = $('#template').html();
    const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };
  $.ajax('data.json', ajaxSettings)
  .then(data => {
    data.forEach(item => {
      console.log(item);
      let peeps = new People(item);
      let mustRender = Mustache.render($template, peeps);
      $('section').append(mustRender);
    })
  })
}

People.readJson();


