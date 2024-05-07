interface props {
  initialData: {
    fullname: string;
  };
}

const UsernameForm = (props: props) => {
  const { initialData } = props;

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Fullname
      </div>
      <p className="text-sm mt-2">{initialData.fullname}</p>
    </div>
  );
};

export default UsernameForm;
