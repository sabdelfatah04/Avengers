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