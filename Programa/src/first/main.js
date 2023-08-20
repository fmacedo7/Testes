const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificaBalanceamento(expressao) {
    const stack = [];
    const abertura = '({[';
    const fechamento = ')}]';
    
    for (let char of expressao) {
        if (abertura.includes(char)) {
            stack.push(char);
        } else if (fechamento.includes(char)) {
            const correspondenteAbertura = abertura[fechamento.indexOf(char)];
            if (stack.length === 0 || stack.pop() !== correspondenteAbertura) {
                return false;
            }
        } else if (!/[()\[\]{}]/.test(char) && !/\s/.test(char)) {
            // Caractere inválido encontrado (não é abertura, fechamento nem espaço em branco)
            return false;
        }
    }
    
    return stack.length === 0;
}

rl.question('Digite a expressão: ', (expressao) => {
    const balanceado = verificaBalanceamento(expressao);
    
    if (balanceado) {
        console.log('A expressão está balanceada.');
    } else {
        console.log('A expressão nao está balanceada.');
    }
    rl.close();
});

