import RestApi from "@/services/RestApi";
import { useEffect, useState } from "react";
import { TaskSideBarItem } from "./task-sidebar-item";
import InternshipProgress from "./Internship-progress";


interface props {
  internship: any;
  progressCount: number;
}
export const InternshipSideBar = ({ internship, progressCount }: props) => {
  // const user = useSelector((state: any) => state.auth.user);
  const [Purchase, setPurchase] = useState(null);


  const purchase = async () => {
    const urlPath = `/purchase/get/${internship?._id}`;
    const res = await RestApi.getCall(urlPath);
    setPurchase(res);
  };

  useEffect(() => {
    purchase();
  }, []);



  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <h1 className="font-semibold">{internship.title}</h1>
        {Purchase && (
          <div className="mt-10">
            <InternshipProgress variant="success" value={progressCount} />
          </div>
        )}
      </div>
      {/* Check purchase and add progress */}
      <div className="flex flex-col w-full">
        {internship?.tasks?.map((task: any) => {
          return (
            <TaskSideBarItem
              key={task._id}
              id={task._id}
              label={task.title}
              isCompleted={task?.userProgres?.[0]?.isCompleted}
              isLocked={!task?.isFree && !Purchase}
              internshipId={internship._id}
            />
          );
        })}
      </div>
    </div>
  );
};
