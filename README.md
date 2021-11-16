# expressTodo
<h1>I save for myself. My first express study.</h1>

important notes for myself
<ul>
  
<li>app.use(express.static(__dirname))  -> i can go external js file with this code (otherwise client side cant work external js of html file)</li>
<li>app.use(express.urlencoded({ extended: true }));  -> i can get data post method with form like php</li>
  <li>res.redirect("/") -> i go to main page after post with ths.</li>
 <ul>
------------------------------------

<h2>Client Side </h2>
I get datas with asyn await but i lived comma problems between objects. So I used .join("") for solving this problem.


```html

async function getData() {
  const data = await fetch("http://localhost:8000/api"); 
  const result = await data.json(); 
  console.log(result[0])
  document.querySelector(".content").innerHTML =result.map(item => (`
    <div class="row"> <br />  
    <div class="col1">${item.goal}</div>   
    <div class="col2">${item.date} </div> 
    <div class="col3">${item.finished}</div> 
  </div>`  
  )).join(""); 
} 
 
```

