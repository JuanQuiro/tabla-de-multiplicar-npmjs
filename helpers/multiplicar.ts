import { log } from "console";
import fs from "fs";

export const crearArchivo = async (
  base: number,
  mostrar: boolean,
  limite: number
): Promise<string> => {
  const tabla: string[] = [];

  for (let i = 1; i <= limite; i++) {
    const resultado = base * i;
    tabla.push(`${base} x ${i} = ${resultado}`);
  }

  const contenido = tabla.join("\n");

  await fs.promises.writeFile(`tabla-${base}.txt`, contenido);

  if (mostrar) {
    log("-------------------");
    log(`-TABLA DE ${base}--`);
    log("-------------------");
    log(contenido);
  }

  return limite === 10
    ? `Creada tabla ${base}`
    : `Creada tabla ${base} con limite ${limite}`;
};
