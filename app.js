// #region SECTION morning Challenge
let pingPong = {
  feet: "table legs",
  top: "Play Area",
  divide: "Net",
  tool: "Paddle",
  point: "ball"
}

let breakfast = {
  bacon: 3,
  egg: 3,
  toast: true,
  pancakes: 24,
  frenchToast: 2,
  hashBrowns: '1cup',
  coffee: {
    size: '16oz',
    decaf: true,
    cream: false
  },
  condiments: ['syrup', 'ketchup', 'salt', 'tabasco', 'butter'],
  calories: 4500
}


// console.log(`
// This morning Chris had ${breakfast.egg} eggs, ${breakfast.bacon} strips of bacon, ${breakfast.pancakes} flapjacks and ${ breakfast.hashBrowns} of hash browns.
// Along with the breakfast Chris had a ${breakfast.coffee.size} of ${breakfast.coffee.decaf ? 'decaf' : 'real'} coffee ${breakfast.coffee.cream ? 'with cream' : 'straight black'}. 
// On the side was ${breakfast.condiments.join('_')}
// `);
// #endregion


// #region SECTION Cats
// 'Sagwa',
// 'Ms. Kitty',
// 'Mr. Snibbley',
// 'Sammie',
// 'Radio'

const cats = [
  {name: 'Sagwa', age: 1, color: 'siamese' },
  {name: 'Ms. Kitty', age: 11, color: 'Grey'},
  {name: 'Mr. Snibbley', age: 9, color: 'Orange and White'},
  {name: 'Sammie', age: 4, color: 'Maine Coon'},
  {name: 'Radio', age: 6, color: 'Anodized Aluminum', realCat: "totally why would question it?"}
]
// FOR LOOP / FOREACH
for( let i = 0; i < cats.length; i++){
  // NOTE alias in forloops are very helpful
  let cat = cats[i]
  console.log(cat.name);
}

// NOTE the cat -\/ is the same as the alias on line 50, (it represents one element of the array)
cats.forEach(cat => console.log('forEach', `
${cat.name} is a ${cat.color} brand cat. They are ${cat.age} years old. ${cat.realCat ? 'and they are totally real, why do you ask?' : ''}
`))

// FILTER find/keep multiple cats by a condition
let oldCats = []
for(let i = 0; i < cats.length; i++){
  let cat = cats[i]
  if(cat.age > 7){
    oldCats.push(cat)
  }
}
console.log('old Cats', oldCats);

let youngCats = cats.filter(cat => cat.age < 8)
console.log('young Cats', youngCats);



// FIND find/keep ONE (the first) cat by a condition

let foundCat = null
for(let i = 0; i < cats.length; i++){
  let cat = cats[i]
  if(cat.name == 'Sammie'){
    foundCat = cat
    break;
  }
}
console.log('found Cat by Name', foundCat);

let ageCat = cats.find(cat => cat.age  > 3 )
console.log('cat found by age', ageCat);
// #endregion

const allVillains = [
  { hat: false, name: "Lord Voldemort", facialHair: false, gender: "M", age: 800, hair: false, image: '../assets/images/Voldemort.jpg', guilty: false },
  { hat: false, name: "Cruella Deville", facialHair: false, gender: 'F', age: 65, hair: true, image: '../assets/images/cruella.png', guilty: false },
  { hat: true, name: "Darth Vader", facialHair: false, gender: "M", age: 51, hair: false, image: '../assets/images/vader.jpg', guilty: false },
  { hat: true, name: "wicked witch of the west", facialHair: false, gender: "F", age: 1000, hair: true, image: '../assets/images/WickedWitchoftheWest.jpg', guilty: false },
  { hat: false, name: "Syndrome", facialHair: false, gender: "M", age: 28, hair: true, image: 'assets/images/syndrome.jpg', guilty: false },
  { hat: false, name: "Ursula", facialHair: true, gender: "F", age: 50, hair: true, image: '../assets/images/Ursula.jpg', guilty: false },
  { hat: false, name: "Joker", facialHair: false, gender: "M", age: 33, hair: true, image: '../assets/images/joker.jpg', guilty: false },
  { hat: false, name: "Thanos", facialHair: false, gender: "M", age: 120, hair: false, image: '../assets/images/thanos.png', guilty: false },
  { hat: true, name: "Jafar", facialHair: true, gender: "M", age: 63, hair: true, image: '../assets/images/jafar.jpg', guilty: false },
  { hat: true, name: "White Witch", facialHair: false, gender: "F", age: 101, hair: true, image: '../assets/images/whiteWitch.jpg', guilty: false },
  { hat: false, name: "Hades", facialHair: false, gender: "M", age: 500000, hair: true, image: '../assets/images/hades.jpg', guilty: false },
  { hat: false, name: "Queen of Hearts", facialHair: false, gender: "F", age: 46, hair: true, image: '../assets/images/queenOfHearts.jpg', guilty: false }
]


function doCrime(){
let randomVillain = allVillains[Math.floor(Math.random()* allVillains.length)]
console.log('rando',randomVillain);
randomVillain.guilty = true
}
// NOTE we do Crime immediately after the definition cause I want it to run right away
doCrime()

let currentVillains  = allVillains

function drawVillains(){
  let template = ''
  currentVillains.forEach(v => template += `<div class="col-4 btn btn-primary" onclick="accuse('${v.name}')">${v.name}</div>`)
  let villainElm = document.getElementById('villains')
  // console.log(villainElm, template);
  // @ts-ignore
  villainElm.innerHTML = template
}
// NOTE we draw immediately after the definition cause I want it to run right away
drawVillains()

function accuse(name){
  // debugger
  let accused = allVillains.find( v => v.name == name)
  console.log('accusing', name, accused);
  if(accused.guilty == true){
    window.alert('You found em!')
  } else {
    window.alert('Nope keep looking')
  }
}


function filterHats(){
  let guilty = allVillains.find(v => v.guilty == true)
 currentVillains = currentVillains.filter( v => v.hat == guilty.hat)
 console.log('hat villains', currentVillains);
  drawVillains()
}

function filterHair(){
  currentVillains = currentVillains.filter(v => v.hair == true)
  drawVillains()
}

function filterNoBeard(){
  currentVillains = currentVillains.filter(v => v.facialHair == false)
  drawVillains()
}

function filterFifty(){
  currentVillains = currentVillains.filter(v => v.age >= 50)
  drawVillains()
}

function filterMale(){
  currentVillains = currentVillains.filter(v => v.gender == 'M')
  drawVillains()
}

function filterFemale(){
  currentVillains = currentVillains.filter(v => v.gender == 'F')
  drawVillains()
}

function filterStuff(property){
  console.log('filtering', property);
  let guiltyVillain = allVillains.find(v => v.guilty == true)
  // debugger
  currentVillains = currentVillains.filter(v => v[property] == guiltyVillain[property])
  drawVillains()
}