const { Item, Shop } = require('../src/gilded_rose');

describe('Gilded Rose - Suíte de Testes (Characterization & TDD)', () => {

  it('cria uma lista vazia por padrão e não falha ao atualizar', () => {
    const shop = new Shop();
    expect(shop.updateQuality()).toEqual([]);
  });
  
  describe('Itens Normais (Padrão)', () => {
    it('deve diminuir sellIn e quality em 1 antes do vencimento', () => {
      const shop = new Shop([new Item('Elixir of the Mongoose', 10, 20)]);
      const items = shop.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19);
    });

    it('deve diminuir a quality em 2 quando o sellIn for <= 0 (vencido)', () => {
      const shop = new Shop([new Item('Elixir of the Mongoose', 0, 10)]);
      const items = shop.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(8);
    });

    it('não deve diminuir a quality abaixo de 0', () => {
      const shop = new Shop([new Item('Elixir of the Mongoose', 5, 0)]);
      const items = shop.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it('não deve diminuir a quality abaixo de 0 mesmo após o vencimento', () => {
      const shop = new Shop([new Item('Elixir of the Mongoose', 0, 1)]);
      const items = shop.updateQuality();
      // Cai de 1 para 0 no primeiro bloco, e o limite impede de cair para -1 no segundo bloco
      expect(items[0].quality).toBe(0); 
    });
  });

  describe('Aged Brie', () => {
    it('deve aumentar a quality em 1 antes do vencimento', () => {
      const shop = new Shop([new Item('Aged Brie', 10, 20)]);
      const items = shop.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(21);
    });

    it('deve aumentar a quality em 2 após o vencimento (Comportamento legado mantido)', () => {
      const shop = new Shop([new Item('Aged Brie', 0, 20)]);
      const items = shop.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(22);
    });

    it('não deve aumentar a quality acima de 50 antes do vencimento', () => {
      const shop = new Shop([new Item('Aged Brie', 10, 50)]);
      const items = shop.updateQuality();
      expect(items[0].quality).toBe(50);
    });

    it('não deve aumentar a quality acima de 50 após o vencimento', () => {
      const shop = new Shop([new Item('Aged Brie', 0, 49)]);
      const items = shop.updateQuality();
      // O código tentará somar +2, mas o limite deve barrar no 50
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Sulfuras, Hand of Ragnaros', () => {
    it('não deve alterar sellIn nem quality em condições normais', () => {
      const shop = new Shop([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
      const items = shop.updateQuality();
      expect(items[0].sellIn).toBe(10);
      expect(items[0].quality).toBe(80);
    });

    it('não deve alterar quality mesmo com sellIn negativo (Cobre a branch falsa da linha 42)', () => {
      const shop = new Shop([new Item('Sulfuras, Hand of Ragnaros', -1, 80)]);
      const items = shop.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(80);
    });
  });

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('deve aumentar a quality em 1 quando sellIn > 10', () => {
      const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20)]);
      const items = shop.updateQuality();
      expect(items[0].sellIn).toBe(10);
      expect(items[0].quality).toBe(21);
    });

    it('deve aumentar a quality em 2 quando 5 < sellIn <= 10', () => {
      const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);
      const items = shop.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(22);
    });

    it('deve aumentar a quality em 3 quando 0 <= sellIn <= 5', () => {
      const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);
      const items = shop.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(23);
    });

    it('deve zerar a quality após o show (sellIn <= 0)', () => {
      const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);
      const items = shop.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });

    it('não deve ultrapassar 50 quando faltam menos de 10 dias (cobre branches das linhas 20 e 25)', () => {
      // Qualidade 49 soma 1 (vira 50), tenta somar mais 1 por estar < 11 dias, mas é barrado pelo if < 50
      const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)]);
      const items = shop.updateQuality();
      expect(items[0].quality).toBe(50);
    });

    it('não deve ultrapassar 50 quando faltam menos de 5 dias (cobre branches aninhadas da linha 25)', () => {
      // Qualidade 48 soma 1 (49), soma 1 por estar < 11 dias (50), tenta somar 1 por estar < 6 dias, mas é barrado
      const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48)]);
      const items = shop.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Conjured Items (Novo Requisito - TDD)', () => {
    // NOTA DE QA: Estes testes falharão na primeira execução.
    // Eles representam o comportamento esperado após a sua refatoração!
    
    it('deve diminuir a quality em 2 antes do vencimento', () => {
      const shop = new Shop([new Item('Conjured Mana Cake', 10, 20)]);
      const items = shop.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(18); // Esperado 18, Atual Legado é 19
    });

    it('deve diminuir a quality em 4 após o vencimento', () => {
      const shop = new Shop([new Item('Conjured Mana Cake', 0, 20)]);
      const items = shop.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(16); // Esperado 16, Atual Legado é 18
    });
    
    it('não deve diminuir a quality abaixo de 0', () => {
      const shop = new Shop([new Item('Conjured Mana Cake', 10, 1)]);
      const items = shop.updateQuality();
      expect(items[0].quality).toBe(0); 
    });
  });
});