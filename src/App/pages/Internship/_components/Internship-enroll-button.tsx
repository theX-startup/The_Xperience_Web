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
    amount: Number(price) * 100,
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
        }
      ],
    },
    publicKey: "pk_test_77cb40e30f91f1176756dff61a825e1ff76e40c6",
    text: "Pay Now",
    subaccount: "ACCT_utxtd88yof1qtdq",
  };

  const onSuccess = (res : any) => {
    const body = {
      internshipId: internshipId,
      transactionId: res.transaction,
    };
    dispatch(addInternship(body));
    console.log(res)

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
        initializePayment({
          onSuccess,
          onClose,
        });
      }}
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};

export default InternshipEnrollButton;
