import { useEffect } from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addClick, addImpression } from "../pages/dashboard/_request";

type props = {
  data: {
    title: string;
    user: {
      _id: string;
      fullname: string;
      picturePath: string;
    };
    description: string;
    duration: string;
    heading: string;
    image: string;
    noOfTasks: string;
    price: string;
    _id: string;
    color: string;
    noOfStudents: number;
  };
  index: number;
};
const InternshipComponent = (props: props) => {
  const { data } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (props.data !== undefined) {
      const body = {
        _id: props.data._id,
      };
      dispatch(addImpression(body));
    }
  }, []);

  return (
    <div className="w-full md:max-w-[300px] bg-secondary rounded-lg relative">
      <img
        src={data.image}
        alt=""
        className="rounded-t-lg max-h-[200px] sm:max-h-[200px] w-[100%] object-cover"
      />
      <div className="flex justify-between flex-col p-2 gap-3">
        <div className="flex items-center gap-2">
          <div>
            <img
              src={data.user.picturePath}
              alt=""
              className="h-[30px] w-[30px] rounded-full"
            />
          </div>
          <h1 className="text-[10px]">{data.user.fullname}</h1>
        </div>
        <h1
          className="text-[10px] hover:text-[#0000ff] cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() => {
            const body = {
              _id: data._id,
            };
            dispatch(addClick(body));
            navigate(`/details/${data._id}`);
          }}
        >
          {data.title}
        </h1>
        <p className="text-[10px] font-sans">#{data.price}</p>
      </div>
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-2">
          <p className="text-[10px] font-sans">
            {data.noOfStudents} Enrolled students
          </p>
        </div>
        <p className="text-[10px] font-sans">{data.duration}</p>
      </div>
      <div className="absolute top-3 right-2 bg-secondary p-2 rounded-full cursor-pointer">
        <CiBookmarkPlus className="text-[20px]" />
      </div>
    </div>
  );
};

export default InternshipComponent;
