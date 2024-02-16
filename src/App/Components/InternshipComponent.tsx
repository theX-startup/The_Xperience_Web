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
    noOftasks: string;
    price: string;
    _id: string;
    color: string;
  };
};
const InternshipComponent = (props: props) => {
  const { data } = props;
  console.log(data);

  return (
    <div className="w-[250px] md:w-[300px] bg-tertiary rounded-lg">
      <img
        src={data.image}
        alt=""
        className="rounded-t-lg h-[200px] w-[100%] object-cover"
      />
      <div className="flex justify-between flex-col p-2 gap-5">
        <div className="flex items-center gap-2">
          <div>
            <img
              src={data.company?.logo}
              alt=""
              className="h-[30px] w-[30px] rounded-full"
            />
          </div>
          <h1 className="text_sm">{data.company?.name}</h1>
        </div>
        <p className="text_sm font-sans">#{data.price}</p>
      </div>
    </div>
  );
};

export default InternshipComponent;
