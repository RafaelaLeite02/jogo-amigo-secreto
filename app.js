let amigos = [];

function adicionarAmigo() {

  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }
  amigos.push(nome);

  let lista = document.getElementById("listaAmigos");
  let li = document.createElement("li");
  li.textContent = nome;
  lista.appendChild(li);

  input.value = "";
}


function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo para sortear.");
    return;
  }

  let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}
