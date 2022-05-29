import { useRouter } from "next/router";

const ClientProjects = () => {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    //load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "vale", clientprojectid: "projecta" },
    });

    // OR if you use replace you can't go back after the navigation
    // router.replace('/clients/vale/projecta');
  };

  return (
    <div>
      <h1 className="title">The Client Project List page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjects;
