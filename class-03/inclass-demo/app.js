'use strict';

let animalObj = {
    src: 'https://i.imgur.com/Y3ibubf.jpg',
    name: 'bruce',
    horns: 0,
    description: 'bruce is the best beast.'
}


// Method 1:  Create all the markup!

// function render(obj){
//     // Get the destination for our rendered things
//     let $template = $('#template');

//     // $('li').text('hello world'); //setter
//     // $('li').text(); //getter

//     // Create the markup and populate with data
//     let $new = $('#template').clone();
//     $new.removeAttr('id');
//     $new.append(`<h2>${obj.name}</h2>`, `<img src="${obj.src}">`, `<p>${obj.description}</p>` );
//     // $new.append(`<img src="${obj.src}">`);
//     // $new.append(`<p>${obj.description}</p>`);

//     // Append to the destination

//     $template.append($new);
// }


// Method 2:  Little more templating involved

    // function render(obj){
    //     // Get the destination
        
    //     let $template = $('#template');
        
    //     // Populate the cloned markup with data
    //     let $new = $template.clone();
    //     $new.removeAttr('id');
    //     $new.find('h2').text(obj.name);
    //     $new.find('img').attr('src', obj.src);
    //     $new.find('p').text(obj.description);
        
    //     // Append clone to the destination
        
    //     $('section').append($new);
    //     $template.hide();
    // }


// Method 3:  Mustache Templating!

function render(obj) {
    let templateObj = {
        name: obj.name,
        src: obj.src,
        description: obj.description
    };

    // Get the template
    let $template = $('#template').html();
    // Populate with data
    let rendered = Mustache.render($template, templateObj);
    $('section').append(rendered);
}

render(animalObj);