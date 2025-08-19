// *******   OBJECT PRACTICE *******

// class NewCar{
//     constructor(make, model, color, doors){    
// this.make=make
// this.model=model
// this.color=color
// this.doors=doors
// }
// honk(){
//     alert('beep beep sucka')
// }
// lock(){
//     alert(`Now locking ${this.doors} door!`)
// }
// }
// let chevyVolt= new NewCar('Chevy','Volt','Gold','3')
// console.log(chevyVolt)



class MakeDog{
constructor(breed, hair, color, size){
    this.breed=breed
    this.hair=hair
    this.color=color
    this.size=size
}
bark(){
    alert('Woof Woof')
}
run(){
    alert('Fetch Fido boy')
}
}
let maltesePoodle= new MakeDog('maltese', 'long', 'black', 'large')
console.log(maltesePoodle)