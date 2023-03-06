// Exercício 2:

console.log("Exercício 2:", exercicio2(21)); // Exemplo 2: Informando valor válido
console.log("Exercício 2:", exercicio2(22)); // Exemplo 1: Informando valor inválido

function exercicio2(num) {
  const x = num;

  let a = 0;
  let b = 1;
  let i = 2;
  let pertenceAoFibonacci = false;

  if (x === 0 || x === 1) pertenceAoFibonacci = true;
  else {
    while (b < x) {
      const temp = a + b;
      a = b;
      b = temp;
      i++;
      if (b === x) {
        pertenceAoFibonacci = true;
        break;
      }
    }
  }

  if (pertenceAoFibonacci) {
    return `${x} pertence à sequência de Fibonacci e é o ${i}º termo.`;
  } else {
    return `${x} não pertence à sequência de Fibonacci.`;
  }
}

// Exercício 3:

console.log("Exercício 3:", exercicio3());

function exercicio3() {
  const fs = require("fs");

  const data = fs.readFileSync("dados.json");
  const faturamentoDiario = JSON.parse(data);

  let totalFaturamento = 0;
  let diasComFaturamento = 0;
  let menorFaturamento = null;
  let maiorFaturamento = null;

  faturamentoDiario.forEach((dia) => {
    if (dia.valor > 0) {
      totalFaturamento += dia.valor;
      diasComFaturamento++;
      if (menorFaturamento === null || dia.valor < menorFaturamento) {
        menorFaturamento = dia.valor;
      }
      if (maiorFaturamento === null || dia.valor > maiorFaturamento) {
        maiorFaturamento = dia.valor;
      }
    }
  });

  const mediaFaturamento = totalFaturamento / diasComFaturamento;

  let diasAcimaDaMedia = 0;
  faturamentoDiario.forEach((dia) => {
    if (dia.valor > mediaFaturamento) {
      diasAcimaDaMedia++;
    }
  });

  return `
  Menor faturamento diário: ${menorFaturamento.toFixed(2)}
  Maior faturamento diário: ${maiorFaturamento.toFixed(2)}
  Número de dias com faturamento acima da média: ${diasAcimaDaMedia}
  `;
}

// Exercício 4:

console.log("Exercício 4: ", exercicio4());

function exercicio4() {
  const faturamentoMensalPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const valoresFaturamento = Object.values(faturamentoMensalPorEstado);
  const totalFaturamento = valoresFaturamento.reduce(
    (acc, curr) => acc + curr,
    0
  );

  const percentuaisPorEstado = {};
  for (const estado in faturamentoMensalPorEstado) {
    percentuaisPorEstado[estado] =
      ((faturamentoMensalPorEstado[estado] / totalFaturamento) * 100).toFixed(
        0
      ) + "%";
  }

  return percentuaisPorEstado;
}

// Exercício 5:

console.log("Exercício 5: ", exercicio5("Frederico Nogueira"))

function exercicio5(string) {
  let str = string;
  let strAoContrario = "";

  for (let i = str.length - 1; i >= 0; i--) {
    strAoContrario += str[i];
  }

  return strAoContrario
}
