var teste = function () {
  alert('faça o login Antes de efetuar essa compra');
}


function submitButtonStyle(_this) {
  _this.style.backgroundColor = "blue";
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

