import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../_request";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { TasksList } from "./TasksList";
import { useNavigate } from "react-router-dom";

interface props {
  initialData: {
    tasks: any[];
  };
  courseId: any;
}

const TasksForm = (props: props) => {
  const { initialData, courseId } = props;
  // const [isUpdating, setIsUpdating] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const dispatch = useDispatch<any>();
  const navigation = useNavigate();

  const toggleCreating = () => {
    setIsCreating((current) => !current);
  };
  const schema = z.object({
    title: z.string().min(3),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    console.log(data);
    await dispatch(createTask(data, toast, courseId));
  };

  const onEdit = (id: string) => {
    navigation(`/createInternship/${courseId}/editTask/${id}`);
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Internship Tasks
        <Button onClick={toggleCreating} variant="ghost">
          {isCreating && <>Cancel</>}
          {!isCreating && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a Task
            </>
          )}
        </Button>
      </div>
      {isCreating && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g Introduction"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Create
            </Button>
          </form>
        </Form>
      )}
      {!isCreating && (
        <div
          className={cn(
            "text-sm mt-2",
            !initialData.tasks?.length && "text-slate-500 italic"
          )}
        >
          {!initialData.tasks?.length && "No tasks added yet"}
          <TasksList
            onEdit={onEdit}
            onReorder={() => {}}
            items={initialData.tasks || []}
          />
        </div>
      )}
      {/* {!isCreating && (
        <p className="text-xs text-muted-foreground mt-4">
          Drag and drop to reorder the tasks
        </p>
      )} */}
    </div>
  );
};

export default TasksForm;
