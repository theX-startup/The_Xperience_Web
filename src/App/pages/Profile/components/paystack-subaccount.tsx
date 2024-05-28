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
import { ArrowRight, Loader2, Pencil } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ComboBox from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import RestApi from "@/services/RestApi";
import { toast } from "react-toastify";
import { paystack } from "@/redux/models";

interface props {
  initialData?: {
    paystack: paystack;
  };
  options?: {
    label: string;
    value: string;
  }[];
}

const PaystackSubaccount = (props: props) => {
  const { initialData, options } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [bankDetailsLoading, setBankDetailsLoading] = useState(false);
  console.log(initialData);

  const toggleEdit = () => {
    setIsEditing((current) => !current);
  };
  const schema = z.object({
    account_number: z.string(),
    bank_code: z.string(),
    bussiness_name: z.string(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      account_number: "",
      bank_code: "",
      bussiness_name: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await RestApi.postCall("/paystack/request/subaccount", {
        account_number: data.account_number,
        bank_code: data.bank_code,
        business_name: data.bussiness_name,
      });
      // console.log(res);
    } catch (error: any) {
      // console.log(error);
      toast.error(error);
    }
    toggleEdit();
  };

  const fetchBankDetails = async (
    bank_code: string,
    account_number: string
  ) => {
    setBankDetailsLoading(true);
    try {
      const response = await RestApi.getCall(
        `/paystack/getBankDetails?account_number=${account_number}&bank_code=${bank_code}`
      );
      form.setValue("bussiness_name", response.data?.data?.account_name);
    } catch (error) {
      console.log(error);
    } finally {
      setBankDetailsLoading(false);
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Bank Details
        {!Object.keys(initialData?.paystack || {}) && (
          <Button onClick={toggleEdit} variant="ghost">
            {isEditing && <>Cancel</>}
            {!isEditing && (
              <>
                <Pencil className="h-4 w-4 mr-2" />
                Edit Bank details
              </>
            )}
          </Button>
        )}
      </div>
      {!isEditing && !initialData?.paystack && (
        <p
          className={cn(
            "text-sm mt-2",
            !initialData?.paystack && "text-slate-500 italic"
          )}
        >
          "No bank details provided"
        </p>
      )}
      {initialData?.paystack && Object.keys(initialData?.paystack) && !isEditing && (
        <div className="mt-2">
          <div className="flex items-center gap-x-2">
            <span className="font-semibold">Account Number:</span>
            <span>{initialData?.paystack?.accountNumber}</span>
          </div>
          <div className="flex items-center gap-x-2 mt-2">
            <span className="font-semibold">Bank Name:</span>
            <span>{initialData?.paystack?.bank}</span>
          </div>
          <div className="flex items-center gap-x-2 mt-2">
            <span className="font-semibold">Account Name:</span>
            <span>{initialData?.paystack?.bussinessName}</span>
          </div>
        </div>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4 w-full"
          >
            <FormField
              control={form.control}
              name="account_number"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g Enter your account number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="bank_code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ComboBox options={options} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                className="text-xs"
                size={"sm"}
                onClick={() => {
                  fetchBankDetails(
                    form.getValues("bank_code"),
                    form.getValues("account_number")
                  );
                }}
              >
                {bankDetailsLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Button>
            </div>
            {
              <FormField
                control={form.control}
                name="bussiness_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input disabled={true} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            }
            <div className="flex items-center gap-x-2">
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Request for Sub-Account
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default PaystackSubaccount;
