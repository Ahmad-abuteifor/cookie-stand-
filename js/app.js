'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pmm', '3pm', '4pm', '5pm', '6pm', '7pm']


let Seattle = {
    name: 'seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    randomCustamers: [],
    avergCookiesperHour: [],
    total:0,

    getRandoumCust: function () {
        let newrandom = 0
        for (let i = 0; i < 14; i++) {
            newrandom = random(this.min, this.max)
            this.randomCustamers.push(newrandom)
        }
        console.log(this.randomCustamers)
    },

    avcalculteCookies: function () {
        
        for (let i = 0; i < this.randomCustamers.length; i++) {
            
            let finalcalcu = (Math.floor(this.avg) * this.randomCustamers[i])
            this.total+=finalcalcu
            this.avergCookiesperHour.push(finalcalcu)
            

        }

        console.log(this.avergCookiesperHour)


    }

}

// console.log(Seattle.randomCustamers);

Seattle.getRandoumCust();
Seattle.avcalculteCookies()

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let divElemant=document.getElementById('fishestore');


Seattle.render=function(){
  let h1Elemant=document.createElement('h2')
  divElemant.appendChild(h1Elemant)
  h1Elemant.textContent=this.name

  let ulElemant=document.createElement('ul') ;
  divElemant.appendChild(ulElemant);

  for (let i=0;i<this.avergCookiesperHour.length;i++){

    let liElemant=document.createElement('li');
    ulElemant.appendChild(liElemant);
    liElemant.textContent=` ${hours[i]}:  ${this.avergCookiesperHour[i]}`;
    console.log('from the for ');
  }
  let liElemant2=document.createElement('li');
      ulElemant.appendChild(liElemant2);
      liElemant2.textContent=` the total is : ${this.total}`
}
Seattle.render()


let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    randomCustamers: [],
    avergCookiesperHour: [],
    total:0,
    getRandoumCust: function () {
        let newrandom = 0
        for (let i = 0; i < 14; i++) {
            newrandom = random(this.min, this.max)
            this.randomCustamers.push(newrandom)
        }
        console.log(this.randomCustamers)
    },

    avcalculteCookies: function () {
        
        for (let i = 0; i < this.randomCustamers.length; i++) {
            
            let finalcalcu = (Math.floor(this.avg) * this.randomCustamers[i])
            this.total+=finalcalcu
            this.avergCookiesperHour.push(finalcalcu)
            

        }

        console.log(this.avergCookiesperHour)


    }

}

Tokyo.getRandoumCust();
Tokyo.avcalculteCookies()



Tokyo.render=function(){
    let h1Elemant=document.createElement('h2')
    divElemant.appendChild(h1Elemant)
    h1Elemant.textContent=this.name
  
    let ulElemant=document.createElement('ul') ;
    divElemant.appendChild(ulElemant);
  
    for (let i=0;i<this.avergCookiesperHour.length;i++){
  
      let liElemant=document.createElement('li');
      ulElemant.appendChild(liElemant);
      liElemant.textContent=` ${hours[i]}:  ${this.avergCookiesperHour[i]}`;
      console.log('from the for ');
    }
    let liElemant2=document.createElement('li');
      ulElemant.appendChild(liElemant2);
      liElemant2.textContent=` the total is : ${this.total}`
  }
  Tokyo.render()





  let Dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    randomCustamers: [],
    avergCookiesperHour: [],
    total:0,

    getRandoumCust: function () {
        let newrandom = 0
        for (let i = 0; i < 14; i++) {
            newrandom = random(this.min, this.max)
            this.randomCustamers.push(newrandom)
        }
        console.log(this.randomCustamers)
    },

    avcalculteCookies: function () {
        
        for (let i = 0; i < this.randomCustamers.length; i++) {
            
            let finalcalcu = (Math.floor(this.avg) * this.randomCustamers[i])
            this.total+=finalcalcu
            this.avergCookiesperHour.push(finalcalcu)
            

        }

        console.log(this.avergCookiesperHour)


    }

}

Dubai.getRandoumCust();
Dubai.avcalculteCookies()



Dubai.render=function(){
    let h1Elemant=document.createElement('h2')
    divElemant.appendChild(h1Elemant)
    h1Elemant.textContent=this.name
  
    let ulElemant=document.createElement('ul') ;
    divElemant.appendChild(ulElemant);
  
    for (let i=0;i<this.avergCookiesperHour.length;i++){
  
      let liElemant=document.createElement('li');
      ulElemant.appendChild(liElemant);
      liElemant.textContent=` ${hours[i]}:  ${this.avergCookiesperHour[i]}`;
      console.log('from the for ');
    }
    let liElemant2=document.createElement('li');
      ulElemant.appendChild(liElemant2);
      liElemant2.textContent=` the total is : ${this.total}`
  }
  Dubai.render()






  let Paris = {
    name: 'Paris',
    min: 20	,
    max: 38,
    avg: 2.3,
    randomCustamers: [],
    avergCookiesperHour: [],
    total:0,
    getRandoumCust: function () {
        let newrandom = 0
        for (let i = 0; i < 14; i++) {
            newrandom = random(this.min, this.max)
            this.randomCustamers.push(newrandom)
        }
        console.log(this.randomCustamers)
    },

    avcalculteCookies: function () {
        
        for (let i = 0; i < this.randomCustamers.length; i++) {
            
            let finalcalcu = (Math.floor(this.avg) * this.randomCustamers[i])
            this.total+=finalcalcu
            this.avergCookiesperHour.push(finalcalcu)
            

        }

        console.log(this.avergCookiesperHour)


    }

}

Paris.getRandoumCust();
Paris.avcalculteCookies()



Paris.render=function(){
    let h1Elemant=document.createElement('h2')
    divElemant.appendChild(h1Elemant)
    h1Elemant.textContent=this.name
  
    let ulElemant=document.createElement('ul') ;
    divElemant.appendChild(ulElemant);
  
    for (let i=0;i<this.avergCookiesperHour.length;i++){
  
      let liElemant=document.createElement('li');
      ulElemant.appendChild(liElemant);
      liElemant.textContent=` ${hours[i]}:  ${this.avergCookiesperHour[i]}`;
      console.log('from the for ');
    }
    let liElemant2=document.createElement('li');
      ulElemant.appendChild(liElemant2);
      liElemant2.textContent=` the total is : ${this.total}`
  }
  Paris.render()





  let Lima = {
    name: 'Lima',
    min: 2		,
    max: 16,
    avg: 4.6,
    randomCustamers: [],
    avergCookiesperHour: [],
    total:0,
    getRandoumCust: function () {
        let newrandom = 0
        for (let i = 0; i < 14; i++) {
            newrandom = random(this.min, this.max)
            this.randomCustamers.push(newrandom)
        }
        console.log(this.randomCustamers)
    },

    avcalculteCookies: function () {
        
        for (let i = 0; i < this.randomCustamers.length; i++) {
            
            let finalcalcu = (Math.floor(this.avg) * this.randomCustamers[i])
             this.total+=finalcalcu

            this.avergCookiesperHour.push(finalcalcu)
            

        }

        console.log(this.avergCookiesperHour)


    }

}

Lima.getRandoumCust();
Lima.avcalculteCookies()



Lima.render=function(){
    let h1Elemant=document.createElement('h2')
    divElemant.appendChild(h1Elemant)
    h1Elemant.textContent=this.name
  
    let ulElemant=document.createElement('ul') ;
    divElemant.appendChild(ulElemant);
  
    for (let i=0;i<this.avergCookiesperHour.length;i++){
  
      let liElemant=document.createElement('li');
      ulElemant.appendChild(liElemant);
      liElemant.textContent=` ${hours[i]}:  ${this.avergCookiesperHour[i]}`;
      console.log('from the for ');
    }

    let liElemant2=document.createElement('li');
      ulElemant.appendChild(liElemant2);
      liElemant2.textContent=` the total is : ${this.total}`
  }
  Lima.render()