// ADICIONA A FUNÇÃO DE CLICK NAS IMAGENS DA PÁGINA INICIAL PARA NAVEGAÇÃO

document.getElementById("imgcontatos").onclick = function() {
  var estilo = document.getElementById('estilopa');
  estilo.setAttribute('href', '../Meus css/css pág contatos.css');
};

document.getElementById("imghome").onclick = function()
{
  var estilo = document.getElementById('estilopa');
  estilo.setAttribute('href', '../Meus css/css pág inicial.css');
};

document.getElementById("imgprojetos").onclick = function()
{
  var estilo = document.getElementById('estilopa');
  estilo.setAttribute('href', '../Meus css/css pág projetos.css');
};

document.getElementById("imghabilidades").onclick = function()
{
  var estilo = document.getElementById('estilopa');
  estilo.setAttribute('href', '../Meus css/css pág habilidades.css');
};





function trocar(page)
{
fetch(page)
.then(Response => Response.text())
.then(data => { document.getElementById('content').innerHTML = data;})

.catch(error => console.error('erro ao carregar o conteudo:', error));
}

document.getElementById('home1').onclick = function() { trocar('Página inicial.html'); };
document.getElementById('habilidades1').onclick = function() { trocar('Habilidades.html'); };
document.getElementById('projetos1').onclick = function() { trocar('Projetos.html'); };
document.getElementById('contatos1').onclick = function() { trocar('Contatos.html'); };