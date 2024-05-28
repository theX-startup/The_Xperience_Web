import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { Bounce, toast } from "react-toastify";
import { addInternship } from "../../StartInternship/_request";
import { useDispatch, useSelector } from "react-redux";
import { usePaystackPayment } from "react-paystack";

type Props = {
  price: number;
  internshipId: string;
};

const InternshipEnrollButton = ({ price, internshipId }: Props) => {
  const dispatch = useDispatch<any>();
  const user = useSelector((state: any) => state.auth.user);
  const addInternshipLoading = useSelector(
    (state: any) => state.internships.addInternshipLoading
  );
  const internship = useSelector((state: any) => state.internships.internship);

  const componentProps = {
    email: user.email,
    amount: Number(price || 100) * 100,
    metadata: {
      name: user.fullname,
      phone: user.mobileNo,
      custom_fields: [
        {
          display_name: "Internship Title",
          variable_name: "internship_title",
          value: internship.title,
        },
        {
          display_name: "Internship description",
          variable_name: "internship_description",
          value: internship.description,
        },
      ],
    },
    publicKey: "pk_live_f025df48560ad5edc8c856dc27ef12c4eb0d32a3",
    text: "Pay Now",
    subaccount:
      internship.price === 0 ? "" : internship?.user?.paystack?.subaccountId,
  };

  const onSuccess = (res: any) => {
    const body = {
      internshipId: internshipId,
      transactionId: res.transaction,
    };
    dispatch(addInternship(body));
    console.log(res);

    toast.success("Payment Successful", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const onClose = () => {
    toast.error("Payment Cancelled", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const initializePayment = usePaystackPayment(componentProps);
  return (
    <Button
      onClick={() => {
        // if (internship.price === 0) {
        //   const body = {
        //     internshipId: internshipId,
        //     transactionId: "free",
        //   };
        //   dispatch(addInternship(body));
        // } else {
        initializePayment({
          onSuccess,
          onClose,
        });
        // }
      }}
      disabled={addInternshipLoading}
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};

export default InternshipEnrollButton;
