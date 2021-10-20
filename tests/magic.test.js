const magic = require('../src/magic.js');
const { trybeSimulator } = require('../simulator/simulator.js');

const expected = {
  name: "Ancestor's Chosen",
  manaCost: '{5}{W}{W}',
  types: ['Creature'],
  subtypes: ['Human', 'Cleric'],
  rarity: 'Uncommon',
};

describe(' Testa a função getMagicCard', () => {
  it('Deve retornar um objeto com as propriedades esperadas', async () => {
    expect.assertions(1);

    const getMagicCardSimulator = trybeSimulator(magic, 'getMagicCard');
    const response = await getMagicCardSimulator('130550');

    expect(response).toEqual(expected);
  });

  it('Testa se a propriedade types é do tipo Array', async () => {
    expect.assertions(1);

    const getMagicCardSimulator = trybeSimulator(magic, 'getMagicCard');
    const response = await getMagicCardSimulator('130550');
    const { types } = response;

    expect(Array.isArray(types)).toBe(true);
  });

  it('Testa se a propriedade subtypes possui length === 2', async () => {
    expect.assertions(1);

    const getMagicCardSimulator = trybeSimulator(magic, 'getMagicCard');
    const response = await getMagicCardSimulator('130550');
    const { subtypes } = response;

    expect(subtypes).toHaveLength(2);
  });

  it('Testa se a propriedade rarity possui valor Uncommon', async () => {
    expect.assertions(1);

    const getMagicCardSimulator = trybeSimulator(magic, 'getMagicCard');
    const response = await getMagicCardSimulator('130550');
    const { rarity } = response;

    expect(rarity).toBe('Uncommon');
  });
});
