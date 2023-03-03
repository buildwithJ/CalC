
var equation = "";
var mode = "D";
function appendValue(x){
    equation += String(x);
    document.getElementById('item1').innerHTML += x;
}

function calculate(){
    var res = eval(equation); 
    document.getElementById('item1').innerHTML += " = "+ res;

    }   

function back(){
    if(equation.length > 0){
        var SL= equation.length-1; 
        console.log(equation);
        document.getElementById('item1').innerHTML = equation.slice(0,SL);
        equation = equation.slice(0, SL);
    } 
}

function clearscreen(){
    equation = "";
    document.getElementById('item1').innerHTML = "";
}

function switchmode(){
    if (mode == "D"){
        document.getElementById('grid').style.backgroundColor= "rgba(0,0,0,0.9)";
        for (var i = 0; i<document.getElementById('grid').childElementCount; i++ ){
        document.getElementById('grid').getElementsByTagName('div')[i].style.backgroundColor = "grey";
        document.getElementById('grid').getElementsByTagName('div')[i].style.color = "white";
        };
        document.getElementById('Mode').innerHTML= "D";
        mode = "N";
    }else{
        document.getElementById('grid').style.backgroundColor= " #66ccff";
        for (var i = 0; i<document.getElementById('grid').childElementCount; i++ ){
            document.getElementById('grid').getElementsByTagName('div')[i].style.backgroundColor = "white";
            document.getElementById('grid').getElementsByTagName('div')[i].style.color = "black";
            };
            document.getElementById('Mode').innerHTML= "N";
        mode="D";
    }
}