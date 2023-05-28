const numero = [1]; 

for (let i = 2; i <= 30; i++) {
  numero.push(i);
}


for (let i = 0; i < numero.length; i++) {
    numero[i] += 1;
}

console.log(numero);