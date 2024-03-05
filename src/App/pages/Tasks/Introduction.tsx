import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getIntroduction } from "./_request";
import parse from "html-react-parser";

type Props = {
  id: any;
};

const Introduction = (props: Props) => {
  const { id } = props;
  const isLoading = useSelector(
    (state: any) => state.internships.introductionLoading
  );
  const data = useSelector((state: any) => state.internships.introduction);
  const dispatch = useDispatch<any>();
  console.log(data);

  useEffect(() => {
    dispatch(getIntroduction(id));
  }, []);

  if (isLoading)
    return (
      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  return (
    <div className="flex flex-col gap-10 text-secondary">
      {data.map((d: any, i: any) => {
        return <div className="text-secondary" key={i}>{parse(`${d}`)}</div>;
      })}
    </div>
  );
};

export default Introduction;
