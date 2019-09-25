const avengers =[];
/* ///list avengers


/// get user input


///create indivigual avengers **Objects function constructor
function Avenger(alias, identity, powers, firstAppearance){
    this.alias = alias;
    this.identity = identity;
    this.powers = powers;
    this.firstAppearance = firstAppearance;
    this.yearsActive = function(){
        return new Date().getUTCFullYear() - this.firstAppearance;
    }
}

///const ironMan = new Avenger('Iron-Man', 'Tony Stark', 'Smart, Facial Hair, Dead', 1963);
///console.log(ironMan);

///push into array
function addAvenger(alias, identity, powers, firstAppearance){
    avengers.push(new Avenger(alias, identity, powers, firstAppearance));
}
addAvenger('Captain America', 'steve rogers', 'freedom', 1941);
///display objects on screen */

const form = document.querySelector('#hero-form');// could also getElementById
const userAlias = document.querySelector('#alias');
const userPowers = document.querySelector('#powers');
const userFullName = document.querySelector('#full-name');
const userFirstAppearance = document.querySelector('#first-appearance');
const userimage = document.querySelector('#image');
const display = document.querySelector('.display');

function eventListeners(){
    form.addEventListener('submit', displayAvengerMember);
/*     form.addEventListener('submit', function(){
        console.log('test');
    }); */
}
eventListeners();

function displayAvengerMember(e){
    let html = '<div class="display-avenger"><div class="display-alias">%alias%</div><div class="display-powers">%powers%</div><div class="display-name">%name%</div><div class="first-appearance">%years%</div></div><div class="display-image"><img src="%URL%" atl=""></div><div class="remove-avenger"><p class="remove-avenger">Remove Avenger &#10006; </p></div></div></div>';

    let newHtml = html.replace('%alias%', userAlias.value);
    newHtml = newHtml.replace('%powers%', userPowers.value);
    newHtml = newHtml.replace('%name%', userFullName.value);
    newHtml = newHtml.replace('%years%', userFirstAppearance.value);
    newHtml = newHtml.replace('%URL%', userImage.value);
    display.insertAdjacentHTML('beforeend', newHtml);
    console.log('why no work');
    console.log(userAlias.value);
}
