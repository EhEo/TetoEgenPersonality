import { pgTable, text, serial, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const testSessions = pgTable("test_sessions", {
  id: serial("id").primaryKey(),
  answers: json("answers").$type<string[]>().notNull(),
  personalityType: text("personality_type").notNull(),
  completedAt: text("completed_at").notNull(),
});

export const insertTestSessionSchema = createInsertSchema(testSessions).omit({
  id: true,
});

export type InsertTestSession = z.infer<typeof insertTestSessionSchema>;
export type TestSession = typeof testSessions.$inferSelect;

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

export interface QuestionOption {
  text: string;
  value: string;
}

export interface PersonalityType {
  code: string;
  title: string;
  subtitle: string;
  traits: string[];
  strengths: string[];
  description: string;
  color: string;
}

export interface TestResult {
  personalityType: string;
  scores: Record<string, number>;
}
