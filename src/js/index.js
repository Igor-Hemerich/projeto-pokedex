const btnAvancar = document.getElementById("btn-prox");
const btnVoltar = document.getElementById("btn-ant");
const cartoes = document.querySelectorAll(".card");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".select");
  cartaoSelecionado.classList.remove("select");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("select");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});
