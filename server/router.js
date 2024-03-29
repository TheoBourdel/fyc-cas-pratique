const express = require("express");
const router = express.Router();
const folderController = require("./controller/folderController");
const documentController = require("./controller/documentController");

router.get("/", (req, res) => {
    res.json("Hello world!!");
});

router.get("/folders", folderController.getFolders);
router.post("/folder", folderController.createFolder);
router.put("/folder/:id", folderController.updateFolder);
router.delete("/folder/:id", folderController.deleteFolder);

router.get("/documents", documentController.getDocuments);

module.exports = router;