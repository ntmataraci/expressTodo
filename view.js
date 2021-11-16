

async function getData() {
  const data = await fetch("http://localhost:8000/api");
  const result = await data.json();
  console.log(result[0])
  document.querySelector(".content").innerHTML =result.map(item => (`
    <div class="row">
    <div class="col1">${item.goal}</div> 
    <div class="col2">${item.date} </div>
    <div class="col3">${item.finished}</div>
  </div>`
  )).join("");
}

getData()
// getData().then((res)=>res.map(item=>console.log(item)))

// const value = getData().then((res)=>res.map(item => `
//   <div>
//     <div>${item.goal}</div> 
//     <div>${item.date} </div>
//     <div>${item.finished}</div>
//   </div>`
// ));

// value.then(res=>console.log(res))

// document.querySelector(".content").innerHTML =getData().then((res)=>res.map(item => `
// <div>
//   <div>${item.goal}</div> 
//   <div>${item.date} </div>
//   <div>${item.finished}</div>
// </div>`
// ));