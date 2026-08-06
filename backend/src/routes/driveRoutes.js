import express from "express";
import { listFolderContents } from "../services/googleDrive.js";

const router = express.Router();

router.get("/:folderId", async (req, res) => {
  try {
    const folderId = req.params.folderId;
    const contents = await listFolderContents(folderId);
    // Cache for 10 minutes — study material doesn't change often
    res.set("Cache-Control", "public, max-age=600, s-maxage=600");
    res.json(contents);
  } catch (error) {
    console.error("Error fetching Drive contents:", error);
    res.status(500).json({ message: "Failed to fetch folder contents" });
  }
});

export default router;
