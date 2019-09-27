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
const userImage = document.querySelector('#image');
const display = document.querySelector('.display');

function eventListeners(){
    form.addEventListener('submit', displayAvengerMember);
    display.addEventListener('click', removeAvenger);
/*     form.addEventListener('submit', function(){
        console.log('test');
    }); */
}
eventListeners();

function displayAvengerMember(e){
    let html = '<div class="display-avenger"><div class="display-alias">%alias%</div><div class="display-powers">%powers%</div><div class="display-name">%name%</div><div class="first-appearance">%years%</div><div class="display-image"><img src="%url%" atl=""></div><div class="remove-avenger"><p class="remove-avenger">Remove Avenger &#10006; </p></div></div>';

    let newHtml = html.replace('%alias%', userAlias.value);
    newHtml = newHtml.replace('%powers%', userPowers.value);
    newHtml = newHtml.replace('%name%', userFullName.value);
    newHtml = newHtml.replace('%years%', userFirstAppearance.value);
    newHtml = newHtml.replace('%url%', userImage.value);
    display.insertAdjacentHTML('beforeend', newHtml);

    e.preventDefault();

    if()
}

function removeAvenger(e) {
    if(e.target.parentElement.classList.contains('remove-avenger')){
        e.target.parentElement.parentElement.remove();
        //console.log(e.target.parentElement);
    }
}



