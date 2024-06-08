//iniciando o JS 
 // Aula 9 e 10  - DOM - Document Object Model
var MFunções = document.getElementById("interaja")
MFunções.addEventListener('click', clicar)
MFunções.addEventListener('mouseenter', Mouse)
MFunções.addEventListener('mouseout', nmouse)
  
function clicar()
{
  var clique = document.getElementById("interaja")
  clique.innerText = "interagiu" 
}
 
 function Mouse() 
{
  var passou = document.getElementById("interaja")
  passou.innerText = "o mouse esta ativo"
}
 function nmouse()
{
 var saiu = document.getElementById("interaja")
 saiu.innerText = "interaja"  
} 
// Aula 11 - Condições (if, else)

/*Aqui, estamos selecionando o botão com o id "botao" e adicionando um ouvinte de evento de clique a ele.
Quando o botão é clicado, a função clicar será chamada.*/
  var botao = document.getElementById("botao");
  botao.addEventListener('click', clicar2);

  function clicar2()
{
  var pergunta = document.getElementById("pergunta").value;
  var resposta = document.getElementById("resposta");
// Atividade Pais
     if (pergunta === "Brasil")
    {
      resposta.innerHTML = `O cara é do ${pergunta} tmlc tmj`;
    } 
     else
    {
      resposta.innerHTML = "O cara é estrangeiro slk";
    }
}
// Aula 12 - Conferir idade
document.getElementById('idadebt').addEventListener('click', conferir);
function conferir()
{
var resposta2 = document.getElementById("resposta2");
var idade = parseInt(document.getElementById("idade").value)
//
if (idade < 16) 
{
resposta2.innerHTML = "não vota n";
}
else if (idade < 18 || idade > 65)
{ 
resposta2.innerHTML = "voto opcional";  
}
else
{
resposta2.innerHTML = "Voto obrigatorio";
}}
// Atividadde Horas
document.getElementById('horasbt').addEventListener('click', olhar)
function olhar()
{
var resposta3 = document.getElementById('resposta3')
var horas = parseInt(document.getElementById('horas').value)

if (horas >= 0 && horas < 6)
{
resposta3.innerHTML = "é de madrugada";
}
else if (horas >= 6 && horas < 11)
{
resposta3.innerHTML = "é de manhã";
}
else if (horas >11 && horas <= 18)
{
resposta3.innerHTML = "é de tarde";  
}
else if (horas >18 )
{
  resposta3.innerHTML = "é de noite"
}}

// ATIVIDADE 1 - MODULO D
function carregar()
{
 var div1 = document.getElementById('div1js')
 var img1 = document.getElementById('imagen')
 var dataatual = new Date()
 var horaatual = dataatual.getHours()
 div1.innerHTML = `Agora são ${horaatual} horas`

if (horaatual >= 0 && horaatual <12)
{
img1.src = '../imagens/store-7274767_640.webp'
document.body.style.background = '#004500'
}
else if (horaatual >= 12 && horaatual <18)
{
img1.src = '../imagens/pixel-7272046_640.webp'  
document.body.style.background = '#422576'
}
else 
{
img1.src = '../imagens/pixel-art-7280241_640.webp'
document.body.style.background = '#223370'  
}}

// ATIVIDADE 2 - MODULO D

function verificar2() {
  var dataagora = new Date();
  var ano = dataagora.getFullYear();
  var anor = document.getElementById('divatv21').value;
  var resultado = document.getElementById('div22js');

  if (ano == 0 || anor > ano)
  {
  window.alert('Ano não reconhecido');
  } 
  else
  {
  var sexo = document.getElementsByName('radiosex');
  var idade = ano - Number(anor);
  var genero = ''
  var imgminha = document.createElement('img')
  imgminha.setAttribute('id', 'foto')
  if (sexo[0].checked)
  {
    genero = 'Homem'
  if (idade >= 0 && idade < 10)
{
  imgminha.setAttribute('src', '../imagens/pixel-art-7280230_640.webp')   
}
    else if  (idade <=21)
{
  imgminha.setAttribute('src', '')  
}
    else if (idade <50)
{
  imgminha.setAttribute('src', '')
}
    else
{
  imgminha.setAttribute('src', '')
}

  }
  else if (sexo[1].checked)
  {
    genero = 'Mulher'
  if (idade >= 0 && idade < 10)
{
  imgminha.setAttribute('src', '')
}
   else if  (idade <=21)
{
  imgminha.setAttribute('src', '')
}
  else if (idade <50)
{
  imgminha.setAttributte('src', '')
}
  else
{
  imgminha.setAttribute('src', '')
}

  }
  resultado.innerText = `È um(a) ${genero} de ${idade} anos`
  resultado.appendChild(imgminha)
 }
}

// MODULO E - ESTRUTURAS DE REPETIÇÃO EM JS

//TESTE LOGICO NO COMECO
function repetir() {
    var dizai = 1
    var moc = document.getElementById('moc')
    var nmrrep = document.getElementById('nmrrep').value
    var messagensmoc = document.getElementById('textorepetido').value;
    var resposta = ''

    do {
        resposta += messagensmoc + ' '
        dizai++;
    } while (dizai <= nmrrep)
    moc.innerHTML = resposta
}

// ATIVDADE MODULO E

function caucular()
{
var inicio = Number(document.getElementById('inicio').value)
var fim = Number(document.getElementById('fim').value)
var passo = Number(document.getElementById('passo').value)
var resposta = document.getElementById('resp')

if (inicio.value === "" || fim.value === "" || passo.value === "" )
{resposta.innerHTML = 'informações invalidas'; return }

resposta.innerHTML = ''

if(passo <= 0)
{
   alert('Invalido, considerando valor 1'); passo = 1
}

if (inicio < fim)
{
for(var contador = inicio; contador <= fim; contador += passo)
{resposta.innerHTML += `${contador} `}}

else
{
 for(var contador = inicio; contador >= fim; contador -= passo)
    {resposta.innerHTML += `${contador} `}}
}

// ATIVIDADE 3 DO MODULO E

function GerarTabuada() 
{
  var Nrecebido = document.getElementById('tabuadaN').value;
  var tabu = document.getElementById('select')
  const multiplicador = 1

  // Verifica se a entrada é vazia
  if (Nrecebido === "" || Nrecebido == NaN)
{
  alert('Digite qualquer número, por favor')
  return;
}
  Nrecebido = Number(Nrecebido)

  // Limpar a tabuada antes da outra
  tabu.innerHTML = ''

  // while = enquanto (loop)
  while (multiplicador <= 10) 
{
  var tabuadaCriar = document.createElement('option')
  tabuadaCriar.innerHTML = `${Nrecebido} X ${multiplicador} = ${Nrecebido * multiplicador}`;
  tabu.appendChild(tabuadaCriar)
  multiplicador++
}
}
  //Funções com parametros 
 var NúmeroRecebido = Number(document.getElementById("NúmeroR").value)
 function ConferirNúmero (NúmeroRecebido)
{
 if(NúmeroRecebido % 2 == 0 )
  {return `par`}

 else
  {return `impar`}
  document.getElementById('eu').innerHTML = `O número recebido é ${NúmeroRecebido}`
}

// Atividade final do curso básico de JS

// Variavel em que os números que o usúario adicionou vão ser guardadas
var Nrecebidos = []

// Oque vai aparecer dentro do select
var RespSelect = document.getElementById("selectatvf")

//Número que o usuario coloca no input
var NúmeroR = document.getElementById('NúmeroR')

// Ao clicar no botão adicionar a função "Adiconar" é ativada 
function Adicionar()

// Oque a função adicionar faz:
{
  var Nrecebido = NúmeroR.value.trim()


  if ( Nrecebido === '' || isNaN(Number(Nrecebido)) )
      
  {
    alert('Digite um número valido')
    return
  }

  var nmr = Number(Nrecebido)

  if (Nrecebidos.includes(nmr))
  {
    alert('Este número ja foi incluido')
    return;
  }

  Nrecebidos.push(nmr)
 var resposta = document.getElementById('result')
 
  var novoElemento = document.createElement('option')
  novoElemento.text = `O valor ${nmr} foi adicionado`
  RespSelect.add(novoElemento)
  resposta.innerHTML= ''
  NúmeroR.value = ''
}

function Analisar()
{
  var Nadicionados = document.getElementById('NúmeroR').value 
  var resposta = document.getElementById('result')
  if( RespSelect.options.length === 0 )
  {
  alert ('Digite ao menos um valor')
  return
  }
  else
  {
  
var copiaNrecebidos = Nrecebidos.slice().sort((a, b) => a - b)
var menor = copiaNrecebidos [0]
var maior = copiaNrecebidos[copiaNrecebidos.length -1]
var soma = 0
for (var somando = 0; somando<copiaNrecebidos.length; somando++)
{
 soma += copiaNrecebidos [somando]
}
var media = soma / RespSelect.length

  resposta.innerHTML =

  `
  Os números avaliados tiveram as seguintes estastisicas:
  <br>
  Ao todo foram ${RespSelect.length} números adicionados
  <br>
  O maior número foi: ${maior} 
  <br>
  O menor número foi: ${menor}
  <br>
  A soma dos números é: ${soma}
  <br>
  A média entre os números é: ${media}
  <br>
  
  `
  }
  
}

function Limpar()  
{
 Nrecebidos = []
 RespSelect.innerHTML = ''
}