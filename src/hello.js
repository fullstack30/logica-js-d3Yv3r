function hello(parametro, parametro2) {
  parametro = "World";
  if (typeof parametro === "string") {
    return parametro2 + parametro + "!";
  } else {
    return parametro;
  }
}

console.log(hello(1, "Hello, "));
