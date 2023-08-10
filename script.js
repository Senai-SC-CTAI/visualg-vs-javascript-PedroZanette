// Função para verificar se o usuário e a senha estão corretos
function verif(){
    // Atribuição de variaveis 
    var usuario = (document.getElementById("username").value)
    var password = (document.getElementById("senha").value)
    var resultado = 0
    // Começo da parte das condições
    // Se a semha estiver certo e o usuário certo o login será efetuado
    if (password == "123" && usuario == "admin"){
        resultado = "Login efetuado!"
    // Se a senha estiver errada e o usuário certo o login irá falhar e mostrara o motivo do erro.
    }else if (password != "123" && usuario == "admin") {
        resultado = "Login falhou! Senha incorreta."
            alert(resultado)
    // Se a senha estiver correta e o usuário errado o login irá falhar e mostrara o motivo do erro.
    }else if (password == "123" && usuario != "admin") {
        resultado = "Login falhou! Usuário incorreto."
            alert(resultado)
    // Se a senha estiver errada e o usuário errado o login irá falhar e mostrara o motivo do erro. 
    }else {
        resultado = "Login falhou! Senha e Usuário incorretos."
            alert(resultado)
     } 
    //Fim das condições
document.getElementById("resultado").innerHTML = resultado
}
