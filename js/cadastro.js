/*let form = document.getElementById("form-group");
let subimt = document.getElementById("btn mt-4");

// Evento que dispara as validações
subimt.addEventListener('click', function(e){

    e.preventDefault;
    console.log('Funcionou');
});*/

//Serve para logar, é uma validação com senha, 
//Pega os campos digitados, compara e se for verdadeiro 
// é login com sucesso, se tiver um falso, mostra invalido
function logar(){

    var login = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    if(login == "admin@admin.com" && senha == "123456"){
        alert('Login com sucesso');
    }else{
        alert('Usuario ou senha invalido');
    }
}	
