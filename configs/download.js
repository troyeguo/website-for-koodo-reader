const changeLogs = require("./logs");
const version = changeLogs[0].version;
const downloadOptions = [
  {
    id: 1,
    icon: "windows",
    title: "Windows",
    option: [
      `Koodo-Reader-${version}.exe`,
      `Koodo-Reader-${version}-Portable.exe`,
      `Koodo-Reader-${version}-Win.zip`,
      `Koodo-Reader-${version}-Win.7z`,
    ],
    url: [
      `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}.exe`,
      `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}-Portable.exe`,
    ],
  },
  {
    id: 2,
    icon: "mac",
    title: "macOS",
    option: [
      `Koodo-Reader-${version}.dmg`,
      `Koodo-Reader-${version}-arm64.dmg`,
    ],
    url: [
      `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}.dmg`,
      `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}-arm64.dmg`,
    ],
  },

  {
    id: 3,
    icon: "linux",
    title: "Linux",
    option: [
      `Koodo-Reader-${version}.AppImage`,
      `Koodo-Reader-${version}.snap`,
      `Koodo.Reader-${version}.deb`,
      `Koodo.Reader-${version}.rpm`,
    ],
    url: [
      `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}.AppImage`,
      `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}.snap`,
      `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo.Reader-${version}.deb`,
      `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo.Reader-${version}.rpm`,
    ],
  },
];
module.exports = downloadOptions;
