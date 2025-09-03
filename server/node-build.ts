import path from "path";
import fs from "fs";
import express from "express";
import { createServer } from "./index";

async function start() {
  const app = await createServer();
  const port = process.env.PORT || 3000;

  // In production, serve the built SPA files if present; otherwise run API-only
  const __dirname = import.meta.dirname;
  const distPath = path.join(__dirname, "../spa");
  const spaExists = fs.existsSync(distPath);

  if (spaExists) {
    app.use(express.static(distPath));

    // Handle React Router - serve index.html for all non-API routes
    app.get("*", (req, res) => {
      // Don't serve index.html for API routes
      if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
        return res.status(404).json({ error: "API endpoint not found" });
      }
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    console.log("SPA build not found; running API-only mode");
  }

  app.listen(port, () => {
    console.log(`🚀 Fusion Starter server running on port ${port}`);
    console.log(`📱 Frontend: http://localhost:${port}`);
    console.log(`🔧 API: http://localhost:${port}/api`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
