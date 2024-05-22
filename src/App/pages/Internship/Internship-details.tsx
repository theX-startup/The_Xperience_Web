import {  internship } from "@/redux/models";
import { useSelector } from "react-redux";
import moment from "moment";
import InternshipEnrollButton from "./_components/Internship-enroll-button";
import { Check } from "lucide-react";
import TasksContent from "./_components/tasks-content";
import ProfileCard from "./_components/profile-card";

export const InternshipDetail = () => {
  const internship: internship = useSelector(
    (state: any) => state.internships.internship
  );
  return (
    <div className="relative">
      <div className="bg-sky-200/25 h-auto w-full text-black md:p-10 p-5 flex gap-10 flex-col lg:flex-row items-center relative">
        <div className="lg:w-[60%] flex items-start flex-col">
          <h1 className="text-2xl font-bold text-start">{internship?.title}</h1>
          <h1 className="text-base mt-5 text-start">{internship?.description}</h1>
          <div className="mt-5 text-sm flex flex-row gap-x-5">
            <h1>{internship?.purchases?.length} students</h1>
            <h1>{internship?.tasks?.length} Tasks</h1>
          </div>
          <h1 className="mt-5 text-sm">
            Created By{" "}
            <span className="text-sky-700 cursor-pointer">
              {internship?.user?.fullname}
            </span>
          </h1>
          <h1 className="mt-5 text-sm">
            Last updated{" "}
            <span className="text-sky-700">
              {moment(internship?.createdAt).format("YYYY/MM/DD")}
            </span>
          </h1>
          <div className="mt-10 lg:hidden">
            <InternshipEnrollButton
              internshipId={internship._id}
              price={internship.price}
            />
          </div>
        </div>
        <div className="absolute top-[80%] lg:top-[20%] lg:right-5 lg:w-[35%] lg:flex bg-white border rounded-sm h-auto p-5 flex-col gap-5 hidden">
          <div className="w-full bg-sky-200/25 h-[300px] flex items-center justify-center rounded-md ">
            <img
              src={internship?.image}
              alt=""
              className="w-[95%] h-[95%] rounded-md"
            />
          </div>
          <InternshipEnrollButton
            internshipId={internship._id}
            price={internship.price}
          />
        </div>
      </div>
      <div className="p-2 md:p-5">
        <div className="h-auto p-5 md:p-10 border rounded mt-10 lg:w-[60%]">
          <h1 className="text-2xl font-semibold">What You will Learn</h1>
          <div className="grid grid-cols-1 gap-5 mt-5">
            {internship?.WhatToGain?.map((item: string) => {
              return (
                <div className="flex items-start gap-x-3">
                  <Check className="w-5 h-5 text-sky-700" />
                  <h1 className="text-sm w-[90%]">{item}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <TasksContent tasks={internship?.tasks} />
        <ProfileCard user={internship?.user} />
      </div>
    </div>
  );
};
