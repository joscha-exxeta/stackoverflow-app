import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <header>
        <h1 className="font-bold text-xl mb-2">Dashboard</h1>
      </header>
      <nav>
        <Link to={"questions"} className="mr-2 underline">Alle Fragen anzeigen</Link>
      </nav>
    </>
  );
};
