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
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateInternship } from "../_request";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

interface props {
  initialData: {
    description: string;
  };
  courseId: any;
}

const DescriptionForm = (props: props) => {
  const { initialData, courseId } = props;
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch<any>();

  const toggleEdit = () => {
    setIsEditing((current) => !current);
  };
  const schema = z.object({
    description: z.string().min(3, { message: "description is too short" }),
    //   description: z.string().nonempty(),
    //   image: z.string().nonempty(),
    //   price: z.string().nonempty(),
    //   category: z.string().nonempty(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: initialData,
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    console.log(data);
   await dispatch(updateInternship(data, toast, courseId));
    toggleEdit()
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Internship Description
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Desription
            </>
          )}
        </Button>
      </div>
      {!isEditing && <p className={cn(
        "text-sm mt-2",
        !initialData.description && "text-slate-500 italic"
      )}>{initialData.description || "No description"}</p>}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      disabled={isSubmitting}
                      placeholder="e.g 'This course is about...'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
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

export default DescriptionForm;
