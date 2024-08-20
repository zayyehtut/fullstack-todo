import { Card, CardContent } from "@/components/ui/card";

interface TaskItemProps {
  task: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <Card>
      <CardContent className="p-4">
        <p>{task}</p>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
