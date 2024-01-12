function hello(parametro) {
  const world = "World";
  if (typeof parametro === "string") {
    return `Hello, ${parametro}!`;
  } else {
    return `Hello, ${world}!`;
  }
}

console.log(hello(1));
