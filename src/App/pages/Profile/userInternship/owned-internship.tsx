import { useDispatch, useSelector } from "react-redux";
import { columns } from "../../UserInternships/_components/columns";
import { DataTable } from "../../UserInternships/_components/data-table";
import { data } from "../../UserInternships/ProfessionalInternship";
import { useEffect } from "react";
import { getProInternships } from "../../UserInternships/_request";

type Props = {
  ownedProfile: boolean;
};

const OwnedInternships = ({}: Props) => {
  const dispatch = useDispatch<any>();
  const internships = useSelector(
    (state: any) => state.professional.ProInternships
  );

  useEffect(() => {
    dispatch(getProInternships());
  }, []);
  return (
    <div className="">
      <DataTable
        columns={columns}
        data={(internships?.result as data[]) || []}
      />
    </div>
  );
};

export default OwnedInternships;
