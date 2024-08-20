import { Request, Response } from "express";

let tasks: string[] = [];

export const getTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const addTask = (req: Request, res: Response) => {
  const { task } = req.body;
  if (task && typeof task === "string") {
    tasks.push(task);
    res.status(201).json({ message: "Task added successfully" });
  } else {
    res.status(400).json({ message: "Invalid task" });
  }
};
