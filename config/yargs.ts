import yargs from "yargs";

export const argv = yargs(process.argv.slice(2))
  .options({
    base: {
      type: "number",
      demandOption: true,
      alias: "b",
    },
    mostrar: {
      type: "boolean",
      alias: "m",
      default: false,
      demandOption: true,
    },
    limite: { type: "number", alias: "l", default: 10 },
    debug: { type: "boolean", alias: "d", default: false },
  })
  .check((argv) => {
    if (isNaN(argv.base) || isNaN(argv.limite)) {
      throw "Tiene que ser un número";
    } else {
      return true;
    }
  })
  .parseSync();
