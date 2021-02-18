const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;
const compression = require("compression");
const nextI18next = require("./i18n");
const download = require("./configs/download");
const logs = require("./configs/logs");
const port = process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3001;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const fs = require("fs");
var dirPath = "uploads";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
  console.log("文件夹创建成功");
} else {
  console.log("文件夹已存在");
}

(async () => {
  await app.prepare();
  const server = express();
  server.use(
    fileUpload({
      createParentPath: true,
    })
  );
  server.use(cors());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));
  server.use(compression());
  server.get("/update", (req, res) => {
    res.send({ download: download, log: logs[0] });
  });

  server.get("*", (req, res) => handle(req, res));
  server.post("/alipay", (req, res) => {
    res.send({ accountVerified: true, orderVerified: true });
  });

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`);
})();
