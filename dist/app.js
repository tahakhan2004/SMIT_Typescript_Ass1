"use strict";
let table = document.getElementById("table");
let thead = table.createTHead();
let tbody = table.createTBody();
let hrow = thead.insertRow(-1);
let cell = hrow.insertCell(-1);
let cell2 = hrow.insertCell(1);
let cell3 = hrow.insertCell(2);
cell.innerHTML = "ID";
cell2.innerHTML = "Title";
cell3.innerHTML = "Price";
fetch("https://fakestoreapi.com/products")
    .then((res) => {
    // console.log(res);
    return res.json();
}).then((dataobj) => {
    // console.log(dataobj);
    dataobj.map((val) => {
        console.log(val);
        let brow = tbody.insertRow(-1);
        let celld = brow.insertCell(-1);
        celld.innerHTML = val.id;
        let celld2 = brow.insertCell(1);
        celld2.innerText = val.title;
        let celld3 = brow.insertCell(2);
        celld3.innerText = `$${val.price}`;
    });
});
// class ModuleTable {
//   table: HTMLTableElement;
//   private thead: HTMLTableSectionElement;
//   private tbody: HTMLTableSectionElement;
//   constructor() {
//     this.table = document.createElement('table');
//     this.thead = <HTMLTableSectionElement> this.table.createTHead();
//     this.tbody = <HTMLTableSectionElement> this.table.createTBody();
//     var hrow = <HTMLTableRowElement> this.table.tHead.insertRow(0);
//     var cell = hrow.insertCell(0);
//     cell.innerHTML = "Module ID";
//   }
// }
//# sourceMappingURL=app.js.map