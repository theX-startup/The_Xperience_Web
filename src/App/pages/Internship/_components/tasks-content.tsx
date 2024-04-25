import { task } from "@/redux/models";
import { Check } from "lucide-react";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
  tasks: task[];
};

const TasksContent = ({ tasks }: Props) => {
  const [activeTasks, setActiveTasks] = useState<String[]>([]);
  return (
    <div className="mt-10 lg:w-[60%] w-full p-5">
      <h1 className="text-2xl font-semibold">Tasks Content</h1>
      <div className="flex items-center justify-between mt-5">
        <h1>{tasks?.length} Tasks</h1>
        <span
          className="text-sky-500 cursor-pointer"
          onClick={() => {
            tasks.map((task: task) => {
              if (activeTasks.length === tasks?.length) {
                setActiveTasks([]);
              } else {
                setActiveTasks((prev) => [...prev, task._id.toString()]);
              }
            });
          }}
        >
          {activeTasks?.length === tasks?.length
            ? "Collapse All Section"
            : "Expend All Section"}
        </span>
      </div>
      <div className="mt-5 border border-slate-400">
        {tasks?.map((task: task) => {
          return (
            <div className="   ">
              <div
                className="flex gap-x-10 items-center border-b py-5 px-5 bg-sky-200/25"
                onClick={() => {
                  activeTasks.includes(task._id.toString())
                    ? setActiveTasks(
                        activeTasks.filter(
                          (item) => item !== task._id.toString()
                        )
                      )
                    : setActiveTasks([...activeTasks, task._id.toString()]);
                }}
              >
                {activeTasks.includes(task._id.toString()) ? (
                  <IoIosArrowUp size={25} />
                ) : (
                  <IoIosArrowDown size={25} />
                )}
                <span className="text-lg">{task.title}</span>
              </div>
              {activeTasks.includes(task._id.toString()) && (
                <div className="h-auto bg-sky-100/20 p-5">
                  <h1 className="text-xl font-medium mb-3">What you will do</h1>
                  {task?.what_you_will_do?.map((item: { title: string }) => {
                    return (
                      <div>
                        <div className="flex gap-x-3 items-start p-3">
                          <Check size={20} />
                          <span className="flex-1">{item.title}</span>
                        </div>
                      </div>
                    );
                  })}
                  <h1 className="text-xl font-medium mb-3 mt-5">
                    What you will learn
                  </h1>
                  {task?.what_you_will_learn?.map((item: any) => {
                    return (
                      <div>
                        <div className="flex gap-x-3 items-start p-3">
                          <Check size={20}  />
                          <span className="flex-1">{item}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TasksContent;
