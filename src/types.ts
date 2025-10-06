

export enum PowerSupplyArea {
  NONE = 0,
  HEPCO = 0x01 << 0, // 北海道電力エリア
  TOHOKU_EPCO = 0x01 << 1, // 東北電力エリア
  TEPCO = 0x01 << 2, // 東京電力エリア
  CHUDEN = 0x01 << 3, // 中部電力エリア
  RIKUDEN = 0x01 << 4, // 北陸電力エリア
  KEPCO = 0x01 << 5, // 関西電力エリア
  ENERGIA = 0x01 << 6, // 中国電力エリア
  YONDEN = 0x01 << 7, // 四国電力エリア
  KYUDEN = 0x01 << 8, // 九州電力エリア
  OKIDEN = 0x01 << 9, // 沖縄電力エリア
  ALL = HEPCO | TOHOKU_EPCO | TEPCO | CHUDEN | RIKUDEN | KEPCO | ENERGIA | YONDEN | KYUDEN | OKIDEN,
};