# Full-Stack To-Do List Application

This project is a simple To-Do List application built as part of a comprehensive full-stack engineering course. It demonstrates the use of arrays and linear search in both frontend and backend development.

## Tech Stack

- Frontend: Next.js 14 with App Router and ShadCN
- Backend: Node.js with Express
- Language: TypeScript

## Project Structure

```
todo-list-app/
├── frontend/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── api/
│   │       └── tasks.ts
│   ├── components/
│   │   ├── TaskList.tsx
│   │   ├── TaskItem.tsx
│   │   └── SearchBar.tsx
│   ├── lib/
│   │   └── api.ts
│   ├── package.json
│   └── tsconfig.json
├── backend/
│   ├── src/
│   │   ├── index.ts
│   │   ├── routes/
│   │   │   └── tasks.ts
│   │   └── controllers/
│   │       └── taskController.ts
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Features

- Add new tasks
- View list of tasks
- Search tasks using linear search algorithm
- Responsive design using ShadCN components

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/fullstack-todo.git
   cd fullstack-todo
   ```

2. Install frontend dependencies:

   ```
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```
   cd ../backend
   npm install
   ```

## Running the Application

1. Start the backend server:

   ```
   cd backend
   npm run dev
   ```

   The server will start on http://localhost:3001

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```
   The frontend will be available at http://localhost:3000

## Usage

- To add a new task, type the task in the input field and click "Add Task"
- To search for tasks, type in the search bar and the list will filter in real-time
- Tasks are displayed in a list below the search bar

## Learning Outcomes

This project demonstrates:

- Use of arrays to store task data
- Implementation of linear search for task filtering
- Integration of frontend (Next.js) with backend (Express) using RESTful API
- Use of React hooks for state management
- Styling with ShadCN components and Tailwind CSS

## Next Steps

- Implement task deletion and updating
- Add user authentication
- Persist data using a database
- Optimize search algorithm for larger datasets

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
