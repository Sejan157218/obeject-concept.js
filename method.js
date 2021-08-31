const student = {
    name: 'sejan',
    id: 1,
    money :5000,
    subject:['Math','Bangla','English'],
    frirnd:{
        name : 'abc',
        id : 2,
    },
    balance:function(cost){
        this.money = this.money - cost;
        return this.money
    }
}
console.log(student.balance(4000));
console.log(student);