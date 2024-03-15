import { useParams } from "react-router-dom";
import { IconBadge } from "@/components/icon-badge";
import { CircleDollarSign, LayoutDashboard, ListChecks } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import TitleForm from "./components/TitleForm";
import DescriptionForm from "./components/DescriptionForm";
import ImageForm from "./components/ImageForm";
import { useEffect } from "react";
import CategoryForm from "./components/CategoryForm";
import PriceForm from "./components/PriceForm";

const Description = () => {
  const params = useParams();
  const { id } = params;
  const values = useSelector((state: any) => state.create.values);
  const required = [
    values.title,
    values.description,
    values.image,
    values.price,
    values.category,
  ];
  const totalFields = required.length;
  const completedFields = required.filter(Boolean).length;
  const dispatch = useDispatch<any>();

  const categories = async () => {
    const response = await fetch("http://192.168.88.247:3000/categories");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    categories().then((data) => {
      dispatch({ type: "categories", payload: data });
    });
  }, []);

  return (
    <div className="p-6 w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Internship setup</h1>
          <span className="text-sm text-slate-700">
            complete all fields ({completedFields}/{totalFields})
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <h1 className="text-xl">Internship Description</h1>
            {/* <span className="text-sm text-slate-700"></span> */}
          </div>
          <TitleForm initialData={values} courseId={id} />
          <DescriptionForm initialData={values} courseId={id} />
          <ImageForm initialData={values} courseId={id} />
          <CategoryForm
            initialData={values}
            courseId={id}
            options={values.categorys.map((category: any) => ({
              label: category.name,
              value: category._id,
            }))}
          />
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={ListChecks} />
              <h2 className="text-xl">Internship Tasks</h2>
            </div>
            <div>TODO: Add tasks</div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={CircleDollarSign} />
              <h2 className="text-xl">Sell Your Internship</h2>
            </div>
            <PriceForm initialData={values} courseId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
