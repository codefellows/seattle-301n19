'use strict';


// VanillaJS

// let button = document.getElementsByTagName('button')[0];

// button.addEventListener('click', function(e) {
//     console.log('e', e.target.textContent);
//     console.log('hello world');
// })

// jQuery

$('button').on('click', function() {
    // console.log('hello world');

    // .text() ========= GETTER
    // console.log($(this).text());

    // .text('content') =========== SETTER
    // console.log($(this).text('Don\'t click me'));

    $('ul').toggle('hide');
    // $('h2').remove();
});


let $pets = $('.pets');
let $petTemplate = $('.pet-template');



$.ajax('./pets.json').then( data => {
    console.log('data:  ', data);

    data.forEach(pet => {
        let $newPet = $petTemplate.clone();
        // $newPet.removeAttr('class');
        $newPet.text(pet.name);
        $pets.append($newPet);
    })
})