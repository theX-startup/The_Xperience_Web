import { useDispatch, useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";
import { addInternship } from "./_request";
import { Bounce, toast } from "react-toastify";
import { Back } from "../createInternship/components/back-button";
import { MiniLoader } from "../Analytics/Index";

const PaymentPage = () => {
  const internshipDetails = useSelector(
    (state: any) => state.internships.internship
  );
  const dispatch = useDispatch<any>();
  const user = useSelector((state: any) => state.auth.user);
  const addInternshipLoading = useSelector(
    (state: any) => state.internships.addInternshipLoading
  );

  const componentProps = {
    email: user.email,
    amount: Number(internshipDetails.price) * 100,
    metadata: {
      name: user.name,
      phone: user.mobileNo,
      custom_fields: [
        {
          display_name: "Mobile Number",
          variable_name: "mobile_number",
          value: user.mobileNo,
        },
      ],
    },
    publicKey: "pk_test_77cb40e30f91f1176756dff61a825e1ff76e40c6",
    text: "Pay Now",
    onSuccess: () => {
      dispatch(
        addInternship({
          internshipId: internshipDetails._id,
          transactionId: "",
        })
      );

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
    },
    onClose: () => {
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
    },
  };

  if (addInternshipLoading) {
    return (
      <div className="h-screen flex items-center justify-center flex-col">
        <MiniLoader />
        <span>Registring for Internship.......</span>
      </div>
    );
  }

  return (
    <>
      <Back
        title="Back to dashboard"
        to="../dashboard"
        classname="md:px-[5rem] px-[2rem] mt-[2rem] lg:mt-[3rem]"
      />
      <div className="w-full min-h-[80vh] flex items-center flex-col lg:px-[10rem] md:px-[5rem] px-[2rem] ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex items-center justify-center text-[#0000ff]">
            <h1 className="text-[16px]">Payment Page</h1>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <span className="text-[12px] text-[#0000ff]">
              {internshipDetails.company}
            </span>
            <h2 className="text-[12px]">{internshipDetails.title}</h2>
            <span className="text-[12px] font-sans">
              Price : {internshipDetails.price}
            </span>
          </div>
          <div className="mt-5 bg-[#0000ff] w-[200px] py-2 flex items-center justify-center rounded text-white">
            <PaystackButton {...componentProps} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
