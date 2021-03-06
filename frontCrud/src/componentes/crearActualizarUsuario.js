export default function crearActualizarUsuario(url) {
    const modalUsuario = new bootstrap.Modal(document.getElementById('modalUsuario'))
    const formUsuario = document.querySelector('form')
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const prioridad = document.getElementById('prioridad')
    var opcion = ''

    btnCrear.addEventListener('click', () => {
        nombre.value = ''
        email.value = ''
        prioridad.value = ''
        modalUsuario.show()
        opcion = 'crear'
    })

    const on = (element, event, selector, handler) => {

        element.addEventListener(event, e => {
            if (e.target.closest(selector)) {
                handler(e)
            }
        })
    }

    //Procedimiento Editar
    let idForm = 0
    on(document, 'click', '.btnEditar', e => {
        const fila = e.target.parentNode.parentNode
        idForm = fila.children[0].innerHTML
        const nombreForm = fila.children[1].innerHTML
        const emailForm = fila.children[2].innerHTML
        const prioridadForm = fila.children[3].innerHTML
        nombre.value = nombreForm
        email.value = emailForm
        prioridad.value = prioridadForm
        opcion = 'editar'
        modalUsuario.show()

    })

    //Procedimiento para Crear y Editar
    formUsuario.addEventListener('submit', (e) => {
        e.preventDefault()
        if (opcion == 'crear') {
            //console.log('OPCION CREAR')
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre.value,
                    email: email.value,
                    prioridad: prioridad.value
                })
            })
                .then(response => response.json())
                .then(data => {
                    const nuevoUsuario = []
                    nuevoUsuario.push(data)
                    location.reload();
                })
        }
        if (opcion == 'editar') {
            //console.log('OPCION EDITAR')
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: idForm,
                    nombre: nombre.value,
                    email: email.value,
                    prioridad: prioridad.value
                })
            })
                .then(response => response.json())
                .then(response => location.reload())
        }
        modalUsuario.hide()
    })
}

