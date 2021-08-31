const student = {
    name: 'sejan',
    ID: '1',
    class: null,
}

const keys = Object.keys(student);
console.log(keys);
const values = Object.values(student);
console.log(values);
const pairs = Object.entries(student);
console.log(pairs);
/* const seal = Object.seal(student);
student.ID = 2;
console.log(seal); */
// delete student.class;
console.log(student);
const freeze = Object.freeze(student);
delete student.class;
console.log(student);
