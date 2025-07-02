import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEmailSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist signup endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistEmailSchema.parse(req.body);
      
      // Check if email already exists
      const exists = await storage.isEmailInWaitlist(validatedData.email);
      if (exists) {
        return res.status(400).json({ message: "Email already registered in waitlist" });
      }

      const waitlistEmail = await storage.addToWaitlist(validatedData);
      res.status(201).json({ 
        message: "Successfully added to waitlist",
        id: waitlistEmail.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid input data",
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Internal server error" 
      });
    }
  });

  // Get waitlist count endpoint
  app.get("/api/waitlist/count", async (req, res) => {
    try {
      const emails = await storage.getWaitlistEmails();
      res.json({ count: emails.length });
    } catch (error) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
