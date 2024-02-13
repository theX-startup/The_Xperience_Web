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
  return (
    <div className="w-[250px] md:w-[300px] bg-tertiary rounded-lg">
      <img
        src={data.img}
        alt=""
        className="rounded-t-lg h-[150px] w-[100%] object-cover"
      />
      <div className="flex justify-between p-2">
        <h1>{data.companyName}</h1>
        <p>{data.price}</p>
      </div>
      <div className="md:px-4 p-2 py-4 text-center text-sm">
        <h1>{data.product}</h1>
      </div>
      {/* <div className="text-center mt-5">
        <div className="h-[40px] bg-[#5200FF] flex items-center justify-center text-white rounded-b-lg">Start Internship</div>
      </div> */}
    </div>
  );
};

export default InternshipComponent;
