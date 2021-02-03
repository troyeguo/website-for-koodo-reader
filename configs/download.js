const changeLogs = require("./logs");
const version = changeLogs[0].version;
const downloadOptions = [
  {
    id: 1,
    icon: "windows",
    title: "Windows",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}.exe`,
  },
  {
    id: 2,
    icon: "mac",
    title: "macOS",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}.dmg`,
  },
  {
    id: 3,
    icon: "linux",
    title: "Linux",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}.AppImage`,
  },
  {
    id: 4,
    icon: "windows",
    title: "Portable",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}-Portable.exe`,
  },
];
module.exports = downloadOptions;
