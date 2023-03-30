let table: HTMLTableElement = <HTMLTableElement> document.getElementById("table");
let thead: HTMLTableSectionElement = <HTMLTableSectionElement> table.createTHead();
let tbody: HTMLTableSectionElement = <HTMLTableSectionElement> table.createTBody();
let hrow = thead.insertRow(-1);
let cell = hrow.insertCell(-1);
let cell2 = hrow.insertCell(1);
let cell3 = hrow.insertCell(2);
cell.innerHTML = "ID";
cell2.innerHTML = "Title";
cell3.innerHTML = "Price"
// let brow = tbody.insertRow(0);
// let celld = brow.insertCell(0);
// let celld2 = brow.insertCell(1);
// celld.innerHTML = "" 


type Major = {
    id : number;
    price: number;
    title: string;
    desc: string
}

fetch("https://fakestoreapi.com/products")
.then((res)=>{
  // console.log(res);
  return res.json()
}).then((dataobj)=>{
  // console.log(dataobj);
  dataobj.map((val:any)=>{
    console.log(val);
    let brow = tbody.insertRow(-1);
    let celld= brow.insertCell(-1);
    celld.innerHTML = val.id

    let celld2 = brow.insertCell(1);
    celld2.innerText = val.title;
    let celld3 = brow.insertCell(2);
    celld3.innerText = `$${val.price}`;
     
  })


})