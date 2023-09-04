import { crearArchivo } from "./helpers/multiplicar";
import { log } from "console";
import { argv } from "./config/yargs";

argv.debug && log("Las variables son", argv.base, argv.mostrar, argv.limite);
crearArchivo(argv.base, argv.mostrar, argv.limite).then((msj) => log(msj));
