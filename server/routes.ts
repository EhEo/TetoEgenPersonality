import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTestSessionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Save test results
  app.post("/api/test-sessions", async (req, res) => {
    try {
      const sessionData = insertTestSessionSchema.parse(req.body);
      const session = await storage.createTestSession(sessionData);
      res.json(session);
    } catch (error) {
      res.status(400).json({ message: "Invalid test session data" });
    }
  });

  // Get test session by ID
  app.get("/api/test-sessions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const session = await storage.getTestSession(id);
      
      if (!session) {
        res.status(404).json({ message: "Test session not found" });
        return;
      }
      
      res.json(session);
    } catch (error) {
      res.status(400).json({ message: "Invalid session ID" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
