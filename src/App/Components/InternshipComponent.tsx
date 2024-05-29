import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addClick, addImpression } from "../pages/dashboard/_request";
import { IconBadge } from "@/components/icon-badge";
import { BookMarkedIcon, BookOpen } from "lucide-react";
import InternshipProgress from "../pages/Internship/_components/Internship-progress";
import { Badge } from "@/components/ui/badge";

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
    purchases: any[];
    category: {
      name: string;
    };
    progress: any;
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

  const purchased = data.purchases?.find(
    (purchase) => purchase.userId === user._id
  )
    ? true
    : false;

  console.log(purchased);

  return (
    <Link to={`/details/internship/${data._id}`}>
      <div
        className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full"
        onClick={() => {
          const body = {
            _id: data._id,
          };
          dispatch(addClick(body));
        }}
      >
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <img src={data.image} alt={data.title} className="object-cover " />
        </div>
        <div className="flex flex-col pt-2 gap-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {data.title}
          </div>
          <Link to={""} className="text-xs text-muted-foreground underline">
            {data?.user?.fullname}
          </Link>
          <p className="text-xs text-muted-foreground">
            {data?.category?.name}
          </p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size={"sm"} icon={BookOpen} />
              <span className="font-sans">
                {data?.tasks?.length}{" "}
                {data?.tasks?.length === 1 ? "Task" : "Tasks"}
              </span>
            </div>
          </div>

          {purchased ? (
            <div>
              <InternshipProgress
                value={data?.progress}
                variant={data?.progress === 100 ? "success" : "default"}
                size="sm"
              />
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1 text-sm md:text-xs">
                <IconBadge size={"sm"} icon={BookMarkedIcon} />
                <span className="font-sans">
                  {data.purchases?.length ? data.purchases.length : 0}{" "}
                  {data.purchases?.length === 1 ? "Student" : "Students"}
                </span>
              </div>
              <div className="text-sm md:text-xs font-semibold">
                {data.price ? (
                  <span className="text-slate-700 font-medium text-md md:text-sm">
                    {data.price.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </span>
                ) : (
                  <Badge>Free</Badge>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default InternshipComponent;
