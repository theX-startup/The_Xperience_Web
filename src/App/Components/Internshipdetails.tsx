import { useQuery } from "react-query";
import { fetchInternshipDetails } from "../pages/dashboard/_request";
import { useDispatch, useSelector } from "react-redux";
import { IoStar } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
import { CgEditBlackPoint } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

type props = {
  id: string;
};

const renderStars = (rating: number) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<IoStar key={i} className="text-[#FFD700]" />);
    } else {
      stars.push(<IoMdStarOutline key={i} className="text-[#FFD700]" />);
    }
  }
  return stars;
};
const Internshipdetails = (props: props) => {
  const dispatch = useDispatch<any>();
  const internshipDetails = useSelector(
    (state: any) => state.internships.internship
  );
  const { id } = props;
  const { isLoading } = useQuery<any>("internship", async () => {
    if (internshipDetails === null) {
      return internshipDetails;
    }
    await dispatch(fetchInternshipDetails(id));
  });

  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-0">
      <div className="flex flex-col mt-10 md:mt-5">
        <div
          className={`md:h-full overflow-y-scroll `}
          style={{
            scrollbarWidth: "none",
          }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:max-w-[400px] max-h-[300px] border p-2 rounded">
              <img
                src={internshipDetails?.image}
                alt=""
                className="max-h-[250px] w-full rounded"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 text-[10px] md:text-[12px] pt-5 md:pt-0 text-center md:text-left md:pl-5 justify-center">
              <div className="md:max-w-[400px] text-[#0000ff]">
                {internshipDetails.title}
              </div>
              <div className="md:max-w-[600px]">
                {internshipDetails.description}
              </div>
              <div className="md:max-w-[500px]">
                Price : {internshipDetails.price}
              </div>
              <div className="md:max-w-[600px]">
                Enrolled Interns : {internshipDetails.noOfStudents}
              </div>
              <div className="md:max-w-[600px] flex gap-3 items-center justify-center md:justify-start">
                <span>Rating :</span>{" "}
                <span className="flex">
                  {renderStars(internshipDetails.rating)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[50%] mt-5 flex flex-col gap-2 md:items-start">
              <h1 className="text-[#0000ff]">What to gain</h1>
              {internshipDetails?.whatToGain?.map((item: any, index: any) => {
                return (
                  <div key={index} className="flex gap-2 items-center">
                    <CgEditBlackPoint className="text-[#0000ff]" />
                    <span className="text-[10px] md:text-[12px] max-w-[80%]">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="md:w-[50%]">
              <div className="flex flex-col gap-2 md:items-start mt-5 pb-10">
                <h1 className="text-[#0000ff]">Tasks</h1>
                {internshipDetails.task?.map((item: any, index: any) => {
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <CgEditBlackPoint className="text-[#0000ff]" />
                      <span className="text-[10px] md:text-[12px]">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="h-[50px] w-full bg-[#0000ff] text-white rounded-sm mt-5 flex items-center justify-center mb-10 md:mb-0 cursor-pointer"
            onClick={() => {
              dispatch({
                type: "SET_SELECTED_ID",
                payload: "",
              });
              navigate(`payment/${id}`);
            }}
          >
            Start Internship
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer absolute top-5 right-5"
        onClick={() => {
          dispatch({
            type: "SET_SELECTED_ID",
            payload: "",
          });
        }}
      >
        <IoMdClose className="text-[#0000ff] text-4xl" />
      </div>
    </div>
  );
};

export default Internshipdetails;
