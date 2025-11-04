
function descargarArchivo(nombre: string, tiempo: number): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`${nombre} descargado`), tiempo)
  );
}

const d1 = descargarArchivo("Archivo1", 3000);
const d2 = descargarArchivo("Archivo2", 5000);
const d3 = descargarArchivo("Archivo3", 2000);

Promise.race([d1, d2, d3]).then((res) => console.log("X", res, "fue el primero"));
Promise.all([d1, d2, d3]).then(() =>
  console.log("X", "Todas las descargas completadas")
);
