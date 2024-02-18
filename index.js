const Heroi = {
    nome: "Katia Kelly",
    vitorias: 0,
    derrotas: 0,
    lvl: "sem lvl",
    saldo: 0,
}

function definirLvl(vitoria, derrotas) {

    Heroi.saldo = vitoria - derrotas;

    if (vitoria <= 10) {
        Heroi.lvl = "ferro";
        return "Nível Definido"
    } else if (vitoria >= 11 && vitoria <= 20) {
        Heroi.lvl = "Bronze";
        return "Nível Definido"
    } else if (vitoria >= 21 && vitoria <= 50) {
        Heroi.lvl = "Prata";
        return "Nível Definido"
    } else if (vitoria >= 51 && vitoria <= 80) {
        Heroi.lvl = "Ouro";
        return "Nível Definido"
    } else if (vitoria >= 81 && vitoria <= 90) {
        Heroi.lvl = "Diamante";
        return "Nível Definido"
    } else if (vitoria >= 91 && vitoria <= 100) {
        Heroi.lvl = "Lendário";
        return "Nível Definido"
    } else if (vitoria >= 101) {
        Heroi.lvl = "Imortal";
        return "Nível Definido"
    }
};

function consultarLvl() {
    return 'Seu lvl atual é:' + Heroi.lvl;
};

module.exports = { definirLvl, Heroi };