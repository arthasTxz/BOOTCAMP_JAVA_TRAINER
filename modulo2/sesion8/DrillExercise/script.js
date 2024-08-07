
clientes = [
    {
        nombre: 'Juan',
        identificador: '1',
        clave: '12345',
        saldo: 1000
    },
    {
        nombre: 'John',
        identificador: '2',
        clave: '678910',
        saldo: 2000
    },
    {
        nombre: 'Ester',
        identificador: '3',
        clave: '11121314',
        saldo: 3000
    }
]

var identificacion = prompt("Ingrese su identificacion")
var password = prompt("Ingrese su contrasena")
var clienteRegistrado = null

for (x of clientes){
    if (x.identificador === identificacion && x.clave === password){
        clienteRegistrado = x
        console.log("entra")
        console.log(clienteRegistrado)
        alert(`Bienvenido ${clienteRegistrado.nombre}`)
        
        do {
            var opcion = parseInt(prompt("Seleccione que desea hacer: \n 1.-Ver saldo \n 2.-Realizar giro \n 3.-Realizar deposito \n 4.-Salir"))
            switch (opcion) {
                case 1:
                    alert(clienteRegistrado.saldo)
                    break
                case 2:
                    giro = prompt(`Su saldo actual es: ${clienteRegistrado.saldo} \n Ingrese el monto que desea girar`)
                    clienteRegistrado.saldo -= parseInt(giro)
                    console.log(clienteRegistrado)
                    alert(`Deposito realizado. Su nuevo saldo es ${clienteRegistrado.saldo}`)
                    break
                case 3:
                    deposito = prompt(`Su saldo actual es: ${clienteRegistrado.saldo} \n Ingrese el monto que desea depositar`)
                    clienteRegistrado.saldo += parseInt(deposito)
                    alert(`Deposito realizado. Su nuevo saldo es ${clienteRegistrado.saldo}`)
                    break
                case 4:
                    break
            }
        }
        while(opcion !== 4)
    }
}

if (!clienteRegistrado) alert("Bienvenido a Banca en Linea")



