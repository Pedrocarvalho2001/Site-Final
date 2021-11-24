//Banner-1

var entidade = document.getElementById('imagem1');
var fator_lupa = 1.1;

entidade.onmouseover = function () { this.style.width = (this.clientWidth * fator_lupa) + "px"; };
entidade.onmouseout = function () { this.style.width = (this.clientWidth / fator_lupa) + "px"; };

//Banner-2

var entidade = document.getElementById('imagem2');
var fator_lupa = 1.1;

entidade.onmouseover = function () { this.style.width = (this.clientWidth * fator_lupa) + "px"; };
entidade.onmouseout = function () { this.style.width = (this.clientWidth / fator_lupa) + "px"; };

//Banner-3

var entidade = document.getElementById('imagem3');
var fator_lupa = 1.1;

entidade.onmouseover = function () { this.style.width = (this.clientWidth * fator_lupa) + "px"; };
entidade.onmouseout = function () { this.style.width = (this.clientWidth / fator_lupa) + "px"; };


//Botões

var teste = function () {
    alert('faça o login Antes de efetuar essa compra');
  }
  
  
  function submitButtonStyle(_this) {
    _this.style.backgroundColor = "green";
  }
  
  function replaceword(that, word, oword) {
      that.textContent = that.textContent == oword ? word : oword;
  }

  $(document).ready(function(){
    $("button").hover(function(){
      $(this).css("background-color", "green");
      }, function(){
      $(this).css("background-color", "black");
    });
  });
  
  
  $(document).ready(function(){
    $(".botao").hover(function(){
      $(this).css("background-color", "blue");
      }, function(){
      $(this).css("background-color", "black");
    });
  });