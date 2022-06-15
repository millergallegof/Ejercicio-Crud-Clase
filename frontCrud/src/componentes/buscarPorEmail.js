export default async function buscarPorEmail(url) {
    const contenedor = document.querySelector('tbody')
    let resultados = ''
    const $buscador = document.getElementById("buscar");
    const $input = document.createElement("input")
    const $buscar = document.createElement("button")
    const $eliminarPorEmail = document.createElement("button")

    $input.classList.add("form-control")
    $input.setAttribute("id", "email")
    $input.setAttribute("type", "search")

    $buscar.classList.add("btn", "btn-primary")
    $buscar.setAttribute("type", "button")
    $buscar.textContent = "Buscar por Email"

    $eliminarPorEmail.classList.add("btn", "btn-danger")
    $eliminarPorEmail.setAttribute("type", "button")
    $eliminarPorEmail.textContent = "Eliminar Por email"

    $buscador.append($input, $buscar, $eliminarPorEmail)

    $input.addEventListener("change", (e) => {
        mostrarBuscado(e.target.value)
    })

    $eliminarPorEmail.addEventListener('click', (e) => {
        e.preventDefault();
        eliminarPorEmail();
    })

    const eliminarPorEmail = () => {
        console.log("eliminar email");
        let email = document.getElementById("email").value
        if (email) {
            alertify.confirm(`Esta Seguro de eliminar el usuario con el correo ${email}`,
                function () {
                    fetch(`${url}email/${email}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(() => location.reload())
                    // alertify.success('Ok')
                },
                function () {
                    alertify.error('Cancel')
                })
        }

    }



    async function mostrarBuscado(email) {
        if (!email) {
            location.reload()
        } else {
            let data = await getEmails()
            data.forEach(element => {
                if (element.email.toLowerCase() === email.toLowerCase()) {
                    resultados += `<tr>
                            <td>${element.id}</td>
                            <td>${element.nombre}</td>
                            <td>${element.email}</td>
                            <td>${element.prioridad}</td>
                            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                       </tr>
                    `
                }
            });
            contenedor.innerHTML = resultados
        }

    }




    async function getEmails() {
        try {
            let res = await fetch(url)
            return await res.json()
        }
        catch (error) {
        }

    }

}