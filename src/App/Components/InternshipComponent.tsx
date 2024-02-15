type props = {
  data: {
    companyName: string;
    product: string;
    price: string;
    duration: string;
    noOftasks: string;
    img: string;
    skills: string[];
  };
};
const InternshipComponent = (props: props) => {
  const { data } = props;
  const initials = data.companyName.split(" ").map((item) => item[0]);
  return (
    <div className="w-[250px] md:w-[300px] bg-tertiary rounded-lg">
      <img
        src={data.img}
        alt=""
        className="rounded-t-lg h-[200px] w-[100%] object-cover"
      />
      <div className="flex justify-between p-2 h-[50px] items-center">
        <div className="flex items-center justify-center gap-2">
          <div className="text-[10px] w-[35px] h-[35px] dark:bg-[#0000ff] bg-white flex items-center justify-center rounded-full text-black dark:text-white">{initials}</div>
          <h1 className="text_sm">{data.companyName}</h1>
        </div>
        <p className="text_sm font-sans">{data.price}</p>
      </div>
    </div>
  );
};

export default InternshipComponent;
