var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")

//FUNCIONES
function boletas_pagos(){
  var opcion = prompt("Seleccione una opción \n 1.-Ver Boleta \n 2.-Pagar cuenta") 
  console.log(opcion)
  if (parseInt(opcion) === 1){
    var opcion1 = alert("Haga clic aqui para descargar su boleta.")
  }
  else if(parseInt(opcion) === 2){
    var opcion2 = alert("Usted esta siendo transferido. Espere por favor...")
  }
  else {
    alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
  }
}

function llamadas(){
    var opcion = prompt("Seleccione una opción \n 1.-Problemas con la señal \n 2.-Problemas con las llamdas") 
    console.log(opcion)
    if (parseInt(opcion) === 1 || parseInt(opcion) === 2){
        var reclamo = prompt("A continuación escriba su solicitud")
    alert(`Estimado usuario, su solicitud: '${reclamo}' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.`)
    }
    else{
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
    }
    
}

function oferta_comercial(){
    var opcion = prompt("!Mentel tiene una oferta comercial acorde a tus necesidades! \nPara conocer más información y ser asesorados personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'")
    if (opcion === 'SI'){
        alert("Un ejecutivo contactará con usted")
    }
    else if (opcion === 'NO'){
        alert("Gracias por preferir nuestros servicios")
    }
    else{
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
    }
}

function otras_consultas(){
    var consulta = prompt("A continuacion escriba su consulta")
    alert(`Estimado usuario, su consulta: '${consulta}' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.`)
}



switch (parseInt(opcion)) {
    case 1:
        boletas_pagos()
        break;

    case 2:
        llamadas()
        break;

    case 3:
        oferta_comercial()
        break;
    case 4:
        otras_consultas()
        break;

    default:
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
        break;
}
