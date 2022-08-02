

onload = getStudentsList();

function getStudentsList() {
     fetch("http://localhost:1702/api/students",{method:"GET"})
    .then((res) => res.json()).then((data) => showStudentsList(data));    
}

function showStudentsList(studentList) {

    listHTML = "<table><tr><th>Id</th><th>First Name</th><th>Last Name</th><th>Age</th><th>Average</th></tr>";

    studentList.forEach(currStudent => {
        listHTML += "<tr>";
        listHTML += "<td>" + currStudent.id + "</td>";
        listHTML += "<td>" + currStudent.fName + "</td>";
        listHTML += "<td>" + currStudent.lName + "</td>";
        listHTML += "<td>" + currStudent.age + "</td>";
        listHTML += "<td>" + currStudent.average + "</td>";
        listHTML += "</tr>";
    });
        
    listHTML += "</table>";
    document.getElementById("list").innerHTML = listHTML;
}


function deleteStudent(){
    let id = document.getElementById("idInput").value;
    fetch("http://localhost:1702/api/students",{method:"DELETE",body:id})
   .then((res) => {res.text(); getStudentsList();});
   
}


