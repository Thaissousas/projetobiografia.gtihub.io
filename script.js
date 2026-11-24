const botaoTema = document.getElementById('botaoTema');

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-claro');

    if (document.body.classList.contains('tema-claro')) {
        botaoTema.textContent = '☾';
    } else {
        botaoTema.textContent = '☀';
    }
});

const botaoFrases = document.getElementById('botaoCuriosidade');
const curiosidade1 = document.getElementById('curiosidade1');
const curiosidade2 = document.getElementById('curiosidade2');
const curiosidade3 = document.getElementById('curiosidade3');

const frases = [
    'A Ada era filha de Lord Byron, um dos poetas mais famosos da Inglaterra, e chamava o próprio trabalho de "ciência poética": matemática com uma boa dose de imaginação.',
    'Em 1950, Alan Turing escreveu um artigo perguntando se máquinas podem pensar e reservou um trecho só para responder a uma ideia da Ada: a de que a máquina só faz o que a gente manda.',
    'Na adolescência, Ada pegou sarampo e passou meses de cama, mas não parou de estudar.',
    'A Máquina Analítica nunca chegou a ser construída, porque faltou dinheiro. Ou seja, a Ada escreveu o seu famoso algoritmo sem nunca ver ele funcionar.',
    'Ada tem até um dia só dela: o Ada Lovelace Day, na segunda terça-feira de outubro, que celebra as mulheres na ciência e na tecnologia.',
    'A mãe de Ada incentivou o estudo de matemática desde cedo, porque queria afastar a filha do "temperamento poético" do pai.',
    'As notas que Ada escreveu ficaram cerca de três vezes maiores que o artigo original que ela estava traduzindo.',
    'Ada assinou suas notas apenas com as iniciais "A.A.L.", porque na época não era comum mulheres publicarem trabalhos científicos.',
    'O padrão oficial da linguagem Ada recebeu o código MIL-STD-1815, uma homenagem ao ano em que ela nasceu.'
];

let escolha = 0;

botaoFrases.addEventListener('click', () => {
    let valor = Math.floor(Math.random() * (frases.length / 3));

    while (valor === escolha) {
        valor = Math.floor(Math.random() * (frases.length / 3));
    }

    curiosidade1.textContent = frases[valor * 3];
    curiosidade2.textContent = frases[valor * 3 + 1];
    curiosidade3.textContent = frases[valor * 3 + 2];
    escolha = valor;
});

const botaoCurtir = document.getElementById('botaoCurtir');
const contadorCurtidas = document.getElementById('contadorCurtidas');
const coracao = document.getElementById('coracao');
let curtidas = 0;

botaoCurtir.addEventListener('click', () => {
    curtidas++;
    contadorCurtidas.textContent = curtidas;
    botaoCurtir.classList.add('curtido');
    coracao.textContent = '♥';
});

const botaoIntegrantes = document.getElementById('botaoIntegrantes');
const integrantes = document.getElementById('integrantes');
const botaoFecharIntegrantes = document.getElementById('fecharIntegrantes');

function abrirJanelaIntegrantes() {
    integrantes.classList.add('ativo');
    integrantes.setAttribute('aria-hidden', 'false');
    document.body.classList.add('integrantes-aberto');
    botaoFecharIntegrantes.focus();
}

function fecharJanelaIntegrantes() {
    integrantes.classList.remove('ativo');
    integrantes.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('integrantes-aberto');
    botaoIntegrantes.focus();
}

botaoIntegrantes.addEventListener('click', abrirJanelaIntegrantes);
botaoFecharIntegrantes.addEventListener('click', fecharJanelaIntegrantes);

integrantes.addEventListener('click', (evento) => {
    if (evento.target.hasAttribute('data-fechar-modal')) {
        fecharJanelaIntegrantes();
    }
});

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && integrantes.classList.contains('ativo')) {
        fecharJanelaIntegrantes();
    }
});
