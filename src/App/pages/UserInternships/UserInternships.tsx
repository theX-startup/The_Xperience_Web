import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type Props = {
  active: string;
};
const UserInternships = (props: Props) => {
  const { active } = props;
  console.log(active);
  const userInternships = useSelector(
    (state: any) => state.internships.userInternships
  );

  const navigate = useNavigate();

  return (
    <div></div>
  )
};

export default UserInternships;
