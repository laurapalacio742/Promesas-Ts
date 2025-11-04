
function getUsers(): Promise<string[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(["User1", "User2"]), 2000)
  );
}

function getPosts(): Promise<string[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(["Post1", "Post2"]), 3000)
  );
}

Promise.all([getUsers(), getPosts()])
  .then(() => console.log("✅ Usuarios y publicaciones cargados correctamente"))
  .catch(() => console.log("❌ Error al cargar los datos"));
