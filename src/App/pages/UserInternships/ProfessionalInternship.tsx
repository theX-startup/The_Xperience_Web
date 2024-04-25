import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MiniLoader } from "../Analytics/Index";
import { getProInternships } from "./_request";
import { Pencil } from "lucide-react";

type ProfessionalInternshipProps = {
  result: [
    {
      title: string;
      clicks: number;
      impression: number;
      noOfBookmarks: number;
      noOfOrders: number;
      price: number;
      Earnings: number;
      _id: string;
    }
  ];
  totalInfo: {
    activeInternships: number;
    denied: number;
    draft: number;
    totalInternships: number;
    totalOrders: number;
  };
};

const ProfessionalInternship = () => {
  const dispatch = useDispatch<any>();
  const internships: ProfessionalInternshipProps = useSelector(
    (state: any) => state.professional.ProInternships
  );
  const loading = useSelector(
    (state: any) => state.professional.proInternshipsLoading
  );
  const error = useSelector(
    (state: any) => state.professional.proInternshipsError
  );

  const [active, setActive] = useState<number>();
  useEffect(() => {
    dispatch(getProInternships());
  }, []);
  if (loading) {
    return <MiniLoader />;
  }
  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-[90vh]">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg min-h-full">
        <table className="w-full text-sm text-center rtl:text-right ">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 ">
            <tr>
              <th scope="col" className="px-6 py-3 text-primary">
                Orders
              </th>
              <th scope="col" className="px-6 py-3 text-primary">
                Total Number
              </th>
              <th scope="col" className="px-6 py-3 text-primary">
                Active
              </th>
              <th scope="col" className="px-6 py-3 text-primary">
                Draft
              </th>
              <th scope="col" className="px-6 py-3 text-primary">
                Denied
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 ">
                {internships?.totalInfo?.totalOrders}
              </th>
              <td className="px-6 py-4">
                {internships?.totalInfo?.totalInternships}
              </td>
              <td className="px-6 py-4">
                {internships?.totalInfo?.activeInternships}
              </td>
              <td className="px-6 py-4">{internships?.totalInfo?.draft}</td>
              <td className="px-6 py-4">{internships?.totalInfo?.denied}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Internships / mentorship
              </th>
              <th scope="col" className="px-6 py-3">
                Earnings
              </th>
              <th scope="col" className="px-6 py-3">
                Orders
              </th>
              <th scope="col" className="px-6 py-3">
                Clicks
              </th>
              <th scope="col" className="px-6 py-3">
                Impressions
              </th>
              <th scope="col" className="px-6 py-3">
                Bookmarks
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {internships?.result?.map((internship, index) => {
              return (
                <tr
                  key={index}
                  className="relative bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {internship.title.slice(0, 20) + "..."}
                  </th>
                  <td className="px-6 py-4">
                    {internship.Earnings.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </td>
                  <td className="px-6 py-4">{internship.noOfOrders}</td>
                  <td className="px-6 py-4">{internship.clicks}</td>
                  <td className="px-6 py-4">{internship.impression}</td>
                  <td className="px-6 py-4">{internship.noOfBookmarks}</td>
                  <td className="px-6 py-4">{internship.price}</td>
                  <td className="px-6 py-4 cursor-pointer relative">
                    <h1
                      onClick={() => {
                        setActive(index);
                      }}
                    >
                      ...
                    </h1>
                    {active === index && (
                      <div className="right-[60%] bottom-0 z-50 absolute text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <Link
                          to={`/createInternship/step-2/${internship._id}`}
                          className="relative inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white gap-3"
                        >
                          <Pencil className="w-4 h-4" />
                          Edit
                        </Link>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="w-full md:w-[200px] mt-10 text-center bg-primary p-5 rounded">
        <Link to={"../createInternship"}>Create Internship</Link>
      </div>
    </div>
  );
};

export default ProfessionalInternship;
