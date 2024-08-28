    //Variável armazenando nome completo
    const nome = "Alessandra Silva Sousa";
    console.log(nome);

    //variável armazenando se gosto de programar
    var iLikeProgramming = true;
    console.log(iLikeProgramming);

    //operações matemáticas
    var numb1 = 1;
    var numb2 = 2;
    var numb3 = 3;
    var numb4 = 4;
    var numb5 = 5;
    var numb10 = 10;

    console.log(numb2 + (numb3 * numb4) - numb5);
    console.log(numb2 * (numb3 + numb4) - numb5/numb5);
    console.log((((numb10 - numb4) / numb2) * numb3) + numb1);
    console.log(numb3 * numb4 / numb2 + numb1 - numb5);

    //poema com interpolação
    const cm = "cubo mágico"
    const c = "cubo"
    const emb = "embaralha"

    console.log(`Igual ao ${cm}, \nvocê tem fases e faces e cores demais.\nÉ demorado te entender e chegar ao fim. E quando finalmente chego, preciso te montar de novo. \nDiferente do ${c}, você se ${emb} sozinho.`)

    //data de hoje
    var data = new Date();
    var dia = data.getDate().toString().padStart(2, '0');
    var mes = (data.getMonth() + 1).toString().padStart(2, '0');
    var ano = data.getFullYear();
    document.write("A data de hoje é " + dia +"/"+ mes +"/"+ ano);
    console.log(`A data de hoje é ${dia}/${mes}/${ano}`)

    //calculando área do triangulo
    var base = parseInt(prompt("Digite o número da base do triângulo para calcular a área"));
    var altura = parseInt(prompt("Digite o número da altura do triângulo para calcular a área"));
    var area = (base*altura)/2;
    alert("A área do triângulo é: " + area);
    console.log(`A área do triângulo é: ${area}`);

    //ver se o caracter é uma vogal
    var letra = prompt("Digite uma letra para verificar se é uma vogal");
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    alert("A letra digitada é uma vogal");
    }
    else{
    alert("A letra digitada não é uma vogal");
    }

    //ver se o número é par ou impar

    //Crie uma condicional para verificar se o número é par ou é impar
    var numero = 12;
    if (numero % 2 == 0){
    console.log(`O número ${numero} é par.`)
    } else {
    console.log(`O número ${numero} é ímpar.`)
    }

    //ver se o triângulo é isosceles,equilatero ou escaleno
    var lado1 = 7; 
    var lado2 = 5;
    var lado3 = 7;
    if (lado1 === lado2 && lado2 === lado3){
    console.log("Este triângulo é equilátero, pois as 3 medidas são iguais.")
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
    console.log("Este triângulo é isósceles, pois duas das três medidas são iguais.")
} else {
    console.log("Este triângulo é escaleno, pois as três medidas são diferentes.")
}

    //calcular a media do aluno
    var nota1 = 4;
    var nota2 = 6;
    var nota3 = 9;
    const mediaAluno = (nota1+nota2+nota3)/3;

    console.log("A media do aluno é: " + mediaAluno);

    //array hobbies

    var hobbies = [
    "Ler",
    "Ver filme",
    "Jogar",
    "Cozinhar"
    ];

    console.log(hobbies);

    //array frutas
    var frutas= [
        "Manga",
        "Morango",
        "Banana",
        "Pinha",
        "Uva verde",
    ];

    //imprimindo o segundo elemento do array
    console.log(frutas[1]);
    //incluindo mais 2 frutas
    frutas.push("abacaxi", "laranja")
    console.log(frutas);
    //retirar a primeira fruta
    frutas.shift();
    console.log(frutas);


    const valor = 1.250;
    const tipovalor = typeof valor;
    console.log(`O tipo da variável "${valor}" é ${tipovalor}`);

    //calculadora
    let numero1 = parseFloat(prompt("Digite o primeiro número: "));
    let numero2 = parseFloat(prompt("Digite o segundo número: "));
    let operador =  prompt("Digite a operação desejada: +, -, * ou /");
    let resultado;

        switch (operador)
        {
            case "+":
             resultado= numero1 + numero2;
            break;

            case "-":
             resultado= numero1 - numero2;
            break;

            case "*":
             resultado= numero1 * numero2;
            break;

            case "/":
             resultado= numero1 / numero2;
            break;

            default:
                alert("Digite um operador válido!");
                
                
        }

  alert("O resultado da operação é: " + resultado);

 