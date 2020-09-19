const download = require("../configs/download");
const logs = require("../configs/logs");
module.exports = (req, res) => {
  res.status(200).send({ download: download, log: logs[0] });
};
