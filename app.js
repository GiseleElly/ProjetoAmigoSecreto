alert('Bem-vindo ao jogo do amigo secreto!');

let amigoSecreto = [];
let sorteados = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Digite um nome para o sorteio!');
    return;
  }

  if (amigoSecreto.includes(nome)) {
    alert('Este nome já foi adicionado!');
    input.value = '';
    return;
  }

  amigoSecreto.push(nome);
  atualizarLista();
  input.value = '';
}

function atualizarLista() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = '';

  amigoSecreto.forEach((nome) => {
    const li = document.createElement('li');
    li.textContent = nome;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  const resultado = document.getElementById('resultado');

  if (amigoSecreto.length === 0) {
    alert('Não há nomes cadastrados para o sorteio. Por favor, adicione nomes antes de sortear!');
    return;
  }
// rever linhas. Não exibir alert.
  if (sorteados.length === amigoSecreto.length) {
    alert('Todos os amigos já foram sorteados! Redirecionando para nova página.');
    window.location.href = 'cadastro.html';
    return;
  }

  let nomeSorteado;
  do {
    const indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length);
    nomeSorteado = amigoSecreto[indiceAleatorio];
  } while (sorteados.includes(nomeSorteado));

  sorteados.push(nomeSorteado);
  resultado.innerHTML = `<li> Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}
