
const form = document.getElementById("create");

form.addEventListener("submit",(event) =>{
   event.preventDefault();

   const jsonData = {};
   const data = new FormData (form);
   for (const [key, value] of data){
       jsonData[key] = value;
   }
   fetch("http://localhost:1702/api/students",{method:"POST", body:JSON.stringify(jsonData)})
   .then((res) => {res.json();});
});


const update = document.getElementById("update");

   update.addEventListener("submit",(event) =>{
   event.preventDafault();

   const jsonData = {};
   const data = new FormData (update);
   for (const [key, value] of data){
       jsonData[key] = value;
   }
   fetch("http://localhost:1702/api/students", {
    method:"PUT",
    body: JSON.stringify(jsonData),
})
});





