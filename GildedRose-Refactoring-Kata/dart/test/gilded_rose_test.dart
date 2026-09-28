import '../lib/gilded_rose.dart';

void main() {
  final item = Item('foo', 0, 0);
  final items = <Item>[item];

  final app = GildedRose(items);
  app.updateQuality();

  if (app.items[0].name != 'foo') {
    throw StateError(
      'Expected item name to remain "foo", got "${app.items[0].name}".',
    );
  }
}
