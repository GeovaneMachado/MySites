function insert(num){
    var numero = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = numero + num;
}
clean = () => document.getElementById('Resultado').innerHTML = "";
back = () => {
    var result = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = result.substring(0, result.length -1) 
}

resultado = () => {
    var resultado = document.getElementById("Resultado").innerHTML;
    if(resultado){
        document.getElementById("Resultado").innerHTML = eval(resultado)
    }
    else{
        alert("NADA PARA CALCULAR")
    }
}

function keyPressed(evt){
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    return String.fromCharCode(key); 
}

document.onkeypress = function(evt) {
    var str = keyPressed(evt);
    const tecla = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '/', '*']
    for(let i = 0; i < tecla.length; i++) 
        if(str == tecla[i]) 
            insert(str);
    if(str == "="){
        resultado();
    }
    else if(str == "c") clean();
    else if(str == "<") back();
};