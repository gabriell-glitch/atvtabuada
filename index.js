console.log("deseja fazer um tabuada de qual numero?");
process.stdin.on("data", function (data) {
  let entrada = Number(data.toString().trim());
  if (entrada === "sair") {
    process.exit();
  } else if (Number(entrada)) {
    console.log(entrada + " * 1 = " + entrada * 1);
    console.log(entrada + " * 2 = " + entrada * 2);
    console.log(entrada + " * 3 = " + entrada * 3);
    console.log(entrada + " * 4 = " + entrada * 4);
    console.log(entrada + " * 5 = " + entrada * 5);
    console.log(entrada + " * 6 = " + entrada * 6);
    console.log(entrada + " * 7 = " + entrada * 7);
    console.log(entrada + " * 8 = " + entrada * 8);
    console.log(entrada + " * 9 = " + entrada * 9);
    console.log(entrada + " * 10  = " + entrada * 10);
    console.log(
      'para fazer outra digite o numero, para deixar o programa digite "sair"'
    );
  } else {
    console.log("digite um numero valido");
  }
});
