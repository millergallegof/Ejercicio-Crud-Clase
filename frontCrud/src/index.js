import listView from './componentes/listView.js'
import crearActualizarUsuario from './componentes/crearActualizarUsuario.js'
import eliminarUsuario from './componentes/eliminarUsuario.js';
import AppConfig from './AppConfig.js'
import buscarPorEmail from './componentes/buscarPorEmail.js'


listView(AppConfig.urlBackend);
crearActualizarUsuario(AppConfig.urlBackend);
eliminarUsuario(AppConfig.urlBackend)
buscarPorEmail(AppConfig.urlBackend)
