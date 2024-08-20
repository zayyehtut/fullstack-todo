const API_URL = "http://localhost:3001";

export const getTasks = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return response.json();
};

export const addTask = async (task: string): Promise<void> => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });
  if (!response.ok) {
    throw new Error("Failed to add task");
  }
};
