function formulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cidade = document.getElementById('cidade').value;
    var numero = document.getElementById('numero').value;
    var informacoes = document.getElementById('informações').checked;

    alert(
        'Dados Enviados:\n' +
        'Nome: ' + nome + '\n' +
        'E-mail: ' + email + '\n' +
        'Cidade: ' + cidade + '\n' +
        'Número: ' + numero + '\n' +
        'Desejo receber mais informações: ' + (informacoes ? 'Sim' : 'Não')
    );
}