const express = require("express");
const path = require("path");
const multer  = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const app = express();
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
app.post("/upload",upload.single('file'), function(req, res) {
  return res.send({
      fileNm: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
  });
});
app.listen(process.env.PORT || 3000);
