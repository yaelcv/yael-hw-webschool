
const formButton = document.getElementById("create");

console.log(formButton);

formButton.addEventListener("click",(event) =>{
   event.preventDefault();

    let form = document.getElementById("studentDetails");

   const jsonData = {};
   const data = new FormData(form);
   for (const [key, value] of data){
       jsonData[key] = value;
   }

   console.log(jsonData);

   fetch("http://localhost:1702/api/students", {
    method:"PUT", body:JSON.stringify(jsonData)}).then((res) => res.text()).then((text) => {
        if (text == "Student Not Found") {
            fetch("http://localhost:1702/api/students", {method:"POST", body:JSON.stringify(jsonData)})
        }});

   /*const jsonData = {};
   const data = new FormData (form);
   for (const [key, value] of data){
       jsonData[key] = value;
   }
   fetch("http://localhost:1702/api/students",{method:"POST", body:JSON.stringify(jsonData)})
   .then((res) => {res.json();});*/
});

/*
const update = document.getElementById("update");

   update.addEventListener("submit",(event) =>{
   event.preventDafault();


});
*/




