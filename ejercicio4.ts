async function procesarPedido(): Promise<void> {
  console.log("[Inicio del proceso]");
  try {
    console.log(await tomarPedido());
    console.log(await prepararPedido());
    console.log(await entregarPedido());
    console.log("[Fin del proceso]");
  } catch (error) {
    console.log("❌", error);
  }
}

procesarPedido();
