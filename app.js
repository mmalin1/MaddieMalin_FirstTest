// Question 1
// create a var of all the students: id, name, major
var students =[
    {id:1, name:'John', major:'CS'},
    {id:2, name:'Mike', major:'Math'},
    {id:3, name:'Sally', major:'Pharmacy'},
]

// Sarah info
let sarah = {id:4, name:'Sarah', major:'Business'}

addStudents = ((obj) => {
    students.push(obj);
})

addStudents(sarah);

// check console to see if added
displayStudents = (() => {
    students.forEach((item, index, major) => {
        console.log(item, name, major);
    })
})

displayStudents();

// Question 2
const boys = [
    {id: 1, hobby:'baseball'},
    {id: 2, hobby:'soccer'},
    {id:3, hobby:'running'}
];
const girls = [
    {id: 1, sport:'soccer'},
    {id: 2, sport:'running'},
    {id:3, sport:'soccer'}
];

compare = ((boy, girl) => {

    boy.forEach((item1, id) => {
        girl.forEach((item2, nr) => {
            if (item1.hobby == item2.sport) {
                console.log('For sport ' + item1.hobby + ', both boy ' + item1.id + ' and girl ' + item2.id );     
                
                document.getElementById("q2b").innerHTML += '<li>For sport ' + item1.hobby + ', both boy ' + item1.id + ' and girl ' + item2.id + '</li>';         

               }

            
        })
    })
        
    
})


compare(boys, girls);

// document.getElementById("q2b").innerHTML = compare;




