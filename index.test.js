
const { Heroi, definirLvl } = require('./index');



describe('definirLvl function', () => {
    test('Consulta de Lvl', () => {
        const output = 'Nível Definido';
        expect(definirLvl(100, 20)).toEqual(output);
        console.log(`O Herói ${Heroi.nome} tem de saldo de ${Heroi.saldo} e está no nível de ${Heroi.lvl} `);
    });

});