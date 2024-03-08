import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "./_request";
import { MiniLoader } from "../Analytics/Index";

const Orders = () => {
  const dispatch = useDispatch<any>();
  const orders = useSelector((state: any) => state.professional.Orders);
  const loading = useSelector((state: any) => state.professional.ordersLoading);
  const error = useSelector((state: any) => state.professional.ordersError);
  console.log(orders);

  const convertDateFormat = (inputDate: any) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dateObject = new Date(inputDate);
    const day = dateObject.getDate();
    const month = months[dateObject.getMonth()];
    const year = dateObject.getFullYear();

    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
        ? "nd"
        : day === 3 || day === 23
        ? "rd"
        : "th";
    const formattedDate = `${day}${suffix} ${month}, ${year}`;

    return formattedDate;
  };

  useEffect(() => {
    dispatch(getOrders());
  }, []);
  if (loading) {
    return <MiniLoader />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map(
              (
                order: {
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
                  orderId: string;
                  orderStatus: string;
                  orderItems: {
                    internshipId: string;
                  };
                  totalPrice: number;
                },
                index: number
              ) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text_sm"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white font-sans uppercase"
                  >
                    #{order.orderId}
                  </th>
                  <td className="px-6 py-4">{convertDateFormat(order.orderDate)}</td>
                  <td className="px-6 py-4">{order.orderStatus}</td>
                  <td className="px-6 py-4">
                    {order.totalPrice.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </td>
                  <td className="px-6 py-4 text-primary cursor-pointer">
                    view
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>

        <div
          id="editUserModal"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative flex flex-col w-full bg-white border rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                  Order Details
                </h3>
                <button
                  aria-label="close"
                  id="editUserModalClose"
                  className="p-2 -mt-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    className="w-6 h-6 dark:text-gray-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="relative flex flex-col p-4 space-y-4 rtl:text-right">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                    Order ID
                  </h4>
                  <span>#0000001</span>
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                    Date
                  </h4>
                  <span>27th Feb, 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                    Status
                  </h4>
                  <span>Successful</span>
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                    Total
                  </h4>
                  <span>#5000</span>
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                    Action
                  </h4>
                  <span className="text-primary cursor-pointer">view</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
