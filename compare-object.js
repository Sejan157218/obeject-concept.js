// const obj1 = {a:1,b:2};
// const obj2 = {a:1,b:2};
/* 
// Not right way
if(obj1 == obj2){
    console.log('this is true');
}
else{
    console.log('this is false');
} */
/* 
// Not right way
const obj1 = {a:1,b:2};
const obj2 = {b:1,a:2};
if (JSON.stringify(obj1) ===JSON.stringify(obj2)){
    console.log('this is true');
}
else{
    console.log('this is false');
} */

const obj1 = {a:1,b:2};
const obj2 = {b:2,a:1};
function compare(obj1,obj2){
    if(Object.keys(obj1).length !==Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop]!==obj2[prop]){
            return false; 
        }
    }
    return true;
}
const isEqual = compare(obj1,obj2);
console.log(isEqual);