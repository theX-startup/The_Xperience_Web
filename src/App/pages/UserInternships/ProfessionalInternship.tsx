import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MiniLoader } from "../Analytics/Index";
import { getProInternships } from "./_request";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";


export interface data {
  title: string;
  clicks: number;
  impression: number;
  noOfBookmarks: number;
  noOfOrders: number;
  price: number;
  Earnings: number;
  _id: string;
}

const ProfessionalInternship = () => {
  const dispatch = useDispatch<any>();
  const internships = useSelector(
    (state: any) => state.professional.ProInternships
  );
  const loading = useSelector(
    (state: any) => state.professional.proInternshipsLoading
  );
  const error = useSelector(
    (state: any) => state.professional.proInternshipsError
  );


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
    <div className="md:p-6">
      <DataTable
        columns={columns}
        data={(internships?.result as data[]) || []}
      />

    </div>
  );
};

export default ProfessionalInternship;
