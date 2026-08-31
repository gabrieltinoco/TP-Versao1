const { Shop, Item } = require('../src/gilded_rose');

describe('Gilded Rose - updateQuality', () => {
  test('construtor sem itens cria uma lista vazia e não falha ao atualizar', () => {
    const shop = new Shop();

    expect(shop.items).toEqual([]);
    expect(shop.updateQuality()).toEqual([]);
  });

  test('itens comuns antes do vencimento reduzem qualidade em 1', () => {
    const shop = new Shop([new Item('foo', 10, 20)]);

    const items = shop.updateQuality();

    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  test('itens comuns com qualidade zero não sofrem queda', () => {
    const shop = new Shop([new Item('foo', 5, 0)]);

    const items = shop.updateQuality();

    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(0);
  });

  test('itens comuns após o vencimento perdem qualidade duas vezes', () => {
    const shop = new Shop([new Item('foo', 0, 20)]);

    const items = shop.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(18);
  });

  test('itens comuns expirados com qualidade zero não sofrem queda adicional', () => {
    const shop = new Shop([new Item('foo', -1, 0)]);

    const items = shop.updateQuality();

    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });

  test('Sulfuras não sofrem alterações de qualidade nem de sellIn', () => {
    const shop = new Shop([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);

    const items = shop.updateQuality();

    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(80);
  });

  test('Sulfuras com sellIn negativo também permanecem intactas', () => {
    const shop = new Shop([new Item('Sulfuras, Hand of Ragnaros', -1, 80)]);

    const items = shop.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(80);
  });

  test('Aged Brie antes do vencimento aumenta em 1', () => {
    const shop = new Shop([new Item('Aged Brie', 2, 48)]);

    const items = shop.updateQuality();

    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(49);
  });

  test('Aged Brie após o vencimento continua aumentando qualidade, mas respeita o teto de 50', () => {
    const shop = new Shop([new Item('Aged Brie', -1, 48)]);

    const items = shop.updateQuality();

    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(50);
  });

  test('Aged Brie não ultrapassa o limite de 50', () => {
    const shop = new Shop([new Item('Aged Brie', -1, 50)]);

    const items = shop.updateQuality();

    expect(items[0].quality).toBe(50);
  });

  test('Backstage passes com mais de 10 dias aumentam em 1', () => {
    const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);

    const items = shop.updateQuality();

    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(21);
  });

  test('Backstage passes com 10 dias ou menos aumentam em 2', () => {
    const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);

    const items = shop.updateQuality();

    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(22);
  });

  test('Backstage passes com 5 dias ou menos aumentam em 3', () => {
    const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);

    const items = shop.updateQuality();

    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(23);
  });

  test('Backstage passes não ultrapassam 50 antes do evento', () => {
    const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49)]);

    const items = shop.updateQuality();

    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(50);
  });

  test('Backstage passes zeram a qualidade após o evento', () => {
    const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);

    const items = shop.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
});
