/* Imports */

/* Get DOM Elements */

const climateDrop = document.getElementById('climate-drop');
const architectureDrop = document.getElementById('architecture-drop');
const nightLifeDrop = document.getElementById('nightlife-drop');
const climateImg = document.getElementById('climate-img');
const architectureImg = document.getElementById('architecture-img');
const nightLifeImg = document.getElementById('night-life-img');

const sloganEl = document.querySelector('#slogans');
const sloganInput = document.querySelector('#slogan-input');
const sloganBtn = document.getElementById('slogan-input-button');

const changeCounter = document.querySelector('#counter');

/* State */
let climateCounter = 0;
let architectureCounter = 0;
let nightLifeCounter = 0;

let slogans = [];
/* Events */
climateDrop.addEventListener('change', (e) => {
    const value = e.target.value;
    climateImg.src = `./assets/${value}.jpeg`;
    climateCounter++;
});

architectureDrop.addEventListener('change', (e) => {
    const value = e.target.value;
    architectureImg.src = `./assets/${value}.jpeg`;
    architectureCounter++;
});

nightLifeDrop.addEventListener('change', (e) => {
    const value = e.target.value;
    nightLifeImg.src = `./assets/${value}.jpeg`;
    nightLifeCounter++;
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
