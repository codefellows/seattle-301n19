'use strict';
let employeeArray = [];

/* template

name, age and employed */


// Read the data
$.ajax('data.json').then(input => {
    input.forEach(puppy => {
      new Employee(puppy.FullName, puppy.age, puppy.works)
    });
  outPut(); 
// console.log(employeeArray);
  });


// Iterate
function outPut () {
  console.log(employeeArray);
  let $template = $('#template').html();
  employeeArray.forEach(kittens => {
    let newName = Mustache.render($template, kittens);
    $('section').append(newName);
  })
}

// Tailor JSON data via constructor

function Employee (employeeName, employeeAge, worked){
  this.name = employeeName;
  this.age = employeeAge;
  this.employed = worked; //true or false

  employeeArray.push(this);
}

// Render with Mustache