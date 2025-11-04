function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log("⏳ Cargando datos...");
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve("Datos cargados correctamente")
        : reject("Error al cargar los datos");
    }, 2000);
  });
}

fetchData()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
