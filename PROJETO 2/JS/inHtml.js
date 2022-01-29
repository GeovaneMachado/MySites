
/**
 * DOM - Document Object Model
 * window = janela
 * document = documento html na pagina
 *  
 */
function MudaCor(){
    function color(){
        if(document.body.style.backgroundColor == 'red'){
            return true
        }
        else{
            return false
        }
    }
    var buton = document.body;
    if(color()){ 
        buton.style.transition = '2s';
        buton.style.backgroundColor = 'white'
    }
    else{
        buton.style.transition = '2s';
        buton.style.backgroundColor = 'red';
    }
}
function confereSenha(){
    var senha = document.getElementById("SenhaErrada");
    senha.style.display = 'none';
    if(Color()){
        senha.style.display = 'block';
    }
    else{senha.style.display = 'none';}
}
var senha = document.getElementById("senha");
senha.addEventListener('click', confereSenha);
login = {
    senha: 'senhaqualquer',
    email: 'geovanemachado9@gmail.com'
}