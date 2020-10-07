'use strict';

// Read the data
let cardArr = [];

function Card(value){
  this.name = value.FullName,
  this.age = value.age,
  this.employed = value.works,
  cardArr.push(this);
}

// Iterate
Card.prototype.toHtml = function () {

  let template = $('#template').html();
  // let cardy = $('.card').html();
  // $('.cardy').append(html);
  console.log(this);
  let html = Mustache.render(template, this);

  $('section').append(html);

  return html;
};


cardArr.forEach(value => {
  let rendered = Mustache.render(template, value);

});

// Tailor JSON data via constructor

$.ajax('data.json', {method: 'GET',
dataType:'JSON'})
  .then((data) => {
    data.forEach((value) => {
      let card = new Card(value);
      card.toHtml();
      // console.log(card);

    });
  })

// Render with Mustache