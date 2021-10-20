const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  favoriteCards.splice(4, favoriteCards.length - 1);
};

describe(' Testa a função getMagicCard', () => {
  afterEach(() => retrievesFavoriteCards());

  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(2);
    await getMagicCard('130553');
    expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards[4].name).toBe('Beacon of Immortality');
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(1);
    expect(favoriteCards).toHaveLength(4);
  });
});
