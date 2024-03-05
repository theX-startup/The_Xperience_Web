import { MdOutlineConstruction } from "react-icons/md";

const InternshipDetails = () => {
  return (
    <div className="flex items-center justify-center w-full h-[90vh]">
      <div className="flex gap-5 items-center justify-center">
        <div className="animate-spin">
          <MdOutlineConstruction size={25} />
        </div>
        <h1 className="text_sm">This Page is under construction</h1>
      </div>
    </div>
  );
};

export default InternshipDetails;
