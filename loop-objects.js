const student = {
    name: 'sejan',
    ID: '1',
    class: null,
}

// for (const prop of objName)-of-array
for (const prop in student){
    console.log(prop,':',student[prop]);
}

const keys = Object.keys(student);//object to array
for (const prop of keys){
    console.log(prop,':',student[prop]);
}


for(const [key,value] of Object.entries(student)){
    console.log(key,':',value);
}