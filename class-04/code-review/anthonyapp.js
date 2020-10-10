'use strict';

// let allPeople = [];

// Read the data
$.ajax('./data.json').then((data) => {
  data.forEach((person) => {
  // Iterate
    let newPerson = new People(
      person.FullName, 
      person.age, 
      person.works
      );
      console.log(newPerson);
    render(newPerson);
    // console.log(allPeople);
  });// for loop ends here
});

// Tailor JSON data via constructor
function People (name, age, employed) {
  this.name = name;
  this.age = age;
  this.employed = employed;
  // allPeople.push(this);
};

// Render with Mustache
function render(obj){
  // console.log(obj);
  let $template = $('#template').html();
    let rendered = Mustache.render($template, obj);
    $('section').append(rendered);
}

// console.log(allPeople);