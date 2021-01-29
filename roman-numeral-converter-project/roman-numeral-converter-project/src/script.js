function convertToRoman(num) {
  const romanTable = {
MMMCMXCIX: 3999,
MMXIV: 2014,
MXXIII: 1023,
MVI: 1006,
MIV: 1004,
M: 1000,
DCCCXCI: 891,
DCCXCVIII: 798,
DCXLIX: 649,
DI: 501,
D: 500,
CD: 400,
XCIX: 99,
XCVII: 97,
LXXXIII: 83,
LXVIII: 68,
XLV: 45,
XLIV: 44,
XXIX: 29,
XVI: 16,
XII: 12,
IX: 9,
V: 5,
IV: 4,
III: 3,
II: 2
};
  let convert = "";
  for (const key in romanTable) {
    const numberVal = romanTable[key];
    while (romanTable <= num) {
      num -= numberVal;
      convert += key;
  }
  }
  return convert;
};
