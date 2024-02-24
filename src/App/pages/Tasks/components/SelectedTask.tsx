import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import InfoPage from "../InfoPage";
import InstructionsPage from "../InstructionsPage";
import SubmissionPage from "../SubmissionPage";

type Props = {
  id: string;
};

const SelectedTask = (props: Props) => {
  const tasks = useSelector((state: any) => state.internships.tasks);
  const { id } = props;
  const task = tasks.task.filter((task: any) => task._id === id);
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to={"info"} />} />
        <Route path="info" element={<InfoPage task={task} />} />
        <Route path="instruction" element={<InstructionsPage task={task} />} />
        <Route path="submit" element={<SubmissionPage />} />
      </Routes>
    </div>
  );
};

export default SelectedTask;
