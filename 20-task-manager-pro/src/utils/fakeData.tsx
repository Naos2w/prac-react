import { v4 as uuidv4 } from "uuid";
import type { Task } from "../types/task";
import { getFormattedTime } from "./formatTime";

export const generateFakeTasks = (): Task[] => {
  let res = [
    {
      id: uuidv4(),
      completed: false,
      category: "Learning",
      text: "Read an article about JavaScript closures",
      create_time: getFormattedTime(),
    },
    {
      id: uuidv4(),
      completed: false,
      category: "Work",
      text: "Prepare slides for Monday's meeting",
      create_time: getFormattedTime(),
    },
    {
      id: uuidv4(),
      completed: false,
      category: "Chores",
      text: "Clean the kitchen",
      create_time: getFormattedTime(),
    },
    {
      id: uuidv4(),
      completed: false,
      category: "Fitness",
      text: "Do 15 minutes of stretching",
      create_time: getFormattedTime(),
    },
    {
      id: uuidv4(),
      completed: false,
      category: "Learning",
      text: "Complete a React TypeScript tutorial",
      create_time: getFormattedTime(),
    },
    {
      id: uuidv4(),
      completed: false,
      category: "Personal",
      text: "Call mom and dad",
      create_time: getFormattedTime(),
    },
    {
      id: uuidv4(),
      completed: false,
      category: "Work",
      text: "Reply to client emails",
      create_time: getFormattedTime(),
    },
    {
      id: uuidv4(),
      completed: false,
      category: "Fitness",
      text: "Go for a 30-minute run",
      create_time: getFormattedTime(),
    },
    {
      id: uuidv4(),
      completed: false,
      category: "Personal",
      text: "Buy groceries for the week",
      create_time: getFormattedTime(),
    },
    {
      id: uuidv4(),
      completed: false,
      category: "Work",
      text: "Finish the quarterly report",
      create_time: getFormattedTime(),
    },
  ];
  for (let i = 0; i < res.length; i++) {
    res[i].create_time = getFormattedTime(i);
  }
  return res;
};
