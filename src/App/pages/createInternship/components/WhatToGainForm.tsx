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
import { Input } from "@/components/ui/input";

interface props {
  initialData: {
    WhatToGain: string[];
  };
  courseId: any;
}

const WhatToGainForm = (props: props) => {
  const { initialData, courseId } = props;
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch<any>();

  const toggleEdit = () => {
    setIsEditing((current) => !current);
  };
  const schema = z.object({
    newWhatToGain: z.string().min(1),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      newWhatToGain: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    await dispatch(updateInternship(data, toast, courseId));
    toggleEdit()
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        What to gain
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit What to gain
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p
          className={cn(
            "text-sm mt-2",
            !initialData.WhatToGain && "text-slate-500 italic"
          )}
        >
          {!initialData.WhatToGain
            ? "Add what your interns will gain from this internship"
            : initialData.WhatToGain.map((item, index) => (
                <ul
                  key={index}
                  className="flex items-center gap-2 list-disc max-w-full text-sm ml-5"
                >
                  <li className="max-w-[80%]">{item}</li>
                </ul>
              ))}
        </p>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="newWhatToGain"
              render={({ field }) => (
                <FormItem>
                  <div>
                    {initialData.WhatToGain.map((item, index) => (
                      <ul
                        key={index}
                        className="flex items-center gap-2 list-disc max-w-full text-sm ml-5"
                      >
                        <li className="max-w-[80%]">{item}</li>
                      </ul>
                    ))}
                  </div>
                  <FormControl>
                    <Input
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

export default WhatToGainForm;
