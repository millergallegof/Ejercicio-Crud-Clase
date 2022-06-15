export default function listView(url) {
    const contenedor = document.querySelector('tbody')
    let resultados = ''

    //funcion para mostrar los resultados
    const mostrar = (usuarios) => {
        usuarios.forEach(usuario => {
            resultados += `<tr>
                            <td>${usuario.id}</td>
                            <td>${usuario.nombre}</td>
                            <td>${usuario.email}</td>
                            <td>${usuario.prioridad}</td>
                            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                       </tr>
                    `
        })
        contenedor.innerHTML = resultados
    }
    fetch(url)
        .then(response => response.json())
        .then(data => mostrar(data))
        .catch(error => console.log(error))
}






