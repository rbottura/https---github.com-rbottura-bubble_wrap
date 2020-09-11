var mainContainer = document.getElementById("mainContainer");
let allCol = [];

for (var i = 0;i<12;i++){
    let newCol = document.createElement("div");
    newCol.classList.add("columns");
    allCol[i]=newCol;
    mainContainer.appendChild(newCol);
}