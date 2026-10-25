/* ============================================================
   DUARTEX SOLUTIONS - CALCULADORA DE OPORTUNIDADES
   ============================================================ */
(function(window){
  "use strict";

  var cContatos = document.querySelector("#c-contatos");
  var cTicket = document.querySelector("#c-ticket");
  var cConv = document.querySelector("#c-conv");
  var cPerda = document.querySelector("#c-perda");

  function updateCalculator(){
    if (!cContatos || !cTicket || !cConv || !cPerda) return;

    var contatos = Math.max(0, parseFloat(cContatos.value) || 0);
    var ticket = Math.max(0, parseFloat(cTicket.value) || 0);
    var conv = (parseFloat(cConv.value) || 0) / 100;
    var perda = (parseFloat(cPerda.value) || 0) / 100;

    var oConv = document.querySelector("#o-conv");
    var oPerda = document.querySelector("#o-perda");
    if(oConv) oConv.textContent = cConv.value + "%";
    if(oPerda) oPerda.textContent = cPerda.value + "%";

    var perdidosMes = Math.round(contatos * perda);
    var vendasPerdidas = Math.round(perdidosMes * conv);
    var totalMes = vendasPerdidas * ticket;
    var recuperavelAno = Math.round((totalMes * 12) * 0.5);

    var rTotal = document.querySelector("#r-total");
    var rPerdidos = document.querySelector("#r-perdidos");
    var rVendas = document.querySelector("#r-vendas");
    var rAno = document.querySelector("#r-ano");

    if (rTotal) rTotal.textContent = "R$ " + totalMes.toLocaleString("pt-BR");
    if (rPerdidos) rPerdidos.textContent = perdidosMes.toLocaleString("pt-BR");
    if (rVendas) rVendas.textContent = vendasPerdidas.toLocaleString("pt-BR");
    if (rAno) rAno.textContent = "R$ " + recuperavelAno.toLocaleString("pt-BR");
  }

  function initCalculator(){
    [cContatos, cTicket, cConv, cPerda].forEach(function(input){
      if(input) input.addEventListener("input", updateCalculator);
    });
    updateCalculator();
  }

  window.DuarteXCalculator = {
    init: initCalculator,
    update: updateCalculator
  };
})(window);
