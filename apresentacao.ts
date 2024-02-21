let nome: string = 'Guilherme';
let matricula: number = 7799;
let estudando: boolean = true;
let mesNumero: number = 2;
let mesNome: string = '';


switch (mesNumero) {
    case 1:
        mesNome = 'Janeiro';
        break;
    case 2:
        mesNome = 'Fevereiro';
        break;
    case 7:
        mesNome = 'Julho';
        break;
    default:
        mesNome = 'Inexistente';
        break;
}


console.log(`Olá meu nome é ${nome}`);
console.log(`Meu código de aluno é ${matricula}`);

// Opção com IF Ternário
// console.log(`Atualmente estou estudando no SuperDev? ${estudando ? 'Verdadeiro' : 'Falso'}`);

if (estudando) {
    console.log(`Atualmente estou estudando no SuperDev? Verdadeiro`);
} else {
    console.log(`Atualmente estou estudando no SuperDev? Falso`);
}

console.log(`Sabendo que estamos no mês ${mesNumero}, posso dizer que é ${mesNome}!`);
