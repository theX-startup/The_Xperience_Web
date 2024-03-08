import { useEffect } from "react";
import { MdError } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDashboardData } from "./_request";
import { MiniLoader } from "../Analytics/Index";

type infoProps = {
  dashboard: {
    totalEarnings: number;
    pendingBalance: number;
    availableBalance: number;
    monthlyEarnings: number;
    averageRating: number;
    AvarageSellingPrice: number;
    NoOfInterns: number;
    NoOfInternships: number;
    totalOrdersNo: number;
  };
  pendingEvaluation: any[];
  recentOrders: {
    orderBy: {
      name: string;
      email: string;
      userId: string;
    };
    orderFor: {
      name: string;
      email: string;
      userId: string;
    };
    orderDate: any;
    orderStatus: string;
    totalPrice: number;
    orderId: string;
    orderItems: [
      {
        internshipId: string;
      }
    ];
  }[];
};

const ProDashboard = () => {
  const dispatch = useDispatch<any>();
  const info: infoProps = useSelector(
    (state: any) => state.professional.dashboardInfo
  );
  const loading = useSelector(
    (state: any) => state.professional.dashboardLoading
  );
  const error = useSelector(
    (state: any) => state.professional.dashboardInfoError
  );

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, []);

  if (loading) {
    return <MiniLoader />;
  }

  if (error) {
    return <div>{error}</div>;
  }
  if (info) {
    return (
      <div className="w-full flex justify-between flex-col md:flex-row">
        <div className="md:w-[60%]">
          <div className="w-full">
            <h1 className="text_md ">Dashboard</h1>
            {info?.dashboard ? (
              <div className="dark:bg-slate-800 bg-slate-300 w-full rounded p-4 mt-2 grid grid-cols-2 lg:grid-cols-3 text-[10px] gap-5 lg:gap-10">
                <div className="flex flex-col justify-center items-center gap-5">
                  <div className="flex items-center gap-1">
                    <span className="text-nowrap ">Total Earnings</span>
                    <MdError />
                  </div>
                  <span>
                    {info?.dashboard?.totalEarnings?.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                  <div className="flex items-center gap-1">
                    <span className="text-nowrap ">Pending Balance</span>
                    <MdError />
                  </div>
                  <span>
                    {info?.dashboard?.pendingBalance?.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                  <div className="flex items-center gap-1">
                    <span className="text-nowrap ">
                      Available for withdrawal
                    </span>
                    <MdError />
                  </div>
                  <span>
                    {info?.dashboard?.availableBalance?.toLocaleString(
                      "en-NG",
                      {
                        style: "currency",
                        currency: "NGN",
                      }
                    )}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                  <div className="flex items-center gap-1">
                    <span className="text-nowrap ">Earning in February</span>
                    <MdError />
                  </div>
                  <span>
                    {info?.dashboard?.monthlyEarnings?.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                  <div className="flex items-center gap-1">
                    <span className="text-nowrap ">Rating</span>
                    <MdError />
                  </div>
                  <span>
                    {info?.dashboard?.averageRating
                      ? info?.dashboard?.averageRating
                      : NaN}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                  <div className="flex items-center gap-1">
                    <span className="text-nowrap ">Average selling price</span>
                    <MdError />
                  </div>
                  <span>
                    {info?.dashboard?.AvarageSellingPrice?.toLocaleString(
                      "en-NG",
                      {
                        style: "currency",
                        currency: "NGN",
                      }
                    )}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                  <div className="flex items-center gap-1">
                    <span className="text-nowrap ">No. of interns</span>
                    <MdError />
                  </div>
                  <span>{info?.dashboard?.NoOfInterns}</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                  <div className="flex items-center gap-1">
                    <span className="text-nowrap"> Internships</span>
                    <MdError />
                  </div>
                  <span>{info?.dashboard?.NoOfInternships}</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                  <div className="flex items-center gap-1">
                    <span className="text-nowrap ">Total orders</span>
                    <MdError />
                  </div>
                  <span>{info?.dashboard?.totalOrdersNo}</span>
                </div>
              </div>
            ) : (
              <div className="min-h-[200px] flex items-center justify-center text_sm">
                <p>No Infomation to display</p>
              </div>
            )}
          </div>
          <div className="w-full mt-10">
            <h1>Pending Evaluation</h1>
            <div className="dark:bg-slate-800 bg-slate-300 w-full rounded p-4 mt-2 flex flex-col gap-7">
              {info?.pendingEvaluation &&
              info?.pendingEvaluation?.length > 0 ? (
                info.pendingEvaluation?.map((item, index) => (
                  <div
                    className="flex justify-between items-center"
                    key={index}
                  >
                    <span className="text_sm">{item?.name}</span>
                    <span className="text_sm">{item?.internship}</span>
                    <Link to={""} className="">
                      view
                    </Link>
                    {/* <span className="text_sm">{item.timeLeft}</span> */}
                  </div>
                ))
              ) : (
                <div className="min-h-[200px] flex items-center justify-center text_sm">
                  <p>No pending evaluation</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:w-[35%] mt-10 md:mt-0">
          <div>
            <h1 className="text_md ">Recent Orders</h1>
            <div className="dark:bg-slate-800 bg-slate-300 w-full rounded p-4 mt-2 flex flex-col gap-7">
              {info?.recentOrders?.map((item, index) => (
                <div
                  className="flex justify-between  w-full items-center gap-2 flex-wrap border-b pb-2"
                  key={index}
                >
                  <div className="text-[10px] flex flex-col gap-2">
                    <h1>
                      {item?.orderBy?.name} just bouught one of your
                      internships.{" "}
                    </h1>
                    <div className="flex gap-2 items-center">
                      <h1>OrderId: </h1>
                      <h1 className="text-primary font-sans text_sm">
                        `#{item?.orderId}`{" "}
                      </h1>
                    </div>
                  </div>
                  <div className="text_sm bg-tertiary p-1 px-3 rounded-sm">
                    <Link to={""} className="">
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
};

export default ProDashboard;
