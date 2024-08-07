var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]

tabla = document.getElementById('cuerpo-tabla')

var formulario = document.getElementById('formulario')

var button_add_task = document.getElementsByTagName('button')[0]
button_add_task.addEventListener('click', function(){
    formulario.style.display = 'block'
})


console.log(formulario.childNodes)
var form = formulario.childNodes[1]
console.log(form)
var button_add = form.childNodes[3].childNodes[1]
console.log(button_add)

button_add.addEventListener('click', function(){
    tareas.push(
        {tarea: document.getElementById('nuevaTarea').value.trim()})
    formulario.style.display = 'none'
    document.getElementById('nuevaTarea').value = ''
    renderTasks()
})

document.addEventListener('DOMContentLoaded', ()=> {
    renderTasks()
})


function renderTasks(){
    tabla.innerHTML = ''
    tareas.forEach((tarea, index) => {
        var fila = document.createElement("tr")
        var columnaTarea = document.createElement("td")
        var columnaFinalizar = document.createElement("td")
        var boton = document.createElement('button')
        boton.textContent = "Finalizar"
        boton.setAttribute("class", "btn btn-danger")
        boton.onclick = () => eliminarTarea(index)
        columnaFinalizar.appendChild(boton)
        columnaTarea.textContent = tarea.tarea
        fila.appendChild(columnaTarea)
        fila.appendChild(columnaFinalizar)
        tabla.append(fila)
    })
}

function eliminarTarea(indice){
    tareas = tareas.filter((tarea, index) => index !== indice )
    renderTasks()
}



// for(let i=0; i < tareas.length;i++){
//     var fila = document.createElement("tr")
//     var columnaTarea = document.createElement("td")
//     var columnaFinalizar = document.createElement("td")
//     var boton = document.createElement('button')
//     boton.textContent = "Finalizar"
//     boton.setAttribute("class", "btn btn-danger")
//     boton.onclick = () => remove
//     columnaFinalizar.appendChild(boton)
//     columnaTarea.textContent = tareas[i].tarea
//     fila.appendChild(columnaTarea)
//     fila.appendChild(columnaFinalizar)
//     tabla.append(fila)
// }





