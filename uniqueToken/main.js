var allUsers = JSON.parse(localStorage.getItem("allusers"));

function uniqueToken() {
  return "A" + Math.random()*10;
}

function init() {
  const users= [{
    userName:"meir",
    email:"meir@gmail.com",
    token:"",
    password:"123456"
  },
  {
    userName:"avner",
    email:"avner@gmail.com",
    token:"",
    password:"234567"
  },
  {
    userName:"efrat",
    email:"efrat@gmail.com",
    token:"",
    password:"345678"
  },
  {
    userName:"ahron",
    email:"ahron@gmail.com",
    token:"",
    password:"456789"
  },
  {
    userName:"roya",
    email:"roya@gmail.com",
    token:"",
    password:"567890"
  }
 ]
  localStorage.setItem("allusers", JSON.stringify(users));
}

function tokenLogin(){
  var currentUser = JSON.parse(localStorage.getItem("currentuser"));
  if (currentUser){
    var userName = getUserNameByMailAndToken(currentUser.email, currentUser.token);
    if (userName != ""){
      alert("hello " + userName);
    }
    else {
      document.getElementById("login").style.display="block";
    }
  }
  else {
    document.getElementById("login").style.display="block";
  }  
}

onload=tokenLogin();

function newUserLogin(){
  var userMail = document.getElementById("email-box").value;
  var password = document.getElementById("pw-box").value;
  
  if(isUserExistByMailAndPassword(userMail, password)) {
    createTokenForUser(userMail);
  }
  else {
    alert("e-mail or password does not exist")
  } 
}

function isUserExistByMailAndPassword(mail, password){
  var isExist = false;
  for (let index = 0; index < allUsers.length; index++) {
    const currentUser = allUsers[index];
    if (currentUser.email==mail && currentUser.password==password){
      isExist = true;
      break;
    }
  }

  return isExist;
}

function getUserNameByMailAndToken(mail, token){
  var userName = "";
  for (let index = 0; index < allUsers.length; index++) {
    const currentUser = allUsers[index];
    if (currentUser.email==mail && currentUser.token==token){
      userName = currentUser.userName;
      break;
    }
  }

  return userName;
}

function createTokenForUser(userMail){
  var newToken = uniqueToken();
  localStorage.setItem("currentuser", '{"email":"' + userMail + '","token":"'+ newToken+ '"}');

  for (let index = 0; index < allUsers.length; index++) {
    const currentUser = allUsers[index];
    if (currentUser.email==userMail){
      currentUser.token=newToken;
      localStorage.setItem("allusers", JSON.stringify(allUsers));
    }
  }

}
