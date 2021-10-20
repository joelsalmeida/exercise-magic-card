const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  // implemente sua função aqui
};

describe(' Testa a função getMagicCard', () => {
  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(2);
    await getMagicCard('130553');
    expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards[4].name).toBe('Beacon of Immortality');
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    // expect.assertions();
    // expect(favoriteCards).toHaveLength(4);
    // implemente seus testes aqui
  });
});
