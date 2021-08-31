const student = {
    name: 'sejan',
    id: 1,
    money :5000,
    balance:function(cost){
        this.money = this.money - cost;
        console.log(this)
        return this.money
    }
}
student.balance(200);
const sajal = {
    name: 'sajal',
    id: 1,
    money :5000,
}

const sajalBlance = student.balance.bind(sajal);
sajalBlance(500);


const babu = {
    name: 'babu',
    id: 1,
    money :10000,
}

const babubalance = student.balance.bind(babu);
babubalance(5000);