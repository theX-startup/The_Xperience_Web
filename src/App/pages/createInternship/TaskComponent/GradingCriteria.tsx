import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../_request";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface props {
  initialData: {
    Grading_Criteria: string[];
  };
  taskId: any;
}

const Grading_Criteria = (props: props) => {
  const { initialData, taskId } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState<string[]>([]);
  const dispatch = useDispatch<any>();

  const toggleEdit = () => {
    setIsEditing((current) => !current);
  };
  const schema = z.object({
    title: z.string().min(1),
    content: z.string(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    await dispatch(
      updateTask(
        {
          Grading_Criteria: { title: data.title, content },
        },
        toast,
        taskId
      )
    );
    toggleEdit();
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Grading Criteria
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Grading Criteria
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div
          className={cn(
            "text-sm mt-2 flex flex-col gap-2",
            !initialData.Grading_Criteria && "text-slate-500 italic"
          )}
        >
          {!(initialData?.Grading_Criteria?.length > 0) ? (
            <p className="text-muted-foreground">
              Add what your interns will gain from this internship
            </p>
          ) : (
            initialData?.Grading_Criteria?.map((item: any, index) => (
              <ul key={index} className="flex gap-2 list-decimal flex-col ml-5 font-serif">
                <li className="max-w-[80%]">{item.title}</li>
                <ul className="flex gap-2 list-disc max-w-full text-sm ml-5 flex-col">
                  {item.content.map((content: any, index: any) => (
                    <li key={index} className="max-w-[80%]">
                      {content}
                    </li>
                  ))}
                </ul>
              </ul>
            ))
          )}
        </div>
      )}

      {isEditing && (
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
                  <FormLabel>
                    <span>Title</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g 'Title goes here...'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <span>Criterials</span>
                  </FormLabel>
                  <div className="flex items-center gap-x-5">
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder="e.g 'Criterials goes here...'"
                        {...field}
                      />
                    </FormControl>
                    <PlusCircle
                      className="h-6 w-6 text-primary-500 cursor-pointer"
                      onClick={() => {
                        setContent([...content, form.getValues("content")]);
                        form.setValue("content", "");
                      }}
                    />
                  </div>
                  <FormMessage />
                  <div className="mt-5">
                    {content.map((item, index) => (
                      <ul
                        key={index}
                        className="flex items-center gap-2 list-disc max-w-full text-sm ml-5"
                      >
                        <li className="max-w-[80%]">{item}</li>
                      </ul>
                    ))}
                  </div>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default Grading_Criteria;
