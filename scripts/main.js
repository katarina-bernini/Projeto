// Base de dados simulando registros de um Banco de Dados SQL
const alunosDados = [
    { matricula: "202601", nome: "Ana Silva", notas: [8.5, 7.0, 9.0], presencas: 90 },
    { matricula: "202602", nome: "Carlos Souza", notas: [5.0, 4.5, 6.0], presencas: 55 },
    { matricula: "202603", nome: "Mariana Costa", notas: [7.0, 7.5, 8.0], presencas: 100 },
    { matricula: "202604", nome: "João Santos", notas: [4.0, 3.0, 5.0], presencas: 40 }
];

function calcularMedia(notas) {
    const total = notas.reduce((acc, nota) => acc + nota, 0);
    return (total / notas.length).toFixed(1);
}

function processarStatus(media, frequencia) {
    if (frequencia < 60) {
        return { texto: "Risco (Frequência Crítica)", classe: "status-risco" };
    } else if (media >= 7.0 && frequencia >= 75) {
        return { texto: "Regular (Bom Desempenho)", classe: "status-regular" };
    } else if (media >= 5.0 && media < 7.0) {
        return { texto: "Atenção (Desempenho Médio)", classe: "status-atencao" };
    } else {
        return { texto: "Risco (Baixo Aproveitamento)", classe: "status-risco" };
    }
}

function renderizarTabela() {
    const tbody = document.querySelector("#tabela-alunos tbody");
    tbody.innerHTML = "";

    alunosDados.forEach(aluno => {
        const media = calcularMedia(aluno.notas);
        const statusObj = processarStatus(media, aluno.presencas);

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${aluno.matricula}</td>
            <td>${aluno.nome}</td>
            <td>${media}</td>
            <td>${aluno.presencas}%</td>
            <td class="${statusObj.classe}">${statusObj.texto}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Executa a função ao carregar a página
document.addEventListener("DOMContentLoaded", renderizarTabela);