// ****Object practice #2****

class MakeCar{ 
constructor(make, model, color, doors) {
    this.make=make
    this.model=model
    this.color=color
    this.doors=doors
    }
    honk(){
        alert('beep,beep,sucka')
    }
    lock(){
        alert(`locked ${this.doors} doors`)
    }
}
let chevyAccord= new MakeCar('Chevy', 'Accord', 'Red', 5)
console.log(chevyAccord)
