import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BackProps {
  title: string;
  to?: string;
  classname?: string;
}
export const Back = ({ title, to, classname }: BackProps) => {
  return (
    <div className={classname}>
      <Link
        to={`${to ? to : "../"}`}
        className="flex items-center text-sm hover:opacity-75 transition mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        {title}
      </Link>
    </div>
  );
};
