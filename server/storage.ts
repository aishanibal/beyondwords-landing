import { users, waitlistEmails, type User, type InsertUser, type WaitlistEmail, type InsertWaitlistEmail } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  addToWaitlist(email: InsertWaitlistEmail): Promise<WaitlistEmail>;
  getWaitlistEmails(): Promise<WaitlistEmail[]>;
  isEmailInWaitlist(email: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlistEmails: Map<number, WaitlistEmail>;
  private emailToIdMap: Map<string, number>;
  private currentUserId: number;
  private currentWaitlistId: number;

  constructor() {
    this.users = new Map();
    this.waitlistEmails = new Map();
    this.emailToIdMap = new Map();
    this.currentUserId = 1;
    this.currentWaitlistId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async addToWaitlist(insertEmail: InsertWaitlistEmail): Promise<WaitlistEmail> {
    if (this.emailToIdMap.has(insertEmail.email)) {
      throw new Error("Email already exists in waitlist");
    }

    const id = this.currentWaitlistId++;
    const waitlistEmail: WaitlistEmail = {
      ...insertEmail,
      id,
      createdAt: new Date(),
    };
    
    this.waitlistEmails.set(id, waitlistEmail);
    this.emailToIdMap.set(insertEmail.email, id);
    return waitlistEmail;
  }

  async getWaitlistEmails(): Promise<WaitlistEmail[]> {
    return Array.from(this.waitlistEmails.values());
  }

  async isEmailInWaitlist(email: string): Promise<boolean> {
    return this.emailToIdMap.has(email);
  }
}

export const storage = new MemStorage();
