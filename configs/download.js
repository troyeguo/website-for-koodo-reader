const changeLogs = require("./logs");
const version = changeLogs[0].version;
const downloadOptions = [
  {
    id: 1,
    icon: "windows",
    title: "General",
    option: "exe",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}.exe`,
  },
  {
    id: 2,
    icon: "windows",
    title: "Portable",
    option: "exe",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}-Portable.exe`,
  },
  {
    id: 3,
    icon: "windows",
    title: "Zip",
    option: "zip",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}-Win.zip`,
  },
  {
    id: 4,
    icon: "windows",
    title: "7z",
    option: "7z",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}-Win.7z`,
  },
  {
    id: 5,
    icon: "mac",
    title: "General",
    option: "dmg",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}.dmg`,
  },
  {
    id: 6,
    icon: "mac",
    title: "Apple Silicon",
    option: "dmg",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}-arm64.dmg`,
  },
  {
    id: 7,
    icon: "linux",
    title: "General",
    option: "appImage",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}.AppImage`,
  },
  {
    id: 8,
    icon: "ubuntu",
    title: "Ubuntu",
    option: "snap",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}.snap`,
  },
  {
    id: 9,
    icon: "debian",
    title: "Debian",
    option: "deb",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo.Reader-${version}.deb`,
  },
  {
    id: 10,
    icon: "redhat",
    title: "Redhat",
    option: "rpm",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo.Reader-${version}.rpm`,
  },
  {
    id: 11,
    icon: "web",
    title: "Demo",
    option: "demo",
    url: `https://reader.960960.xyz`,
  },
];
module.exports = downloadOptions;
