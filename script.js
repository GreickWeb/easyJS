        function TempPromt() {
            const temp = document.getElementById("q1").value

            if (temp >= 30) {
                alert("Dia quente!")
            } else if (temp < 30 && temp >= 20) {
                alert("Dia agrádavel!")
            } else if (temp < 20 && temp >= 0) {
                alert("Dia frio")
            }
            else {
                alert("Digite algum valor válido")
            }
        };

        function Calc() {
            const valor1 = parseFloat(document.getElementById("vl1").value);
            const valor2 = parseFloat(document.getElementById("vl2").value);
            const op = document.getElementById("op").value;

            let resultado;

            switch (op) {
                case "+":
                    resultado = valor1 + valor2;
                    break;
                case "-":
                    resultado = valor1 - valor2;
                    break;
                case "*":
                    resultado = valor1 * valor2;
                    break;
                case "/":
                    if (valor2 === 0) {
                        alert("Divisão por zero não é permitida.");
                        return;
                    }
                    resultado = valor1 / valor2;
                    break;
                default:
                    alert("Digite uma operação válida (+, -, *, /).");
                    return;
            }

            alert("O resultado é: " + resultado);
        }
        function verificarNota() {
            const nota = parseFloat(document.getElementById("nota").value);
            if (nota >= 9 && nota <= 10) {
                alert("Excelente!");
            } else if (nota >= 7 && nota < 9) {
                alert("Bom!");
            } else if (nota >= 5 && nota < 7) {
                alert("Regular!");
            } else if (nota >= 0 && nota < 5) {
                alert("Insuficiente!");
            } else {
                alert("Digite uma nota válida entre 0 e 10.");
            }
        }
        function diaSemana() {
            const dia = document.getElementById("dia").value;
            switch (dia) {
                case "1":
                    alert("Domingo");
                    break;
                case "2":
                    alert("Segunda-feira");
                    break;
                case "3":
                    alert("Terça-feira");
                    break;
                case "4":
                    alert("Quarta-feira");
                    break;
                case "5":
                    alert("Quinta-feira");
                    break;
                case "6":
                    alert("Sexta-feira");
                    break;
                case "7":
                    alert("Sábado");
                    break;
                default:
                    alert("Digite um número válido de 1 a 7.");
            }
        }
        function verificarParOuImpar() {
            const numero = parseInt(document.getElementById("n1").value);
            if (numero % 2 === 0) {
                alert("O número " + numero + " é PAR.");
            } else if (numero % 2 === 1) {
                alert("O número " + numero + " é ÍMPAR.");
            } else {
                alert("Digite um número válido.");
            }
        }
        const botao = document.getElementById("impossivel");
        const container = document.querySelector(".container");

        botao.addEventListener("mouseover", () => {
            const containerRect = container.getBoundingClientRect();
            const botaoRect = botao.getBoundingClientRect();

            // Calcula limites máximos de movimentação
            const maxLeft = container.clientWidth - botao.offsetWidth;
            const maxTop = container.clientHeight - botao.offsetHeight;

            // Gera posições aleatórias dentro dos limites
            const newLeft = Math.random() * maxLeft;
            const newTop = Math.random() * maxTop;

            botao.style.left = `${newLeft}px`;
            botao.style.top = `${newTop}px`;
        });
        botao.addEventListener("click", () => {
            alert("Você conseguiu clicar no botão!");
        });
