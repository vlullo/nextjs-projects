import Link from "next/link";

const Clients = () => {
  const client = [
    { id: "vale", name: "Valntina" },
    { id: "anto", name: "Antonella" },
  ];

  return (
    <div>
      <h1 className="title">The Clients page</h1>
      <ul>
        {client.map((client) => (
          <li key={client.id}>
            <Link href={{
              pathname: '/clients/[id]',
              query: {id: client.id}
            }}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
