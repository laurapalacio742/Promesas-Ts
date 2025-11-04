function tomarPedido(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve("📦 Pedido recibido"), 1000)
  );
}

function prepararPedido(): Promise<string> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      Math.random() < 0.3
        ? reject("⚠️ Error al preparar el pedido")
        : resolve("🍳 Pedido en preparación");
    }, 2000)
  );
}

function entregarPedido(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve("🚚 Pedido entregado al cliente"), 1500)
  );
}

tomarPedido()
  .then((r) => {
    console.log(r);
    return prepararPedido();
  })
  .then((r) => {
    console.log(r);
    return entregarPedido();
  })
  .then((r) => console.log(r))
  .catch((e) => console.log(e));
