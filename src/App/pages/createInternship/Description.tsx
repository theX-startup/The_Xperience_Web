import { useParams } from "react-router-dom";

const Description = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div className="p-6 w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Internship setup</h1>
          <span className="text-sm text-slate-700">
            complete all fields to create your internship
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full">
        <div>
            <div className="flex items-center gap-x-2">
                <h1 className="text-xl">Internship Description</h1>
                {/* <span className="text-sm text-slate-700"></span> */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
