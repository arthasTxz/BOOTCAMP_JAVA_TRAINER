$(document).ready(function() {
    $(".text-body-secondary").click(function(event) {
      // var listVerMas = $("small")
      // console.log(listVerMas)
      console.log(event.target.id)
      var idBoton = event.target.id;
      $("#detalles" + idBoton).toggle();
    });


    $(".btn-close").click(function() {
        $(".detalles").hide();
    });

  });