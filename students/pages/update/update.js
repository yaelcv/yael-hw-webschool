const fs = require ("fs");
//const { json } = require("stream/consumers");

class student {
    constructor(id, fname, lname, dateOfBirth, avg) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.dateOfBirth = dateOfBirth;
        this.avg = avg;
    }
    calcAge() {
        var month_diff = Date.now() - dateOfBirth.getTime();  
        var age_dt = new Date(month_diff); 
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        return age;  
    }
}    
 
function createStudent(){
    fetch('http://localhost:1702/btn-create')
    .then((res) => res.text())
    const currentList = fs.readFileSync("../../data/student.json","utf-8");
    jsonlist = JSON.parse(currentList);
    let newStudent = new student(document.getElementById("id").value,
    document.getElementById("fname").value,
    document.getElementById("lname").value,
    document.getElementById("date").value,
    document.getElementById("avg").value);
    jsonlist.push(student);
    fs.writeFileSync("../../data/student.json", JSON.stringify(jsonlist));
}

function createCurrentList (){
    const currentList = fs.readFileSync("../../data/student.json","utf-8");
    jsonlist = JSON.parse(currentList);
    return jsonlist; 
    currentList.push(student); 
}


function updateStudent(){
    fetch('http://localhost:1702/btn-update')
    .then((res) => res.text())
    const currentList = fs.readFileSync("../../data/student.json","utf-8");
    jsonlist = JSON.parse(currentList);
    for (let i = 0; i < currentList.length; i++) {
        found = false;
        const storedStudent = array[i];
        if(storedStudent.id === currentList.id){
            found = true;
            const newList = {...storedStudent, ...currentList};
            fs.writeFileSync("../../data/student.json", JSON.stringify(jsonlist));
            return;
        } 
    } 
}

    let newStudent = new student(document.getElementById("id").value,
    document.getElementById("fname").value,
    document.getElementById("lname").value,
    document.getElementById("date").value,
    document.getElementById("avg").value);
    jsonlist.push(student);
    fs.writeFileSync("../../data/student.json", JSON.stringify(jsonlist));


function deleteStudent(){
    fetch('http://localhost:1702/btn-delete')
    .then((res) => res.text())
    const currentList = fs.readFileSync("../../data/student.json","utf-8");
    jsonlist = JSON.parse(currentList);
    jsonlist.shift();
}



