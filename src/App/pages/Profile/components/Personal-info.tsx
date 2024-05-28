import UsernameForm from "./username-form";
import { user } from "@/redux/models";
import UserProfileDescription from "./user-profile-description";
import UserProfilePicture from "./user-profile-picture";
import { useEffect, useState } from "react";
import RestApi from "@/services/RestApi";
import PaystackSubaccount from "./paystack-subaccount";
import { Banner } from "@/components/banner";

type Props = {
  user: user;
};

const PersonalInfo = ({ user }: Props) => {
  const [banks, setBanks] = useState([]);
  const requiredFields = [
    user.fullname,
    user.username,
    user.email,
    user.description,
    user.picturePath,
  ];
  const completedFields = requiredFields.filter(Boolean).length;
  const totalFields = requiredFields.length;
  const isComplete = requiredFields.every(Boolean);
  useEffect(() => {
    const getBanks = async () => {
      const response = await RestApi.getCall("/paystack/getBanks");
      setBanks(response.data);
    };
    getBanks();
  }, []);
  return (
    <>
      {isComplete && (
        <Banner
          variant={"success"}
          label="You have successfully updated your profile information, you can now create an internship."
        />
      )}
      {!isComplete && (
        <Banner
          variant={"warning"}
          label={`You have completed ${completedFields} out of ${totalFields} fields, you need to complete all fields to create an internship.`}
        />
      )}
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Profile Information</h1>
            <span className="text-sm text-slate-700">
              Update your profile information
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 w-full">
          <div>
            <UsernameForm initialData={user} />
            <UserProfileDescription initialData={user} />
            <UserProfilePicture initialData={user} />
          </div>
          <div>
            <PaystackSubaccount options={banks} initialData={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
