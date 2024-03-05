import { useState } from "react";
import { countryList } from "../../../utils/constant/countrys";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addPhone } from "./_request";
import { useNavigate } from "react-router-dom";

const AddPhone = () => {
  const [selectedCountry, setSelected] = useState({
    name: "",
    code: "",
    emoji: "",
    unicode: "",
    dial_code: "",
    image: "",
  });
  const [showCountryList, setShowCountryList] = useState(false);
  const [filtteredList, setCountryList] = useState(countryList);
  const [phone, setPhone] = useState("");
  const signupLoading = useSelector((state: any) => state.auth.signUpLoading);
  const dispatch = useDispatch<any>();
  const navigation = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected({
      ...selectedCountry,
      name: e.target.value,
    });
    setCountryList(
      countryList.filter((country: any) =>
        country.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("country", selectedCountry.name);
    formData.append("phone", selectedCountry.dial_code + phone);
    dispatch(addPhone(formData, navigation));
  };

  const animation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="flex items-center justify-center w-full min-h-[85vh] px-10">
      <form onSubmit={(e) => handleSubmit(e)} className="w-full flex flex-col">
        <span>Select Country</span>
        <div className="w-full h-[55px] border-2 border-[#0000ff] bg-secondary flex rounded-sm mt-3">
          <div className="flex items-center px-2">
            <img src={selectedCountry.image} alt="" className="w-[30px]" />
          </div>
          <input
            type="text"
            className="w-full text_sm outline-none bg-secondary focus:outline-none focus:ring-0 border-0"
            placeholder="Country"
            value={selectedCountry.name}
            onFocus={() => setShowCountryList(true)}
            onChange={(e) => {
              handleInputChange(e);
              setCountryList(
                countryList.filter((country: any) =>
                  country.name
                    .toLowerCase()
                    .includes(selectedCountry.name.toLowerCase())
                )
              );
            }}
          />
          <div className=" h-full flex items-center bg-secondary rounded-sm px-2">
            <span>{selectedCountry.code}</span>
          </div>
        </div>
        {showCountryList && (
          <motion.div
            variants={animation}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[300px] bg-tertiary overflow-y-scroll"
          >
            {filtteredList.map((country: any) => (
              <div
                key={country.code}
                className="flex items-center justify-between p-2 hover:bg-opacity-85 cursor-pointer"
                onClick={() => {
                  setSelected({
                    name: country.name,
                    code: country.code,
                    emoji: country.emoji,
                    unicode: country.unicode,
                    dial_code: country.dial_code,
                    image: country.image,
                  });
                  setShowCountryList(false);
                }}
              >
                <img src={country.image} alt="" className="w-[30px]" />
                <span>{country.name}</span>
                <span>{country.code}</span>
              </div>
            ))}
          </motion.div>
        )}
        <div className="mt-5">
          <span>Phone Number</span>
          <div className="w-full h-[45px] border-2 border-[#0000ff] bg-secondary flex px-4 rounded-sm mt-3">
            <div className="w-[40px] flex items-center">
              <span className="text-[12px] font-sans">{selectedCountry.dial_code}</span>
            </div>
            <input
              type="tel"
              className="w-full text-[12px] outline-none bg-secondary px-2 font-sans focus:outline-none focus:ring-0 border-0"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />
            <div className=" h-full flex items-center bg-secondary rounded-sm">
              <span>{selectedCountry.code}</span>
            </div>
          </div>
        </div>
        <button
          className={`w-full h-[45px] bg-[#0000ff] text-white rounded-sm mb-5 flex items-center justify-center gap-5 mt-10 ${
            signupLoading ? "bg-opacity-40" : ""
          }`}
          style={{
            cursor: signupLoading ? "not-allowed" : "pointer",
          }}
        >
          Add Mobile Number
          {signupLoading && (
            <div className="h-5 w-5 bg-white animate-spin"></div>
          )}
        </button>
      </form>
    </div>
  );
};

export default AddPhone;
