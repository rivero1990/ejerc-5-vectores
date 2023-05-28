const numero = [1]; 

for (let i = 2; i <= 30; i++) {
  numero.push(i);
}


for (let i = 1; i < numero.length; i += 2) {
    numero[i] *= 2;
}

console.log(numero);