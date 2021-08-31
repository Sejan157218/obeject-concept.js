/* //using object literal
const fullName = {firstname:'sejan',latname:'mahmud'};
console.log(fullName);

//constructor
// const newObj =new Object();
const newObj =new Object({firstname:'sejan',latname:'mahmud'});
console.log(newObj);


//create with other object
const createObj = Object.create(newObj);
console.log(createObj.firstname);

//with class
class withClass{
    constructor(name,id){
        this.name = name;
        this.id = id
    }
}
console.log(new withClass('sajal',2));
 */
/* 
const student = {
    name:'sejan',
    id: 5,
    money:500,
    balance:function(cost){
        this.money = this.money - cost;
        return this.money;
    }
}
console.log(student.balance(200));
console.log(student); */
/* 
// properties
const student = {
    name:'sejan',
    id: 5,
    money:500,
}
console.log(Object.keys(student));
console.log(Object.values(student));
student.balances = 500;
console.log(student);
// console.log(Object.seal(student));
// //after seal add not work
// student.addmoney = 500;
// console.log(student);
// //after seal value change work
// student.balances = 5000;
// console.log(student);

// after freeze add,pop,chane not work
// console.log(Object.freeze(student));

// for delete property
delete student.id
console.log(student);
 */

/* 
// loop object
const student = {
    name: 'sejan',
    ID: '1',
    class: null,
}

// for in work object
for(const prop in student){
    console.log(prop,student[prop]);//prop---property and student[prop]--value
}

// convart object to array
const keys = Object.keys(student);
for(const key of keys){
    console.log(key,student[key]);
}

// 
for(const [key,value] of Object.entries(student)){
    console.log(key,value);
} */
/* 
// compare loop
let a = {a:2,b:2};
let b = {a:2,b:2};

// not right way
b=a;
if(a==b){
    console.log(true);
}
else{
    console.log(false);
}

// 

let c = {a:2,b:2};
let d = {a:2,b:3};
function compare(obj1,obj2){
    if (Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop]!==obj2[prop]){
            return false;
        }
    }
    return true;
}
console.log(compare(c,d));

 */
/* 
//bind method
const student = {
    name:'sejan',
    id: 5,
    money:500,
    balance:function(cost){
        this.money = this.money - cost;
        return this.money;
    }
}

const sajal = {
    name:'sajal',
    id: 5,
    money:500,
}
const sajalBalance =student.balance.bind(sajal);
sajalBalance(200);
console.log(sajal); */
/* 
//call apply
const student = {
    name:'sejan',
    id: 5,
    money:500,
    balance:function(cost,cost1,cost2){
        this.money = this.money - cost-cost1-cost2;
        return this.money;
    }
}
const sajal = {
    name:'sajal',
    id: 5,
    money:500,
}

// call
student.balance.call(sajal,200,50,20);
console.log(sajal);
// apply
student.balance.apply(sajal,[200,20,10]);
console.log(sajal); */