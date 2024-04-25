import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addImpression } from "../pages/dashboard/_request";
import { IconBadge } from "@/components/icon-badge";
import { BookMarkedIcon, BookOpen } from "lucide-react";

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
    tasks: any[];
    price: number;
    _id: string;
    color: string;
    students: any[];
    category: {
      name: string;
    };
  };
  index: number;
};
const InternshipComponent = (props: props) => {
  const { data } = props;
  // const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const user = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    if (props.data !== undefined) {
      const body = {
        _id: props.data._id,
      };
      dispatch(addImpression(body));
    }
  }, []);

  const isStudent = data.students.find(
    (student: any) => student.student === user._id
  );
  console.log(isStudent);

  return (
    <Link to={`/details/${data._id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <img src={data.image} alt={data.title} className="object-cover " />
        </div>
        <div className="flex flex-col pt-2 gap-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {data.title}
          </div>
          <p className="text-xs text-muted-foreground">{data.category.name}</p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size={"sm"} icon={BookOpen} />
              <span className="font-sans">
                {data.tasks.length}{" "}
                {data.tasks.length === 1 ? "Chapter" : "Chapters"}
              </span>
            </div>
          </div>

          {isStudent ? (
            <div>TODO : Progress Component</div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1 text-sm md:text-xs">
                <IconBadge size={"sm"} icon={BookMarkedIcon} />
                <span className="font-sans">
                  {data.students.length}{" "}
                  {data.students.length === 1 ? "Student" : "Students"}
                </span>
              </div>
              <div className="text-sm md:text-xs font-semibold">
                <span className="text-slate-700 font-medium text-md md:text-sm">
                  {data.price.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default InternshipComponent;
