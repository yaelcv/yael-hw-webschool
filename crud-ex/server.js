const http = require("http");
const PORT = 1702;
const fs = require("fs");

const path = require("path");
const dir = path.join(__dirname + "/pages/");
const ddir = path.join(__dirname + "/data/");
const sdir = path.join(__dirname + "/services/");

const getStudentList = require(sdir + "read.js");
const createNewStudent = require(sdir + "create.js");
const updateStudent = require(sdir + "update.js");
const deleteStudent = require(sdir + "delete.js");

const server = http.createServer(async (req, res) => {
  const method = req.method;
  const url = req.url;
  console.log("method", method);
  switch (url) {
    case "/":
      fs.createReadStream(dir + "/home/home.html").pipe(res);
      break;
    case "/home.css":
      fs.createReadStream(dir + "/home/home.css").pipe(res);
      break;
    case "/home.js":
      fs.createReadStream(dir + "/home/home.js").pipe(res);
      break;
    case "/show":
      const show = fs.readFileSync(dir + "/show/show.html");
      res.end(show);
      break;
    case "/show.css":
      const cssShow = fs.readFileSync(dir + "/show/show.css");
      res.end(cssShow);
      break;
    case "/show.js":
        const jsShow = fs.readFileSync(dir + "/show/show.js");
        res.end(jsShow);
        break;      
    case "/update":
      const update = fs.readFileSync(dir + "/update/update.html");
      res.end(update);
      break;
    case "/update.css":
      const cssUpdate = fs.readFileSync(dir + "/update/update.css");
      res.end(cssUpdate);
      break;
    case "/update.js":
      const jsUpdate = fs.readFileSync(dir + "/update/update.js");
      res.end(jsUpdate);
      break;

    case "/api/students":
      switch (method) {
        case "GET":
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(getStudentList()));
          break;
        
        case "POST":
          const newStudentBuffers = [];
          for await (const chunk of req) {
            newStudentBuffers.push(chunk);
          }
          const newStudent = JSON.parse(Buffer.concat(newStudentBuffers).toString());
          createNewStudent(newStudent);
          res.end();
          break;

        case "DELETE":
          const delBuffers = [];
          for await (const chunk of req) {
            delBuffers.push(chunk);
          }
          const delStudentId = Buffer.concat(delBuffers).toString();
          let del = deleteStudent(delStudentId);
          let alert;
          if (del) {
            alert  = "Student Deleted";
          }
                  
          res.end(alert);
          break;
        
        case "PUT":
            const studentBuffers = [];
            for await (const chunk of req) {
              studentBuffers.push(chunk);
            }
            const studentToUpdate = JSON.parse(Buffer.concat(studentBuffers).toString());

            console.log(studentToUpdate);

            let found = updateStudent(studentToUpdate);
            let message;
            if (found) {
              message  = "Student Details Updated";
            }
            else {
              message  = "Student Not Found";
            }
          
            res.end(message);
            break;
          
        default:
          const err = fs.readFileSync(dir + "/404.html");
          res.end(err);
          break;
      }
  }
});
server.listen(PORT);
console.log("listening to port 1702");
