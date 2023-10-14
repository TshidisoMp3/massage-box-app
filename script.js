//body properties
const body = document.body;

//div properties
const div = document.getElementById("root");
   /* .style.width = "300px";
    div.style.height = "300px";
    div.style.background = "red";
    div.style.color = "white";
    div.style.marginLeft = "400px"
    div.style.marginTop = "120px"
    div.innerHTML = "Hello";
    
document.body.appendChild(div);*/

const form = document.createElement("form")
    form.setAttribute("method", "post");

let content = document.createElement("input")
content.setAttribute("type", "text");
content.setAttribute("name", "FullName");


document.body.appendChild(form);
form.appendChild(content);