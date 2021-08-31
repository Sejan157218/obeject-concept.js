const student = {
    name: 'sejan',
    id: 1,
    money :5000,
    newBalance :()=>{
        console.log(this);
    },
    balance:function(cost,cost2,cost3){
        this.money = this.money - cost -cost2-cost3;
        console.log(this)
        return this.money
    }
}
const sajal = {
    name: 'sajal',
    id: 1,
    money :5000,
}

// call
student.balance.call(sajal,500,50,5);
console.log(sajal);