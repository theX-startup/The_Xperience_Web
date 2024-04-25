import { useParams } from "react-router-dom";
import { IconBadge } from "@/components/icon-badge";
import {
  CircleDollarSign,
  LayoutDashboard,
  ListChecks,
  BadgeInfo,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import TitleForm from "./components/TitleForm";
import DescriptionForm from "./components/DescriptionForm";
import ImageForm from "./components/ImageForm";
import { useEffect } from "react";
import CategoryForm from "./components/CategoryForm";
import PriceForm from "./components/PriceForm";
import WhatToGainForm from "./components/WhatToGainForm";
import RestApi from "@/services/RestApi";
import Skills from "./components/Skills";
import MinimumScoreForm from "./components/MinimumScoreForm";
import DurationForm from "./components/DurationForm";
import TasksForm from "./components/TasksForm";
import { Banner } from "@/components/banner";
import { InternshipAction } from "./components/InternshipAction";

const Description = () => {
  const params = useParams();
  const { id } = params;
  const values = useSelector((state: any) => state.create.values);
  const categorys = useSelector((state: any) => state.create.categorys);
  const required = [
    values.title,
    values.description,
    values.image,
    values.price,
    values.category,
    values.tasks?.some((task: any) => task.isPublished),
  ];
  const totalFields = required.length;
  const completedFields = required.filter(Boolean).length;
  const dispatch = useDispatch<any>();
  const isComplete = required.every(Boolean);

  const categories = async () => {
    const response = await RestApi.getCall("/categories");
    return response;
  };

  useEffect(() => {
    categories().then((data) => {
      dispatch({ type: "categories", payload: data });
    });

    const getDetails = async () => {
      const res = await RestApi.getCall(`/editInternship/${id}`);
      dispatch({
        type: "CREATE_INTERNSHIP",
        payload: res,
      });
    };

    getDetails();
  }, []);

  return (
    <>
      {!values.isPublished && (
        <Banner
          variant={"warning"}
          label="This internship is not published, it will not be visible to students"
        />
      )}
      <Banner
        variant={"warning"}
        label="If changes do not reflect refresh the page"
      />
      <div className="p-6 w-full">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Internship setup</h1>
            <span className="text-sm text-slate-700">
              complete all fields ({completedFields}/{totalFields})
            </span>
          </div>
          <InternshipAction
            disabled={!isComplete}
            internshipId={id || ""}
            isPublished={values.isPublished}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h1 className="text-xl">Internship Description</h1>
            </div>
            <TitleForm initialData={values} courseId={id} />
            <DescriptionForm initialData={values} courseId={id} />
            <ImageForm initialData={values} courseId={id} />
            <CategoryForm
              initialData={values}
              courseId={id}
              options={categorys.map((category: any) => ({
                label: category.name,
                value: category._id,
              }))}
            />
            <WhatToGainForm initialData={values} courseId={id} />
            <Skills initialData={values} courseId={id} />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl">Internship Tasks</h2>
              </div>
              <TasksForm initialData={values} courseId={id} />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={CircleDollarSign} />
                <h2 className="text-xl">Sell Your Internship</h2>
              </div>
              <PriceForm initialData={values} courseId={id} />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={BadgeInfo} />
                <h2 className="text-xl">
                  Add a minimum Score for your Internship
                </h2>
              </div>
              <MinimumScoreForm initialData={values} courseId={id} />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={BadgeInfo} />
                <h2 className="text-xl">
                  What is the duration of your internship?
                </h2>
              </div>
              <DurationForm initialData={values} courseId={id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
