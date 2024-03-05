import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Iyanda Olamidotun",
    internship: "Data Analysis",
    timeLeft: "4hrs",
  },
  {
    name: "Iyanda Olamidotun",
    internship: "Data Analysis",
    timeLeft: "4hrs",
  },
  {
    name: "Iyanda Olamidotun",
    internship: "Data Analysis",
    timeLeft: "4hrs",
  },
  {
    name: "Iyanda Olamidotun",
    internship: "Data Analysis",
    timeLeft: "4hrs",
  },
];

const orders = [
  "Siyanbola Damilola buy your product design internships 5 mins ago",
  "Siyanbola Damilola buy your product design internships 5 mins ago",
  "Siyanbola Damilola buy your product design internships 5 mins ago",
  "Siyanbola Damilola buy your product design internships 5 mins ago",
  "Siyanbola Damilola buy your product design internships 5 mins ago",
];

const ProDashboard = () => {
  return (
    <div className="w-full flex justify-between flex-col md:flex-row">
      <div className="md:w-[60%]">
        <div className="w-full">
          <h1 className="text_md text-primary">Dashboard</h1>
          <div className="dark:bg-gray-800 bg-gray-300 w-full rounded p-4 mt-2 grid grid-cols-3 text_sm gap-5 lg:gap-10">
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center gap-1">
                <span>Total Earnings</span>
                <MdError />
              </div>
              <span>1,000,000</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center gap-1">
                <span>Total Earnings</span>
                <MdError />
              </div>
              <span>1,000,000</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center gap-1">
                <span>Total Earnings</span>
                <MdError />
              </div>
              <span>1,000,000</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center gap-1">
                <span>Total Earnings</span>
                <MdError />
              </div>
              <span>1,000,000</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center gap-1">
                <span>Total Earnings</span>
                <MdError />
              </div>
              <span>1,000,000</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center gap-1">
                <span>Total Earnings</span>
                <MdError />
              </div>
              <span>1,000,000</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center gap-1">
                <span>Total Earnings</span>
                <MdError />
              </div>
              <span>1,000,000</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center gap-1">
                <span>Total Earnings</span>
                <MdError />
              </div>
              <span>1,000,000</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center gap-1">
                <span>Total Earnings</span>
                <MdError />
              </div>
              <span>1,000,000</span>
            </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <h1>Pending Evaluation</h1>
          <div className="dark:bg-gray-800 bg-gray-300 w-full rounded p-4 mt-2 flex flex-col gap-7">
            {data.map((item, index) => (
              <div className="flex justify-between items-center" key={index}>
                <span className="text_sm">{item.name}</span>
                <span className="text_sm">{item.internship}</span>
                <Link to={""} className="text-primary">
                  view
                </Link>
                <span className="text_sm">{item.timeLeft}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-[35%]">
        <div>
          <h1 className="text_md text-primary">Recent Orders</h1>
          <div className="dark:bg-gray-800 bg-gray-300 w-full rounded p-4 mt-2 flex flex-col gap-7">
            {orders.map((item, index) => (
              <div
                className="flex justify-between items-center w-full"
                key={index}
              >
                <Link to={""} className="text-[10px] hover:text-primary">
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ProDashboard;
