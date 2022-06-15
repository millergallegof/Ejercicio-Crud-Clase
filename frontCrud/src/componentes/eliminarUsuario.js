
export default function eliminarUsuario(url) {
    const on = (element, event, selector, handler) => {

        element.addEventListener(event, e => {
            if (e.target.closest(selector)) {
                handler(e)
            }
        })
    }

    //Procedimiento Borrar
    on(document, 'click', '.btnBorrar', e => {
        const fila = e.target.parentNode.parentNode
        const id = fila.firstElementChild.innerHTML
        console.log(e);
        alertify.confirm("This is a confirm dialog.",
            function () {
                fetch(url + id, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(() => location.reload())
                // alertify.success('Ok')
            },
            function () {
                alertify.error('Cancel')
            })
    })
}

