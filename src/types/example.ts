type RGB = [red: number, green: number, blue: number];

interface Color {
  red: RGB | string;
  green: RGB | string;
  blue: RGB | string;
}

// 1. 型注釈を使用
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const customColor1: Color = {
  red: [255, 0, 0], // string | RGB
  green: "#00ff00", // string | RGB
  blue: "#0000ff", // string | RGB
};
// NG
// const r1 = customColor1.green.toUpperCase();
// error: プロパティ 'toUpperCase' は型 'string | RGB' に存在しません。
// プロパティ 'toUpperCase' は型 'RGB' に存在しません

// 2. satifiesを使用 greenとblueは実際の値に基づきstring型になる
const customColor2 = {
  red: [255, 0, 0], // red: [number, number, number];
  green: "#00ff00", // green: string;
  blue: "#0000ff", // blue: string;
} satisfies Color;
// OK
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const r2 = customColor2.green.toUpperCase();

// 3. 型アサーションを使用 greenとblueは実際の値に基づき文字列リテラル型になる
const customColor3 = {
  red: [255, 0, 0], // readonly red: [255, 0, 0];
  green: "#00ff00", // readonly green: "#00ff00";
  blue: "#0000ff", // readonly blue: "#0000ff";
} as const satisfies Color;
// OK
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const r3 = customColor3.green.toUpperCase();