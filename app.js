/* Imports */

/* Get DOM Elements */

const climateDrop = document.getElementById('climate-drop');
const architectureDrop = document.getElementById('architecture-drop');
const nightLifeDrop = document.getElementById('nightlife-drop');
const climateImg = document.getElementById('climate-img');
const architectureImg = document.getElementById('architecture-img');
const nightLifeImg = document.getElementById('night-life-img');

const sloganEl = document.getElementById('slogans-display');
const sloganInput = document.getElementById('slogan-input');
const sloganBtn = document.getElementById('slogan-input-button');

const changeCounter = document.getElementById('this-one');

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
    displayCounter();
});

architectureDrop.addEventListener('change', (e) => {
    const value = e.target.value;
    architectureImg.src = `./assets/${value}.jpeg`;
    architectureCounter++;
    displayCounter();
});

nightLifeDrop.addEventListener('change', (e) => {
    const value = e.target.value;
    nightLifeImg.src = `./assets/${value}.jpeg`;
    nightLifeCounter++;
    displayCounter();
});

sloganBtn.addEventListener('click', (e) => {
    const value = e.target.value;
    slogans.push(sloganInput.value);
    sloganInput.value = '';
    displaySlogans();
});

/* Display Functions */
function displayCounter() {
    changeCounter.textContent = `You have changed climate ${climateCounter} times, architecture ${architectureCounter} times, and nightlife ${nightLifeCounter} times.`;
}

function displaySlogans() {
    sloganEl.innerText = '';
    for (let slogan of slogans) {
        const p = document.createElement('p');
        p.textContent = slogan;
        sloganEl.append(p);
    }
}
// (don't forget to call any display functions you want to run on page load!)
