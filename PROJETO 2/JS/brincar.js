function tabuada(){
    let num = document.getElementById("txtn");
    let limite = number(document.getElementById("ate"));
    let tab = document.getElementById("seltab");
    let n = number(num.value);
    let lim = number(limite.value);
    tab.innerHTML = '';
    for(var i = 0; i<=lim; i++)
    {
        let item = document.createElement('option');
        item.text = '${n} x ${i} = ${n*i}';
        tab.appendChild(item);
    }

}