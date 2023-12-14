import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="p-4 bg-black flex items-center gap-4 min-h-[80px]">
        {!isHomepage && (
          <Button onClick={() => navigate(-1)} type="secondary">
            <IconArrowNarrowLeft size={20} />
            Zurück
          </Button>
        )}
        <p className="text-white text-xl font-bold">Stackoverflow App</p>
      </header>
      <main className="flex-grow px-4 pt-8 pb-12 bg-white">{children}</main>
      <footer className="p-4 bg-black text-white flex items-center">
        © 2023 JH
      </footer>
    </div>
  );
};
