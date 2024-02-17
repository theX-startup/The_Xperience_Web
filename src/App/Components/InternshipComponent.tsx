import { CiBookmarkPlus } from "react-icons/ci"

type props = {
  data: {
    title: string;
    company: {
      name: string;
      logo: string;
    };
    description: string;
    duration: string;
    heading: string;
    image: string;
    noOfTasks: string;
    price: string;
    _id: string;
    color: string;
  };
};
const InternshipComponent = (props: props) => {
  const { data } = props;

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
              src={data.company?.logo}
              alt=""
              className="h-[30px] w-[30px] rounded-full"
            />
          </div>
          <h1 className="text-[10px]">{data.company?.name}</h1>
        </div>
        <h1 className="text-[10px]">{data.title}</h1>
        <p className="text-[10px] font-sans">#{data.price}</p>
      </div>
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-2">
          <p className="text-[10px] font-sans">{data.noOfTasks} Weeks</p>
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
