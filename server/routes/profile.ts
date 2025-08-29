import type { RequestHandler } from "express";
import type { ProfileResponse } from "@shared/api";

export const handleProfile: RequestHandler = (_req, res) => {
  const profile: ProfileResponse = {
    name: "Rudraksh Taya",
    title: "Computer Science Student",
    email: "rudrakshstaya@gmail.com",
    skills: ["React", "Node.js", "Python", "Java"],
    experience: "3+ years",
    available: true,
  };
  res.json(profile);
};
