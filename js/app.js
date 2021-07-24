'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pmm', '3pm', '4pm', '5pm', '6pm', '7pm']


// let Seattle = {
//     name: 'seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     randomCustamers: [],
//     avergCookiesperHour: [],
//     total:0,

//     getRandoumCust: function () {
//         let newrandom = 0
//         for (let i = 0; i < 14; i++) {
//             newrandom = random(this.min, this.max)
//             this.randomCustamers.push(newrandom)
//         }
//         console.log(this.randomCustamers)
//     },

//     avcalculteCookies: function () {

//         for (let i = 0; i < this.randomCustamers.length; i++) {

//             let finalcalcu = (Math.floor(this.avg) * this.randomCustamers[i])
//             this.total+=finalcalcu
//             this.avergCookiesperHour.push(finalcalcu)


//         }

//         console.log(this.avergCookiesperHour)


//     }

// }

// // console.log(Seattle.randomCustamers);

// Seattle.getRandoumCust();
// Seattle.avcalculteCookies()

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let divElemant=document.getElementById('fishestore');


// Seattle.render=function(){
//   let h1Elemant=document.createElement('h2')
//   divElemant.appendChild(h1Elemant)
//   h1Elemant.textContent=this.name

//   let ulElemant=document.createElement('ul') ;
//   divElemant.appendChild(ulElemant);

//   for (let i=0;i<this.avergCookiesperHour.length;i++){

//     let liElemant=document.createElement('li');
//     ulElemant.appendChild(liElemant);
//     liElemant.textContent=` ${hours[i]}:  ${this.avergCookiesperHour[i]}`;
//     console.log('from the for ');
//   }
//   let liElemant2=document.createElement('li');
//       ulElemant.appendChild(liElemant2);
//       liElemant2.textContent=` the total is : ${this.total}`
// }
// Seattle.render()


// let Tokyo = {
//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     randomCustamers: [],
//     avergCookiesperHour: [],
//     total:0,
//     getRandoumCust: function () {
//         let newrandom = 0
//         for (let i = 0; i < 14; i++) {
//             newrandom = random(this.min, this.max)
//             this.randomCustamers.push(newrandom)
//         }
//         console.log(this.randomCustamers)
//     },

//     avcalculteCookies: function () {

//         for (let i = 0; i < this.randomCustamers.length; i++) {

//             let finalcalcu = (Math.floor(this.avg) * this.randomCustamers[i])
//             this.total+=finalcalcu
//             this.avergCookiesperHour.push(finalcalcu)


//         }

//         console.log(this.avergCookiesperHour)


//     }

// }

// Tokyo.getRandoumCust();
// Tokyo.avcalculteCookies()



// Tokyo.render=function(){
//     let h1Elemant=document.createElement('h2')
//     divElemant.appendChild(h1Elemant)
//     h1Elemant.textContent=this.name

//     let ulElemant=document.createElement('ul') ;
//     divElemant.appendChild(ulElemant);

//     for (let i=0;i<this.avergCookiesperHour.length;i++){

//       let liElemant=document.createElement('li');
//       ulElemant.appendChild(liElemant);
//       liElemant.textContent=` ${hours[i]}:  ${this.avergCookiesperHour[i]}`;
//       console.log('from the for ');
//     }
//     let liElemant2=document.createElement('li');
//       ulElemant.appendChild(liElemant2);
//       liElemant2.textContent=` the total is : ${this.total}`
//   }
//   Tokyo.render()





//   let Dubai = {
//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     randomCustamers: [],
//     avergCookiesperHour: [],
//     total:0,

//     getRandoumCust: function () {
//         let newrandom = 0
//         for (let i = 0; i < 14; i++) {
//             newrandom = random(this.min, this.max)
//             this.randomCustamers.push(newrandom)
//         }
//         console.log(this.randomCustamers)
//     },

//     avcalculteCookies: function () {

//         for (let i = 0; i < this.randomCustamers.length; i++) {

//             let finalcalcu = (Math.floor(this.avg) * this.randomCustamers[i])
//             this.total+=finalcalcu
//             this.avergCookiesperHour.push(finalcalcu)


//         }

//         console.log(this.avergCookiesperHour)


//     }

// }

// Dubai.getRandoumCust();
// Dubai.avcalculteCookies()



// Dubai.render=function(){
//     let h1Elemant=document.createElement('h2')
//     divElemant.appendChild(h1Elemant)
//     h1Elemant.textContent=this.name

//     let ulElemant=document.createElement('ul') ;
//     divElemant.appendChild(ulElemant);

//     for (let i=0;i<this.avergCookiesperHour.length;i++){

//       let liElemant=document.createElement('li');
//       ulElemant.appendChild(liElemant);
//       liElemant.textContent=` ${hours[i]}:  ${this.avergCookiesperHour[i]}`;
//       console.log('from the for ');
//     }
//     let liElemant2=document.createElement('li');
//       ulElemant.appendChild(liElemant2);
//       liElemant2.textContent=` the total is : ${this.total}`
//   }
//   Dubai.render()






//   let Paris = {
//     name: 'Paris',
//     min: 20	,
//     max: 38,
//     avg: 2.3,
//     randomCustamers: [],
//     avergCookiesperHour: [],
//     total:0,
//     getRandoumCust: function () {
//         let newrandom = 0
//         for (let i = 0; i < 14; i++) {
//             newrandom = random(this.min, this.max)
//             this.randomCustamers.push(newrandom)
//         }
//         console.log(this.randomCustamers)
//     },

//     avcalculteCookies: function () {

//         for (let i = 0; i < this.randomCustamers.length; i++) {

//             let finalcalcu = (Math.floor(this.avg) * this.randomCustamers[i])
//             this.total+=finalcalcu
//             this.avergCookiesperHour.push(finalcalcu)


//         }

//         console.log(this.avergCookiesperHour)


//     }

// }

// Paris.getRandoumCust();
// Paris.avcalculteCookies()



// Paris.render=function(){
//     let h1Elemant=document.createElement('h2')
//     divElemant.appendChild(h1Elemant)
//     h1Elemant.textContent=this.name

//     let ulElemant=document.createElement('ul') ;
//     divElemant.appendChild(ulElemant);

//     for (let i=0;i<this.avergCookiesperHour.length;i++){

//       let liElemant=document.createElement('li');
//       ulElemant.appendChild(liElemant);
//       liElemant.textContent=` ${hours[i]}:  ${this.avergCookiesperHour[i]}`;
//       console.log('from the for ');
//     }
//     let liElemant2=document.createElement('li');
//       ulElemant.appendChild(liElemant2);
//       liElemant2.textContent=` the total is : ${this.total}`
//   }
//   Paris.render()





//   let Lima = {
//     name: 'Lima',
//     min: 2		,
//     max: 16,
//     avg: 4.6,
//     randomCustamers: [],
//     avergCookiesperHour: [],
//     total:0,
//     getRandoumCust: function () {
//         let newrandom = 0
//         for (let i = 0; i < 14; i++) {
//             newrandom = random(this.min, this.max)
//             this.randomCustamers.push(newrandom)
//         }
//         console.log(this.randomCustamers)
//     },

//     avcalculteCookies: function () {

//         for (let i = 0; i < this.randomCustamers.length; i++) {

//             let finalcalcu = (Math.floor(this.avg) * this.randomCustamers[i])
//              this.total+=finalcalcu

//             this.avergCookiesperHour.push(finalcalcu)


//         }

//         console.log(this.avergCookiesperHour)


//     }

// }

// Lima.getRandoumCust();
// Lima.avcalculteCookies()



// Lima.render=function(){
//     let h1Elemant=document.createElement('h2')
//     divElemant.appendChild(h1Elemant)
//     h1Elemant.textContent=this.name

//     let ulElemant=document.createElement('ul') ;
//     divElemant.appendChild(ulElemant);

//     for (let i=0;i<this.avergCookiesperHour.length;i++){

//       let liElemant=document.createElement('li');
//       ulElemant.appendChild(liElemant);
//       liElemant.textContent=` ${hours[i]}:  ${this.avergCookiesperHour[i]}`;
//       console.log('from the for ');
//     }

//     let liElemant2=document.createElement('li');
//       ulElemant.appendChild(liElemant2);
//       liElemant2.textContent=` the total is : ${this.total}`
//   }
//   Lima.render()




let allshopes = []

function Shopes(name, min, max, avg,) {

    this.userName = name;
    this.minCust = min;
    this.maxcust = max;
    this.avgsale = avg;
    this.randomCustamers = [];
    this.avergCookiesperHour = [];
    this.total = 0;

    allshopes.push(this)
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) ;
}







let seeatle = new Shopes('seeatle', 23, 65, 6.3)
let Tokyo = new Shopes('Tokyo', 3, 24, 1.2);
let Dubai = new Shopes('Dubai', 11, 38, 3.7);
let Paris = new Shopes('Paris', 20, 38, 2.3);
let Lima = new Shopes('Lima', 2, 16, 4.6);



Shopes.prototype.getRandoumCust = function () {
    let newrandom = 0
    for (let i = 0; i < 14; i++) {
        newrandom = random(this.minCust, this.maxcust)
        this.randomCustamers.push(newrandom)
        console.log(newrandom);
    }
}

// seeatle.getRandoumCust();
// Tokyo.getRandoumCust();
// Dubai.getRandoumCust();
// Paris.getRandoumCust();
// Lima.getRandoumCust();


Shopes.prototype.avcalculteCookies = function () {

    for (let i = 0; i < this.randomCustamers.length; i++) {

        let finalcalcu = (Math.floor(this.avgsale) * this.
            randomCustamers[i])
        this.total += finalcalcu
        this.avergCookiesperHour.push(finalcalcu)


    }
}


// seeatle.avcalculteCookies();

// Tokyo.avcalculteCookies();
// Dubai.avcalculteCookies();
// Paris.avcalculteCookies();
// Lima.avcalculteCookies();


let divElemant = document.getElementById('fishestore');

let h2Elem = document.createElement('h2');

divElemant.appendChild(h2Elem);

h2Elem.textContent = 'The data for each store'
let tableElemant = document.createElement('table');
divElemant.appendChild(tableElemant);

function theheader() {

    let tr1Elemant = document.createElement('tr');
    tableElemant.appendChild(tr1Elemant);

    let thElemant = document.createElement('th');
    tr1Elemant.appendChild(thElemant);
    thElemant.textContent = `      `;

    for (let i = 0; i < hours.length; i++) {
        let thElemant = document.createElement('th');
        tr1Elemant.appendChild(thElemant);
        thElemant.textContent = `${hours[i]}`;

    }

    let th2Elemant = document.createElement('th');
    tr1Elemant.appendChild(th2Elemant);
    th2Elemant.textContent = `Daily Location Total`;
};
theheader()
let tremptyElemant = document.createElement('tr');
tableElemant.appendChild(tremptyElemant);


Shopes.prototype.render = function () {
    let tr2Elemant = document.createElement('tr');
    tableElemant.appendChild(tr2Elemant);
    let td1Elemant = document.createElement('td');
    tr2Elemant.appendChild(td1Elemant);
    td1Elemant.textContent = `${this.userName}`;

    for (let i = 0; i < this.randomCustamers.length; i++) {


        let td2Elemant = document.createElement('td');
        tr2Elemant.appendChild(td2Elemant);
        td2Elemant.textContent = `${this.avergCookiesperHour[i]}`;
    }
    let td2Elemant = document.createElement('td');
    tr2Elemant.appendChild(td2Elemant);
    td2Elemant.textContent = `${this.total}`;
};

// seeatle.render();
// Tokyo.render();
// Dubai.render();
// Paris.render();
// Lima.render();


let form = document.getElementById("form")
form.addEventListener('submit', makenewshope)
function makenewshope(event) {
    event.preventDefault();

    console.log(event);

    let nameloc = event.target.locationName.value;
    // console.log(nameloc);
    let minimumcust = event.target.minimum.value;

    let maximumcust = event.target.maximum.value;

    let avecustumpersale = event.target.avergcookie.value;

    console.log(nameloc,minimumcust,maximumcust,avecustumpersale);

    let newshopform = new Shopes(nameloc, minimumcust, maximumcust, avecustumpersale)
    console.log(newshopform);
    tr2Elemant.textContent=''
    newshopform.getRandoumCust();

    newshopform.avcalculteCookies();
    newshopform.render()
    FOOTER()
}


// makenewshope(event)






for (let i = 0; i < allshopes.length; i++) {

    allshopes[i].getRandoumCust();
    allshopes[i].avcalculteCookies();

    allshopes[i].render();
}





let tr2Elemant = document.createElement('tr');


function FOOTER() {
    tableElemant.appendChild(tr2Elemant);
    let td1Elemant = document.createElement('td');
    tr2Elemant.appendChild(td1Elemant);
    td1Elemant.textContent = `total`;
    let totaloftoatl = 0
    for (let i = 0; i < hours.length; i++) {
        let total = 0

        for (let j = 0; j < allshopes.length; j++) {
            total += allshopes[j].avergCookiesperHour[i]
            totaloftoatl += allshopes[j].avergCookiesperHour[i]
        }
        let td2Elemant = document.createElement('td');
        tr2Elemant.appendChild(td2Elemant);
        td2Elemant.textContent = total;

    }
    let td3Elemant = document.createElement('td');
    tr2Elemant.appendChild(td3Elemant);
    td3Elemant.textContent = totaloftoatl;
}

FOOTER()


