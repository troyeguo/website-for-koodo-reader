const download = require("../configs/download");
const logs = require("../configs/logs");
const logs_en = require("../configs/logs_en");
const logs_tw = require("../configs/logs_tw");
module.exports = (req, res) => {
  const {
    query: { name },
  } = req;
  res.status(200).send({
    download: download,
    log:
      name === "zh-CN" || name === "zh-SG"
        ? logs[0]
        : name === "zh-TW" || name === "zh-HK"
        ? logs_tw[0]
        : name
        ? logs_en[0]
        : logs[0],
  });
};
