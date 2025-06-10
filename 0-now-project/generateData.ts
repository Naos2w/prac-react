// generateTasks.ts
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

const rawTasks = [
  { category: "Learning", text: "Read an article about JavaScript closures" },
  { category: "Work", text: "Prepare slides for Monday's meeting" },
  { category: "Chores", text: "Clean the kitchen" },
  { category: "Fitness", text: "Do 15 minutes of stretching" },
  { category: "Learning", text: "Complete a React TypeScript tutorial" },
  { category: "Personal", text: "Call mom and dad" },
  { category: "Work", text: "Reply to client emails" },
  { category: "Fitness", text: "Go for a 30-minute run" },
  { category: "Personal", text: "Buy groceries for the week" },
  { category: "Work", text: "Finish the quarterly report" },
];

const enrichedTasks = rawTasks.map((task) => ({
  id: uuidv4(),
  completed: false,
  category: task.category,
  text: task.text,
  create_time: new Date().toISOString(),
}));

// 組成要輸出的內容
const output = `import type { Task } from "./types/task";

export const tasks: Task[] = ${JSON.stringify(enrichedTasks, null, 2)};`;

// 儲存到檔案
fs.writeFileSync(
  path.join(__dirname, "src", "data", "taskData.ts"),
  output,
  "utf-8"
);

console.log("✅ Task data generated to taskData.ts");
