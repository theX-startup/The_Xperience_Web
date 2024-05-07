import { useDispatch, useSelector } from "react-redux";
import InternshipComponent from "../../Components/InternshipComponent";
import { motion } from "framer-motion";
import SubMenu from "../../Components/SubMenu";
import { useEffect } from "react";
import { getInternships } from "./_request";
import RestApi from "@/services/RestApi";
import { useLocation, useSearchParams } from "react-router-dom";
import { SearchInput } from "@/components/search-input";

const InternDashboard = () => {
  const internships = useSelector(
    (state: any) => state.internships.internships
  );
  const dispatch = useDispatch<any>();

  const getCategories = async () => {
    const response = await RestApi.getCall("/categories");
    return response.data;
  };
  const [searchParams] = useSearchParams();
  const pathname = useLocation().pathname;

  const categoryId = searchParams.get("categoryId");
  const title = searchParams.get("title");

  useEffect(() => {
    dispatch(getInternships(title || "", categoryId || ""));
  }, [pathname, categoryId, title]);

  useEffect(() => {
    getCategories().then((data) => {
      dispatch({ type: "categories", payload: data });
    });
  }, []);

  return (
    <>
      <div className="md:hidden md:mb-0 block p-3">
        <SearchInput />
      </div>
      <div className="min-h-screen">
        <div>
          <SubMenu />
        </div>
        <div className="p-5">
          <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
            {internships.map((internship: any, index: any) => {
              if (index < 12) {
                return (
                  <motion.div
                    layoutId={index.toString()}
                    key={index}
                    className="cursor-pointer"
                  >
                    <InternshipComponent
                      data={internship}
                      key={internship._id}
                      index={index}
                    />
                  </motion.div>
                );
              }
            })}
          </div>
          {internships.length === 0 && (
            <div className="text-center text-sm text-muted-foreground">
              <h1 className="text-2xl">No Internships Found</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InternDashboard;
