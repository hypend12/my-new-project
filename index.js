let trigger = document.querySelector('h1');


function newColor() {

    trigger.style.color = "pink";

};
;
       
function changeText() {
document.querySelector('h1').innerHTML = 'Front-End Developer';

};

function normal() {
    document.querySelector('h1').innerHTML = 'Dawayne Dacosta';
    trigger.style.color = 'green';
};



document.addEventListener('click', newColor);


document.addEventListener('mouseout', normal);



document.addEventListener('mouseup', changeText);



