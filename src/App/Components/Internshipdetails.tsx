import { fetchInternshipDetails } from "../pages/dashboard/_request";
import { useDispatch, useSelector } from "react-redux";
import { IoStar } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
import card from "../../assets/images/Card.png";
import job from "../../assets/images/Job-Seeker.png";
import resume from "../../assets/images/Resume.png";
import diploma from "../../assets/images/Diploma.png";
import task from "../../assets/images/Task-Completed.png";
import todo from "../../assets/images/Todo-List.png";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useEffect } from "react";

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
  const isLoading = useSelector(
    (state: any) => state.internships.internshipLoading
  );
  useEffect(() => {
    dispatch(fetchInternshipDetails(id));
  }, []);

  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className=" p-5 xl:px-[10rem] lg:px-[5rem]">
      <div className="flex flex-col mt-10 md:mt-5">
        <div
          className={`md:h-full overflow-y-scroll `}
          style={{
            scrollbarWidth: "none",
          }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full h-full border dark:border-white border-black p-2 rounded">
              <img
                src={internshipDetails?.image}
                alt=""
                className="w-full h-full rounded"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-5 text-[10px] md:text-[12px] pt-5 md:pt-0 text-left md:text-left md:pl-5">
              <div className="md:max-w-full text_md">
                {internshipDetails.title}
              </div>
              <div className="md:max-w-full text_sm">
                {internshipDetails.description}
              </div>
              <div className="md:max-w-[50%]">
                Price : {internshipDetails.price}
              </div>
              <div className="md:max-w-[600px]">
                Enrolled Interns : {internshipDetails.noOfStudents}
              </div>
              <div className="md:max-w-[600px] flex gap-3 items-center md:justify-start">
                <span>Rating :</span>{" "}
                <span className="flex">
                  {renderStars(internshipDetails.rating)}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1>How it works</h1>
            <ul className="mt-5 gap-5 flex flex-col text_sm">
              <li className="flex gap-3 items-center">
                <img src={card} alt="" />
                <h1>
                  Payment Process: Initiate the process by making a secure
                  payment using your preferred payment method.
                </h1>
              </li>
              <li className="flex gap-3 items-center">
                <img src={todo} alt="" />
                <h1>
                  Task Completion: Dive into the tasks provided, showcasing your
                  skills and completing them with dedication.
                </h1>
              </li>
              <li className="flex gap-3 items-center">
                <img src={task} alt="" />
                <h1>
                  Upon successful completion of tasks, earn a valuable
                  certificate recognizing your accomplishments. Ensure that you
                  meet the minimum requirements for certification, demonstrating
                  your proficiency in the designated tasks.
                </h1>
              </li>
              <li className="flex gap-3 items-center">
                <img src={diploma} alt="" />
                <h1>
                  Certificate Acquisition: Upon successful completion of tasks,
                  earn a valuable certificate recognizing your accomplishments.
                </h1>
              </li>
              <li className="flex gap-3 items-center">
                <img src={resume} alt="" />
                <h1>
                  CV Download: Download your professionally curated CV,
                  reflecting your newly acquired skills and achievements.
                </h1>
              </li>
              <li className="flex gap-3 items-center">
                <img src={card} alt="" />
                <h1>
                  Payment Process: Initiate the process by making a secure
                  payment using your preferred payment method.
                </h1>
              </li>
              <li className="flex gap-3 items-center">
                <img src={job} alt="" />
                <h1>
                  Confident Job Applications: Armed with your certificate and
                  enhanced portfolio, approach job applications with confidence,
                  knowing you have tangible proof of your capabilities. Your
                  strengthened portfolio and CV will set you apart in the
                  competitive job market.
                </h1>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <div className="w-full py-5 border-t text-center border-b">
              <h1>Task you will work on</h1>
            </div>
            <div className="grid grid-cols-3 w-full text-center py-5 text_sm">
              <h1>Weeks</h1>
              <h1>Tasks</h1>
              <h1>Score(100)</h1>
            </div>
            <div>
              {internshipDetails.task?.map((item: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-3 w-full text-center py-5 text_sm"
                  >
                    <h1>{item.title}</h1>
                    <h1>{item.description}</h1>
                    <h1>{item.score}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="p-5 md:w-[350px] text-center bg-primary mt-20 rounded-md cursor-pointer" onClick={() => {
            navigate(`../../payment/${internshipDetails._id}`)
          }}>
            <h1>Start Internship</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internshipdetails;
