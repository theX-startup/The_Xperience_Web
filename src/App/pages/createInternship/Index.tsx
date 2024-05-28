import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createInternship } from "./_request";
import { user } from "@/redux/models";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreateInternship = () => {
  const user: user = useSelector((state: any) => state.auth.user);
  const requiredFields = [
    user.fullname,
    user.username,
    user.email,
    user.description,
    user.picturePath,
    user.paystack,
  ];
  const isComplete = requiredFields.every(Boolean);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;
  const dispatch = useDispatch<any>();
  const navigation = useNavigate();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    try {
      if (isComplete) {
        dispatch(createInternship(data, navigation, toast));
      } else {
        toast.error(
          `You need to complete your profile information to create an internship`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
          }
        );
        navigation(`/professional/profile/${user?._id}/personal-info`);
      }
    } catch (error) {
      toast.error("Failed to create internship", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

  return (
    <div className="min-h-[80vh] max-w-5xl mx-auto flex md:items-center md:justify-center p-6">
      <div>
        <h1 className="text-2xl">Name Your Internship</h1>
        <p className="text_sm mt-3">
          What title would you like to give your internship? Don&apos;t worry,
          you can change this later
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Internship Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Advance web development Internship'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A great title contains the most important keywords related
                    to your internship
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-x-2">
              <Link to={"/professional/internships"}>
                <Button variant="ghost" type="button">
                  cancel
                </Button>
              </Link>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateInternship;
