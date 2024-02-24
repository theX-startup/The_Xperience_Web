import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full min-h-[90vh] flex items-center justify-center">
      <div className="h-full w-full flex items-center justify-center">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#0000ff"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Loader;
