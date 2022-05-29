import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();

  console.log(router.query.projectid);
  
  return (
    <div>
      <h1 className="title">The Portfolio Project page</h1>
    </div>
  );
};

export default Project;
