var mainContainer = document.getElementById("mainContainer");
let allCol = [];
arrayCells=[];

for (var i = 0;i<12;i++){
    let newCol = document.createElement("div");
    newCol.classList.add("columns");
    allCol[i]=newCol;
    mainContainer.appendChild(newCol);
}

for (var i=0;i<12;i++){
    for(var j=0;j<6;j++){
        let newCell = document.createElement("div");
        newCell.classList.add("cells");
        allCol[i].appendChild(newCell);
        arrayCells.push(newCell);
    }
}

var myHeader = new Headers({
    'accept':'audio/mpeg',
    'cache-controle':'private',
});

var myInit = {  method: 'GET',
                headers: myHeader,
                mode: 'cors',
                cache:'default' };

var AudCtx = new AudioContext();

arrayBuffers=[];
var dd;

fetch('./audio/bop_2.mp3',myInit).then(function(response){
    console.log(response);
    return response;
})
.then(function(response){
    return response.arrayBuffer();
})
.then(function(buffer){
    console.log(buffer);
    return AudCtx.decodeAudioData(buffer);
})
.then(function(decodedData){
    //arrayBuffers.push(decodedData);
    dd=decodedData;
    console.log(dd);
})

arraySources=[];
var clickCount=0;
/*
$("div.cells").bind("mousedown click",function(){
    arraySources[clickCount]=AudCtx.createBufferSource();
    arraySources[clickCount].connect(AudCtx.destination);
    arraySources[clickCount].buffer = dd;
    arraySources[clickCount].start(0);
    clickCount++;
    $(this).toggleClass("cellsPoped");
})*/
/*
$(document).mousedown(function(){
    $("div.cells").mousemove(function(){
        arraySources[clickCount]=AudCtx.createBufferSource();
        arraySources[clickCount].connect(AudCtx.destination);
        arraySources[clickCount].buffer = dd;
        arraySources[clickCount].start(0);
        clickCount++;
        $(this).removeClass("cells");
        $(this).addClass("cellsPoped");
    })
})*/
var isPopin;
$(document).mousedown(function(){
    isPopin = true;
})

$("div.cells").bind("mousemove click",function popUp(e){
    if(isPopin && $(e.target).hasClass("cells")){
        console.log("hahaha");
        arraySources[clickCount]=AudCtx.createBufferSource();
        arraySources[clickCount].connect(AudCtx.destination);
        arraySources[clickCount].buffer = dd;
        arraySources[clickCount].start(0);
        clickCount++;
        $(this).removeClass("cells");
        $(this).addClass("cellsPoped");
    }
})

$(document).mouseup(function(){
    console.log("upppp");
    isPopin = false;
})