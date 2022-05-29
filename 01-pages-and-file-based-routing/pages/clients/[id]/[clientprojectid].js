import { useRouter } from "next/router";

const SelectedClientProject = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1 className="title">The Selected Client Project page</h1>
    </div>
  );
};

export default SelectedClientProject;
