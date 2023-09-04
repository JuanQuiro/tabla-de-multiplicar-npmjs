# Tabla de multiplicar

Este es un proyecto de estudio que genera tablas de multiplicar y las guarda en archivos de texto.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener [Node.js](https://nodejs.org) instalado.
3. Abre una terminal en la carpeta raíz del proyecto.
4. Ejecuta el siguiente comando para instalar las dependencias:

`pnpm install`

## Uso

1. Abre una terminal en la carpeta raíz del proyecto.
2. Para generar una tabla de multiplicar, ejecuta el siguiente comando:

bash
`pnpm run dev --base [numero] --mostrar [opcional] --limite [opcional]`
Reemplaza `[numero]` por el número para el que deseas generar la tabla de multiplicar. Puedes agregar los siguientes argumentos opcionales:

- `--mostrar`: para mostrar la tabla de multiplicar en la consola.
- `--limite`: para especificar el límite de multiplicación (por defecto es 10).

Por ejemplo, para generar una tabla de multiplicar del número 5 y mostrarla en la consola, ejecuta el siguiente comando:

`pnpm run dev --base 5 --mostrar` 3. También puedes generar una tabla de multiplicar y visualizarla en una interfaz gráfica utilizando el siguiente comando:

`pnpm run visual --base [numero]`
Reemplaza `[numero]` por el número para el que deseas generar la tabla de multiplicar.

## Contribuciones

Si deseas contribuir a este proyecto, puedes abrir un pull request y estaremos encantados de revisarlo.

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).
