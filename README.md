# expressTodo
<h1>I save for myself. My first express study.</h1>

important notes for myself

app.use(express.static(__dirname))  -> i can go external js file with this code (otherwise client side cant work external js of html file)
app.use(express.urlencoded({ extended: true }));  -> i can get data post method with form like php
res.redirect("/") -> i go to main page after post with ths.
------------------------------------

<h2>Client Side </h2>
I get datas with asyn await but i lived comma problems between objects. So I used .join("") for solving this problem.


<code>
  
  
async function getData() { <br /> 
  const data = await fetch("http://localhost:8000/api"); <br /> 
  const result = await data.json(); <br /> 
  console.log(result[0]) <br /> 
  document.querySelector(".content").innerHTML =result.map(item => (` <br /> 
    <div class="row"> <br />  
    <div class="col1">${item.goal}</div>  <br /> 
    <div class="col2">${item.date} </div> <br /> 
    <div class="col3">${item.finished}</div> <br /> 
  </div>` <br /> 
  )).join(""); <br /> 
} <br /> 
  
  
</code>
