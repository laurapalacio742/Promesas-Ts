const pedido1 = procesarPedido();
const pedido2 = procesarPedido();
const pedido3 = procesarPedido();

Promise.all([pedido1, pedido2, pedido3])
  .then(() => console.log("✅ Todos los pedidos completados"))
  .catch(() => console.log("❌ Uno de los pedidos falló"));
