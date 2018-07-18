var moods = ["Happy", "Indifferent", "Angry"]

var cat1 = {
  name: "Mr. Snibbly",
  imageUrl: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350",
  numberOfPets: 0,
  moo: moods[2]
}

// var cat2 = {
//   name: "Grumpy cat",
//   imageUrl: "https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg",
//   numberOfPets: 11000,
//   mood: "Grumpy"
// }

function Cat(name, imageUrl){
  this.name = name
  this.imageUrl = imageUrl
  this.numberOfPets = 0
  this.mood = moods[0]
}

var cat1 = new Cat("Mr. Snibbly", "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350")
var cat2 = new Cat("Grumpy Cat", "https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg")

var cats = []
cats.push(cat1)
cats.push(cat2)
console.log(cats)


function petCat(index){
  var cat = cats[index]
  cat.numberOfPets++
  console.log(cat.numberOfPets)
  update(cat, index)
}

function setup(){
  var catsElem = document.getElementById("cats")
  var template = ""

  for(var i = 0; i < cats.length; i++){
    var cat = cats[i]
    template += `
    <div class="col-6">
      <h1>${cat.name}</h1>
      <h3 id="${i + 'mood'}">Mood: ${cat.mood}</h3>
      <img src="${cat.imageUrl}" alt="">
      <h3>Number of pets:</h3>
      <p id="${i + 'pets'}">${cat.numberOfPets}</p>
      <button class="btn btn-primary" onclick="petCat(${i})">Pet</button>
      <button class="btn btn-success" onclick="giveTreat(${i})">Give Treat</button>
    </div>
    `
  }

catsElem.innerHTML = template
}

function giveTreat(index){
  var cat = cats[index]
  cat.numberOfPets -= 10
  update(cat, index)
}

function update (cat, index){
  console.log(cats)
  document.getElementById(`${index + 'pets'}`).innerText = cat.numberOfPets
  var mood = ""
  
  if(cat.numberOfPets < 10){
    mood = "Happy"    
  }else if(cat.numberOfPets < 20){
    mood = "Meh"
  }else {
    mood = "Grumpy"
  }

  if(mood != cat.mood){
    cat.mood = mood
    document.getElementById(`${index + 'mood'}`).innerText = "Mood: " + mood
  }
}

setup()







