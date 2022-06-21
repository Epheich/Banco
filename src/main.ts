import { obtenerGestores } from './gestores.js';
import { mostrarGestores } from './mostrar';

async function main() {
    const gestores = await obtenerGestores();
    mostrarGestores(gestores);
}

main();

