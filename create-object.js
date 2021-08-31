// 1.using object literal
const student = {name: 'ASH',ID:1};
console.log(student);

//2.Constructor
const newObjects = new Object();
const newObject = new Object({named: 'ASH',IDd:1}) ;
console.log(newObject);

//3.With other object
const newStudent = Object.create(student);
console.log(newStudent.name);

//4.with class syntecnical sugar

class people{
    constructor(name,id){
        this.Name = name;
        this.ID = id;
    }
}
const newPeople = new people('sajal',3);
console.log(newPeople);