
$(function fullwindowpopup() { /* chama funcao abrir nova aba*/
    $(".botaorastreio").click(function () { 
      var numrastreio = document.getElementById("BuscaCod").value; /* ao clicar no botao botaorastreio chama a funcao buscacodigo*/ 
      return window.open(
        "https://www.linkcorreios.com.br/" + numrastreio, /* busca site do rastreio + numero do rastreio */
      );
    });
    $(".dropdown").hover( /* funcao estilo para fazer abertura suave de janela*/
      function () {
        $(".dropdown-menu", this).stop(true, true).fadeIn("slow");
        $(this).toggleClass("open");
        $("b", this).toggleClass("caret caret-up");
      },
      function () {
        $(".dropdown-menu", this).stop(true, true).fadeOut("slow");
        $(this).toggleClass("open");
        $("b", this).toggleClass("caret caret-up");
      }
    );
  });
  